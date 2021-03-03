import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    flex
                    center
                    row
                    space="between"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                     center
                    style={styles.button}
                    >
                      Appointments
                    </Button>


                    <Button
                    center
                    color="white"
                    style={{ borderWidth:1,borderColor:argonTheme.COLORS.SECONDARY,width:100}}
                    >
                      <Text 
                      style={{color:argonTheme.COLORS.SECONDARY}}
                      >
                        signout
                      </Text>
                    </Button>

                    <Button
                    center
                    color="white"
                    style={{width:100}}
                    >
                      <Text 
                      style={{color:argonTheme.COLORS.SECONDARY}}
                      >
                        close
                      </Text>
                    </Button>
                  </Block>
                  
                  <Block row space="between">
                 


                    <Block middle>

                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                       0
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Appointments</Text>
                    </Block>

                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        0
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Messages</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color={argonTheme.COLORS.FONTS}>
                      Raymond Kalumba 
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.FONTS} style={{ marginTop: 10 }}>
                      raymondkalumba360@yahoo.com
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Button
                     style={{ backgroundColor: argonTheme.COLORS.SECONDARY,width:150 }}
                      textStyle={{
                        color:"#FFFFFF" ,
                        fontWeight: "500",
                        fontSize: 16
                      }}
                    >
                     Articles
                    </Button>
                  </Block>
                  <Block
                    row
                    space="between"
                  >
                    <Text bold size={16} color={argonTheme.COLORS.FONTS} style={{marginTop: 12}}>
                    Recent appointments
                    </Text>
                    <Button
                      small
                     style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}
                      textStyle={{ color: "#FFFFFF", fontSize: 12, marginLeft: 24 }}
                    >
                      View all
                    </Button>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: "wrap" }}>
                      {/* {Images.Viewed.map((img, imgIndex) => (
                        <Image
                          source={{ uri: img }}
                          key={`viewed-${img}`}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      ))} */}
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      
      </Block>
    );
  }
}



const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  button:{
  backgroundColor: argonTheme.COLORS.SECONDARY,
  width: 100,
  }
});

export default Profile;
