import React from 'react';
import { Switch } from 'react-native-gesture-handler';

const UserContext = React.createContext();
const UserDispatcherContext = React.createContext();



export const UserConsumer = UserContext.Consumer;


function userReducer(state,action){
  switch(action.type){
  case 'SAVE_USER':{
    return {user:state.user}
  }
  case 'REMOVE_USER':{
    return {user:null}
  }
  default:{
    return state;
  }

  }
}

const initialState = {
  user:null
}


export const UserProvider =()=> {

 const [state, dispatch] = React.useReducer(userReducer, initialState)

  return (
     <UserContext.Provider value={state} >
         <UserDispatcherContext value={dispatch}>
              
         </UserDispatcherContext>
     </UserContext.Provider>
  )
};

export default UserContext;


