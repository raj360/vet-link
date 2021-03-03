//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,TouchableWithoutFeedback,Image } from 'react-native';
import {Block,Text,theme} from 'galio-framework';


// create a component
const HomeHeader = ({title,handleSelectedItem,image,navigator}) => {
  const cardContainer = [styles.card,styles.shadow,styles.container]

  return (
    <Block flex center> 
       <TouchableWithoutFeedback onPress={handleSelectedItem}>
          <Block flex center style={cardContainer}>
          <Block flex>
           <Image  source={image} style={styles.image} />
          </Block>
            <Text size={16} >{title}</Text>
        </Block>
         </TouchableWithoutFeedback>
    </Block>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
   borderRadius:20,
   padding:10
  },
   card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 10,
  },
  image:{
    overflow: 'hidden',
    width:120,
    height:120,
  }
});

//make this component available to the app
export default HomeHeader;
