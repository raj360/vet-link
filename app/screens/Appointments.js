import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView,Modal,View,TouchableHighlight} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import AppointmentCard from '../components/AppointmentCard';


const appointments = [
      {
      fullName:'Raymond Kalumba',
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
      fullName:'Christine Abbie',
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
      location:{
        district:'Gulu',
        town:'Nimule'
      },
      farm:{
        name:'Alapa',
        caregory:'Paultry'
      }
    },
    {
      fullName:'Judi Ainembabazi',
      location:{
        district:'Bushenyi',
        town:'Kihura'
      },
      farm:{
        name:'Oluvenda',
        category:'LiveStock'
      }
    },
    {
      fullName:'Simon David',
      location:{
        district:'Wakiso',
        town:'Nansana'
      },
      farm:{
        name:'Trust God',
        category:'LiveStock'
      }
    },
  
  ];


 const  Appointments = (props) =>  {
    
    const [modalVisible, setModalVisible] = React.useState(false);
    const { navigation } = props;
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.articles}
      >

    <Block flex middle style={{marginTop:'20%'}} >
          {
            appointments.map((appointment,index )=> 
              (
            <AppointmentCard
            key={index}
            handleOnClick={()=> setModalVisible(!modalVisible)}
            fullName="Mutaasa William"
            status="Confirmed"
            town="Kampala" 
            district="Kampala"
            specialization="Paultry Vet"
           />
           ))
          }
        </Block>
         <Block flex   >
          <Modal
          style={{width:200, height:500}}
          animationType="fade"
          formSheet
          visible={modalVisible}
         
         onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Block flex  >
          <Block flex center middle >
          <Block flex={0.2} center >
            <Image
            source={{ uri: Images.ProfilePicture }}
            style={{width:100,height:100,borderRadius:50}}
            />
          </Block>
          
          <Block flex={0.4} center >
           <Text size={20} bold>Profile</Text>
          <Text size={18} >Kalumba Raymond Joseph</Text>
          <Text size={16}>Paultry Veterineian</Text>


          <Text size={18} bold>Address</Text>
          <Text size={16}>0787292442</Text>
          <Text size={16}>Kampala</Text>
          <Text size={14}>Makerere</Text>
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
