//import liraries
import React, { Component,useState,useEffect } from 'react';
import {usePermissions} from 'expo'
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import MapView , {Marker,PROVIDER_GOOGLE}from 'react-native-maps';
import * as  Permissions from 'expo-permissions';


const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.005
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

// create a component
async function getLocationAsync() {
//Location.getCurrentPositionAsync({ enableHighAccuracy: true })
  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return 'granted';
  } else {
    throw new Error('Location permission not granted');
  }
}


const FindVet = (props) => {
  let map = React.createRef();


  const [region, setRegion] = useState({
    latitude: 0.3565617,
    longitude:32.6366883,
    latitudeDelta:LATITUDE_DELTA ,
    longitudeDelta: LONGITUDE_DELTA,
})

  useEffect(() => {
    getLocationAsync()
    .then(() => {
       navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        if (map) {
     
          map.animateToRegion({
            latitude: coords.latitude,
           longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          })
        }
      },
      (error) => alert('Enable location serveces'),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 10000 }
    )
})
.catch((err) => getLocationAsync())
  },[region])




  const onRegionChange = (region) => {
  setRegion({...region})
  }


  return (
    <View style={styles.container}>
         <MapView
         ref={ref => (map = ref)}
          provider={PROVIDER_GOOGLE}
          onRegionChange={region => setRegion(region)}
          style={styles.map}
          showsUserLocation={true}
          initialRegion={region}
          >
          <Marker 
          title="Current location"
          coordinate={region} />
        </MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
        ...StyleSheet.absoluteFillObject,
      },
});

//make this component available to the app
export default FindVet;

