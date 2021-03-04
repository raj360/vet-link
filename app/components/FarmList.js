//import liraries
import React, { useState,useEffect } from 'react';
import { View, StyleSheet,Dimensions,TouchableWithoutFeedback,Image } from 'react-native';
import { Block, Text, theme } from "galio-framework";
import MapView , {Marker,PROVIDER_GOOGLE}from 'react-native-maps';
import * as  Permissions from 'expo-permissions';
import {Images,argonTheme} from '../constants';
const {width, height} = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.005
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


async function getLocationAsync() {
//Location.getCurrentPositionAsync({ enableHighAccuracy: true })
  const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return 'granted';
  } else {
    throw new Error('Location permission not granted');
  }
}


const FarmList = (props) => {
   let map = React.createRef();
   
   const {farms} = props;

   console.log('farm lits',farms)

  const [region, setRegion] = useState({
    latitude: 0.3565617,
    longitude:32.6366883,
   
})
   const { navigation, item, horizontal, full, style, ctaColor, imageStyle,image } = props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];

     const cardContainer = [styles.card, styles.shadow, style];

     const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];


  return (
   <Block row={horizontal} card flex style={cardContainer}>

        <Block flex style={imgContainer}>
         <View style={imageStyles}>
         <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          >
          
          {
        farms.map((farm,i) => 
         <Marker 
             key={i}
             title={farm.name}
             coordinate={{longitude:farm.longitude,latitude:farm.latitude,  latitudeDelta: LATITUDE_DELTA,longitudeDelta: LONGITUDE_DELTA}} />
          )
          }
        </MapView>
    </View>
   </Block>
      </Block>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 250,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
   map: {
        ...StyleSheet.absoluteFillObject,
      },
});

//make this component available to the app
export default FarmList;
