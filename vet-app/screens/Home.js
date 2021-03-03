import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme,Text } from 'galio-framework';
import { Card } from '../components';
import articles from '../constants/articles';
import HomeHeader from '../components/HomeHeader';
const { width } = Dimensions.get('screen');
import {argonTheme,Images} from '../constants';
import AppointmentCard from '../components/AppointmentCard';

class Home extends React.Component {
  renderArticles = () => {

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
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        
        <Block  flex>
          <Block flex row>
             {/* <HomeHeader 
             image={Images.NoteIcon}
             title = "Profile"
             />
             <HomeHeader
             image={Images.Veterinarian}
             title ="Veterinarians"
             /> */}
            {/* <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} /> */}
          </Block>
          {/* <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full /> */}
          <Text bold >Appointments</Text>
           {
             appointments.map(((appointment,index) => (
                <AppointmentCard
                key = {index}
                fullName = {appointment.fullName}
                farm={appointment.farm.name}
                district={appointment.location.district}
                town = {appointment.location.town}
                category = {appointment.farm.category}
                />
             )))
           }
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  container:{
    backgroundColor: argonTheme.COLORS.BG_COLOR
  }
});

export default Home;
