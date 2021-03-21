import React,{useContext} from 'react';
import { StyleSheet, Dimensions, ScrollView,TouchableWithoutFeedback } from 'react-native';
import { Block, theme,Text } from 'galio-framework';
import { ArticleCard, Card } from '../components';
import HomeHeader from '../components/HomeHeader';
const { width } = Dimensions.get('screen');
import {argonTheme,Images} from '../constants';
import useUserState,{Actions} from '../context/UserContext';
import { getData } from '../user';

 const Home = ({navigation}) =>  {
  const [state,dispatch] =  useUserState();
  
    React.useEffect(()=> {
       getData('USER_DATA').then(user =>  {
         if(user){
           dispatch(Actions.saveUser(user))
         }else{
           navigation.navigate('SignIn')
         }
       })
      .catch(err => console.log(err) )
    },[state]);

    return (
      <Block flex center style={styles.home}>
        <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        
        <Block  flex>
          <Block flex row>
             <HomeHeader 
             handleSelectedItem={()=>navigation.navigate('Profile')}
             image={Images.NoteIcon}
             title = "Profile"
             />
             <HomeHeader
             handleSelectedItem={()=>navigation.navigate('Find Vet',)}
             image={Images.Veterinarian}
             title ="Veterinarians"
             />
          </Block>
          <Text bold>Articles</Text>
          <ArticleCard image={Images.newcastle_disease} title ="NEWCASTLE is an infection of domestic poultry ..."  />
          <ArticleCard image={Images.cocidiosis} title="Coccidiosis is a parasitic disease of the intesti..."   />
          <ArticleCard image={Images.fowl_typhoid} title="Folw typhoid (FT) and pullorum disease (PD) ar..."  />
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
