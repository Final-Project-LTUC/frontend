import React, { useEffect, useReducer, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, loginReducer } from '../Reducers/LoginReducer';
import axios from 'axios';//    
import io from 'socket.io-client';
export const LoginContext = React.createContext();
function LoginProvider(props) {
  //  useEffect(()=>{
  //   let token1 =cookie.load('auth'); 
  //   console.log(token1,"tokken cookie")
  //  }
  //  )
  const socketI = io('https://backend-n1je.onrender.com', { autoConnect: false });
  const [socket,setSocket] = useState(socketI)
  const [loginData, dispatch] = useReducer(loginReducer, initialState);
  function can(capability) {
    return loginData.user.capabilities?.includes(capability)&& loginData.token;
  }
  // useeffect to load when you have tokken in the cockies

  async function login(username, password,userType) {
    const role=userType==='user'?'user':'handyman'; // fix this abdeen it is only working for the second condition
    try {
        const response=await axios.post(
            `${process.env.REACT_APP_DATABASE_URL}/signin?role=${role}`
            ,{},
            {
                headers:{Authorization:`Basic ${btoa(`${username}:${password}`)}`}
            }
            )
            
             socket.connect()
              // validateToken(response.data.token);
              setLoginState(true, response.data.token, response.data);
              console.log("valid user", response.data.token)
              let userId = response.data.id;
              console.log(userId)
              socket.emit("signIn", { userId });
              
              return response;
    } catch (error) {
          return error;
    }
  }
  async function signup(body,userType){
    try{
        const response=await axios.post(`${process.env.REACT_APP_DATABASE_URL}/signup${userType}`,body);
          login(body.username,body.password);
        return response;
    }catch(error){
        return error;
    }
  }
  async function updateData(body,token){
    console.log(token)
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.put(`${process.env.REACT_APP_DATABASE_URL}/dashupdate`, body, {
        headers: headers,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Failed to fetch data');
        return response;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return error;
    }
  }

  function logout() {
    console.log("loged out ")


    socket.emit("signOut", {userId:loginData.user.id} );
    setLoginState(false, null, {});
    
  }

  function validateToken(token) {
    try {
      const validUser = jwt_decode(token);
      // setLoginState(false, null, {});
      setLoginState(true, token,validUser);
      socket.connect()
      socket.emit("signIn", { userId:validUser.id });

        console.log("valid user", validUser)
    } catch (e) {
      console.log()
      setLoginState(false, null, {}, e);
      console.log('Token Validation Error', e);
    }
  }

  function setLoginState(loggedIn, token, user, error) {
    cookie.save('auth', token);
    dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: loggedIn });
    dispatch({ type: 'CHANGE_TOKEN', payload: token });
    dispatch({ type: 'CHANGE_USER', payload: user });
    // dispatch({ type: 'CHANGE_ERROR', payload: error });
  }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');  
    const token = qs.get('token') || cookieToken || null;
    validateToken(token );
  }, []);

  return (
    <LoginContext.Provider value={{ socket,can, login, logout, dispatch,signup,updateData,loginData }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
