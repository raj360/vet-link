import React,{useState, useCallback, useEffect} from 'react';
import { StyleSheet, View,ScrollView,Dimensions,Platform} from 'react-native';
import  {Block,Text,theme} from 'galio-framework';
import {argonTheme,Images} from '../constants';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import useUserState from '../context/UserContext';
const {width} = Dimensions.get('screen');


const Chat = (props) => {
    const [state,disparch] = useUserState()
   const [messages, setMessages] = useState([]);

     useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Good morning Ssebo',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Raymond',
          avatar:Images.ProfilePicture,
        },
    
      },
    ])
  }, []);


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{marginTop:100,flex:1}} >
      <GiftedChat
          messages={messages}
        onSend={messages => onSend(messages)}
        user={{
        _id: 1,
        }}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
container:{
  backgroundColor:argonTheme.COLORS.BG_COLOR,
  marginTop:'12%'
},
chats:{
   width:'90%',
   paddingVertical: theme.SIZES.BASE,
    
}
})
