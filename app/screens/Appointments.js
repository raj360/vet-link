import React,{useState,useEffect} from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView,Modal,View,TouchableHighlight} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import AppointmentCard from '../components/AppointmentCard';
import useUserState from '../context/UserContext';


const appointments = [
      {
      fullName:'Christine Abbie',
      imageUrl:'https://media.gettyimages.com/photos/surprised-black-baby-boy-sitting-on-floor-playing-with-books-picture-id707437915?k=6&m=707437915&s=612x612&w=0&h=hVqOhIgr4IoQbBuF1pG5EMMjLr0oddeiqaVZDcfEn3o=',
      location:{
        district:'Kampala',
        town:'Kasubi'
      },
      farm:{
        name:'Kibiti',
        category:'Live Stock'
      }
    },
    {
      fullName:'Nyombi Victor',
      imageUrl:'https://media.gettyimages.com/photos/smiling-male-gesturing-against-textured-wall-picture-id1193048797?k=6&m=1193048797&s=612x612&w=0&h=h-SRIq9vCvMi3-Qg1Qh4F6rzJyqmIdxvnu2Awj1iH7Y=',
      location:{
        district:'Kampala',
        town:'Kawaala'
      },
      farm:{
        name:'Strong Bond',
        category:'Paultry'
      }
    },
    {
      fullName:'Peterson Alaba',
      imageUrl:'https://media.gettyimages.com/photos/funny-portrait-of-surprised-nerdy-young-man-looking-up-picture-id996800682?k=6&m=996800682&s=612x612&w=0&h=m0N6jkQZtNV2q_gtQIuBZQC8YZzyrYSuz7n-kUKaPe0=',
      location:{
        district:'Gulu',
        town:'Nimule'
      },
      farm:{
        name:'Alapa',
        caregory:'Paultry'
      }
    },
   
  
  
  ];

  


 const  Appointments = (props) =>  {
    const [state,disptach] = useUserState()
    const [modalVisible, setModalVisible] = React.useState(false);
    const [data,setData] = React.useState({
      fullName:'',
      telephon:'',
      town:'',
      district:'',
      email:''

   });

    const handleDetails =(appointment) => {
      console.log(appointment)
          setData({...data,
            fullName:appointment.vet.fullName,
            telephone:appointment.vet.telephone,
            town:appointment.vet.location.town,
            district:appointment.vet.location.district,
            imageUrl:appointment.vet.photo,
            email:appointment.vet.email
          })
          setModalVisible(!modalVisible)
    }

  
    const { navigation } = props;
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}
      >

    <Block flex middle style={{marginTop:'20%'}} >
          {
           state.appointments.map((appointment,index )=> 
           {

  return (
          (
            <AppointmentCard
            key={index}
            appointment = {appointment}
            handleOnClick={()=> handleDetails(appointment)}
            fullName={appointment.fullName}
            status="Confirmed"
            imageUrl={state.baseUrl+appointment.vet.photo}
           />
            ))

           })
          }
        </Block>
         <Block flex   >
          <Modal
          transparent={true}
          style={{width:200, height:500,elevation:5}}
          animationType="fade"
          formSheet
          visible={modalVisible}
         
         onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Block flex center middle>
          <Block flex={0.6} style={{backgroundColor:argonTheme.COLORS.BG_COLOR,width:300,borderRadius:5}}  >
          <Block flex middle >
          <Block flex={-0.4}  >
            <Image
            source={{ uri: state.baseUrl+data.imageUrl }}
            style={{width:100,height:100,borderRadius:50}}
            />
          </Block>
          
          <Block flex={0.8} center style={{marginTop:theme.SIZES.BASE}} >
           <Text size={20} bold>Profile</Text>
          <Text size={18} >{data.fullName}</Text>
          <Text size={16}>Paultry Veterineian</Text>

          <Text size={18} bold>Address</Text>
          <Text size={16}>{data.email}</Text>
          <Text size={16}>{data.telephone}</Text>
          <Text size={16}>{data.district}</Text>
          <Text size={14}>{data.town}</Text>
          </Block>

          </Block >

          <Block center flex={0.2} style={{ marginBottom: theme.SIZES.BASE}} >
             <Button
                  onPress = {()=> setModalVisible(!modalVisible)}
                  small
                  color="white"
                  style={{color: argonTheme.COLORS.SECONDARY ,borderWidth:1,borderColor:argonTheme.COLORS.SECONDARY}}
                    >
                    <Text style={{color:argonTheme.COLORS.SECONDARY}} >
                    close
                    </Text>
              </Button>
          </Block>
          
        </Block>
        </Block>
        
      </Modal>
         </Block>

      </ScrollView>

    );

}

export default Appointments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: argonTheme.BG_COLOR,
    marginTop: Platform.OS === 'android' ? - HeaderHeight : 0,
  },
    articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  modalContainer:{
    backgroundColor:'#FFFFFF',
  }
});
