import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, ScrollView } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import {Input,Button} from '../components';
import useUserState,{Actions} from '../context/UserContext';

const  Farms =  ({navigation}) => {
 const [state,dispatch] = useUserState();

   React.useEffect(() => {
      console.log(state.farms)
   }, [state])

    return (
     <Block flex center>
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
      >
       <Block flex style={{marginTop:70}} >
          
          <Block flex left>
          <Text bold style={styles.label}>
            Add farm
          </Text>



        <Block flex center>
        <Input
         placeholder="Farm Name"
         iconContent={<Block/>}
        />

         <Input
         placeholder="District"
         iconContent={<Block/>}
        />

         <Input
         placeholder="Town"
         iconContent={<Block/>}
        />

        <Button
        color="secondary"
        >
          Create 
        </Button>

        </Block>


          </Block>


          <Block>
          <Text bold style={styles.label}>
          Farms
          </Text>
          <Block>
          {
            state.farms.map((farm,index) => (
              <Block  row key={index} style={{backgroundColor:argonTheme.COLORS.BG_COLOR,elevation:3 }} >
                <Text>{farm.name}</Text>
              </Block>
            ))
          }
          </Block>

          </Block>
       </Block>
      </ScrollView>
     </Block>
    );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BG_COLOR,
  },
  content:{
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  label:{
    color:argonTheme.COLORS.PRIMARY,
  }
  
  
});

export default Farms;
