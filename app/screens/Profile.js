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
import {useQuery} from '@apollo/client';
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import useUserState,{ActionTypes} from "../context/UserContext";
import { USER } from "../graphql/queries";
const { width, height } = Dimensions.get("screen");


const thumbMeasure = (width - 48 - 32) / 3;

const  Profile = ({navigation,route})=>  {
  const [state,dispatch] =  useUserState();

    const  {user} = state;

    const {data,loading,error} = useQuery(USER,{variables:{id:user.id}})

    React.useEffect(()=> {
        
    });

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
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.SECONDARY }}
                    >
                      Farms
                    </Button>
                    <Button
                      small
                      color="white"
                      style={{color: argonTheme.COLORS.SECONDARY ,borderWidth:1,borderColor:argonTheme.COLORS.SECONDARY}}
                    >
                      <Text style={{color:argonTheme.COLORS.SECONDARY}} >
                        chats
                      </Text>
                    </Button>

                     <Button
                      small
                      color="white"
                      style={{color: argonTheme.COLORS.SECONDARY }}
                    >
                      <Text style={{color:argonTheme.COLORS.SECONDARY}} >
                        sign out
                      </Text>
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        0
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Farms</Text>
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
                    {user.fullName}
                    </Text>
                    <Text size={16} color={argonTheme.COLORS.FONTS} style={{ marginTop: 10 }}>
                     {user.email}
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                  </Block>
                  <Block
                    row
                    space="between"
                  >
                    <Text bold size={16} color={argonTheme.COLORS.FONTS} style={{marginTop: 12}}>
                    Farms
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
  }
});

export default Profile;
