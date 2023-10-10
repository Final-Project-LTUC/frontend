import React, { useEffect, useReducer, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, loginReducer } from '../Reducers/LoginReducer';
import axios from 'axios';//    
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loginData, dispatch] = useReducer(loginReducer, initialState);
  function can(capability) {
    return loginData.user.capabilities?.includes(capability)&& loginData.token;
  }


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
              validateToken(response.data.token);
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
  async function updateData(body,userType){
    try {
      const response=await axios.post(`${process.env.REACT_APP_DATABASE_URL}/dashupdate`,body);
      return response
    } catch (error) {
      return error;
    }
  }

  function logout() {
    setLoginState(false, null, {});
  }

  function validateToken(token) {
    try {
      const validUser = jwt_decode(token);
        setLoginState(true, token, validUser);
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
    dispatch({ type: 'CHANGE_ERROR', payload: error });
  }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');  
    const token = qs.get('token') || cookieToken || null;
    validateToken(token );
  }, []);

  return (
    <LoginContext.Provider value={{ can, login, logout, dispatch,signup,updateData,loginData }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
