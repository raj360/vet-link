import React,{useState, useCallback, useEffect} from 'react';
import { StyleSheet, View,ScrollView,Dimensions,Platform} from 'react-native';
import  {Block,Text,theme} from 'galio-framework';
import {argonTheme} from '../constants';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import useUserState from '../context/UserContext';
const {width} = Dimensions.get('screen');


const Chat = (props) => {
   const [state,dispatch] =  useUserState()
   const [messages, setMessages] = useState([]);

     useEffect(() => {
       console.log(state)
    setMessages([
      {
        _id: 1,
        text: 'Hello Doctor',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Raymond',
          avatar:`${state.baseUrl}1608986266942-106577129_1674012229433750_4694060902631707762_o.jpg`,
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
