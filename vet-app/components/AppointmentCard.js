import React from 'react'
import { StyleSheet, View,Image,Dimensions } from 'react-native';
import { Block,Text, theme} from 'galio-framework';
import {ProfilePicture} from '../constants/Images';
import {Images,argonTheme } from '../constants';
import {Button} from '../components';
import useUserState from '../context/UserContext';
const { width } = Dimensions.get("screen");


const AppointmentCard = ({fullName,farm,district,town,category,image}) => {

   const [state,dispatch] = useUserState();

   console.log(image)

  const cardContainer = [styles.card, styles.shadow,styles.container]

  return (
   <Block flex  card style={cardContainer}>
    <Block flex row >
       <Block>
       <Image style={styles.image}  source={{uri:state.baseUrl + image}}/>
     </Block>
     <Block flex style={{marginLeft:'10%'}}>
        <Text h6 bold>{fullName}</Text>
         <Text color={argonTheme.COLORS.PLACEHOLDER}>{district} - {town} </Text>
          <Text> {farm} </Text>
           <Text>{category} </Text>
     </Block>
    </Block>

     <Block row>
      <Button 
              color='secondary' 
              style={styles.button} >
                Confirm
      </Button>

       <Button color='white' style={styles.button} >
         <Text color={argonTheme.COLORS.SECONDARY}>
           View
         </Text>
       </Button>

        <Button color='white' style={styles.button} >
         <Text color={argonTheme.COLORS.SECONDARY}>
           Cancel
         </Text>
       </Button>

     </Block>
   </Block>
  )
}





export default AppointmentCard

const styles = StyleSheet.create({
  container:{
    padding:15,
    marginLeft:-10

  },
  image:{
    width: 100,
    height:100,
    borderRadius:60
  },
    shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
  },
  button:{
    marginBottom: theme.SIZES.BASE,
    width: 100
  },
  viewButton:{
    marginBottom: theme.SIZES.BASE,
    width: 100,
    borderWidth:2,
   borderColor:argonTheme.COLORS.SECONDARY,
  
  }
})
