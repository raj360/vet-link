import React, {useState} from "react";
import { Image } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@use-expo/font';
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//http://10.0.2.2:4000
const client = new ApolloClient({
  uri:'http://10.0.2.2:4000/vet-link/api/v1',
  cache:new InMemoryCache()
});

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";


enableScreens();

import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";
import { UserProvider } from "./context/UserContext";



// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default props => {



  const [isLoadingComplete, setLoading] = useState(false);
  let [fontsLoaded] = useFonts({
    'ArgonExtra': require('./assets/font/argon.ttf'),
  });

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    console.warn(error);
  };


 function _handleFinishLoading() {
    setLoading(true);
  };

  if(!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if(fontsLoaded) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
           <ApolloProvider client={client}>
              <UserProvider>
                <Screens/>
              </UserProvider>
           </ApolloProvider>
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  } else {
    return null
  }
}

