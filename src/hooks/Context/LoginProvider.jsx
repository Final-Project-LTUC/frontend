import React, { useEffect, useReducer } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import { initialState, loginReducer } from '../Reducers/LoginReducer';
import axios from 'axios';//    
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loginData, dispatch] = useReducer(loginReducer, initialState);
  function can(capability) {
    return loginData.user.capabilities?.includes(capability);
  }

  async function login(username, password,userType) {
    const role=userType==='user'?'user':'handymen';
    console.log(role)
    try {
        const response=await axios.post(
            `${process.env.REACT_APP_DATABASE_URL}/signin?role=${role}`
            ,{},
            {
                headers:{Authorization:`Basic ${btoa(`${username}:${password}`)}`}
            }
            )
            console.log(response);
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

  function validateToken(token) {
    try {
      const validUser = jwt_decode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log('Token Validation Error', e);
    }
  }

  function setLoginState(loggedIn, token, user, error) {
    cookie.save('auth', token);
    dispatch({ type: 'changeLoginStatus', payload: loggedIn });
    dispatch({ type: 'changeToken', payload: token });
    dispatch({ type: 'changeUser', payload: user });
    dispatch({ type: 'changeError', payload: error });
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
