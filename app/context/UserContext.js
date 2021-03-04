import React from 'react';


//state management
const UserContext = React.createContext();
//reducer managment
const UserDispatcherContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

const initialState = {
  user:null,
  isLoggedIn:false,
  appointments:[],
  farms:[]
}

 const  reducer = (state=initialState,action)=>{

  switch(action.type){
  case ActionTypes.SAVE_USER:{
    return {...state,user:action.payload,isLoggedIn:true}
  }
  case ActionTypes.REMOVE_USER:{
    return {...state,user:null,isLoggedIn:false}
  }
  case ActionTypes.SAVE_APPOINTMENTS:{
    return {...state,appointments:action.payload}
  }
  case ActionTypes.SAVE_FARMS:{
    return {...state,farms:action.payload}
  }
  default:{
    throw new Error();
  }

  }
}



export const UserProvider =({children})=> {

 const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
     <UserContext.Provider value={state} >
         <UserDispatcherContext.Provider value={dispatch}>
            {children}
         </UserDispatcherContext.Provider>
     </UserContext.Provider>
  )
};

//exposing state neatly
const userState = () => React.useContext(UserContext);

const userDispatch = () => React.useContext(UserDispatcherContext)

const useUserState = () => [userState(),userDispatch()];
//used like const [state,dispatch] = useUserState()

export const  ActionTypes = {
  SAVE_USER:'SAVE_USER',
  REMOVE_USER:'REMOVE_USER',
  SAVE_APPOINTMENTS:'SAVE_APPOINTMENTS',
  SAVE_FARMS:'SAVE_FARMS',
};


export const Actions = {
  saveUser:(data) => ({type:ActionTypes.SAVE_USER,payload:data}),
  logoutUser:() => ({type:ActionTypes.REMOVE_USER}),
  saveAppointments:(data) => ({type:ActionTypes.SAVE_APPOINTMENTS,payload:data}),
  saveFarms:(data) => ({type:ActionTypes.SAVE_FARMS,payload:data})
}


export default useUserState;