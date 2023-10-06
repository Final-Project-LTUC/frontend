import React, { useEffect, useReducer, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, loginReducer } from '../Reducers/LoginReducer';
import axios from 'axios';//    
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loginData, dispatch] = useReducer(loginReducer, initialState);
  const [user,setUser]=useState({});
  function can(capability) {
    return loginData.user.capabilities?.includes(capability);
  }

  async function login(username, password,userType) {
    const role=userType==='user'?'user':'handymen';
    try {
        const response=await axios.post(
            `${process.env.REACT_APP_DATABASE_URL}/signin?role=${role}`
            ,{},
            {
                headers:{Authorization:`Basic ${btoa(`${username}:${password}`)}`}
            }
            )
              validateToken(response.data.token);
    } catch (error) {
        console.log(error);
    }
  }
  async function signup(body,userType){
    try{
        const response=await axios.post(`${process.env.REACT_APP_DATABASE_URL}/signup${userType}`,body);
        console.log(response);
    }catch(error){
        console.log(error);
    }
  }

  function logout() {
    setLoginState(false, null, {});
  }

  function validateToken(token,user) {
    try {
      const validUser = jwt_decode(token);
      console.log(validUser)
      if(validUser){
        setUser(user);
        setLoginState(true, token, validUser);
      }
    } catch (e) {
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
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={{ can, login, logout, loginData, dispatch,signup }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
