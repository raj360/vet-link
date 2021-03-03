import React,{useContext} from 'react';
import { StyleSheet, Dimensions, ScrollView,TouchableWithoutFeedback } from 'react-native';
import { Block, theme } from 'galio-framework';
import { ArticleCard, Card } from '../components';
import HomeHeader from '../components/HomeHeader';
const { width } = Dimensions.get('screen');
import {argonTheme,Images} from '../constants';
import UserContext from '../context/UserContext';

 const Home = ({navigation})=>  {
     
  const user = useContext(UserContext)

   console.log(user);
    
    return (
      <Block flex center style={styles.home}>
        <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        
        <Block  flex>
          <Block flex row>
             <HomeHeader 
             handleSelectedItem={()=>navigation.navigate('Profile',{user:4})}
             image={Images.NoteIcon}
             title = "Profile"
             />


             <HomeHeader
             handleSelectedItem={()=>navigation.navigate('Find Vet',{userId:2})}
             image={Images.Veterinarian}
             title ="Veterinarians"
             />
          </Block>
          <ArticleCard  />
           <ArticleCard  />
            <ArticleCard  />
        </Block>
      </ScrollView>
      </Block>
    );
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
