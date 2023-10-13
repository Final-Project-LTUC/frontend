import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast
} from "@chakra-ui/react";

import React, { useContext, useEffect, useReducer, useState } from "react";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import formReducer, {
  initialState,
  checkAllValidation,
} from "../../hooks/Reducers/FormReducer";
import "../../pages/auth/auth.scss";
import { useNavigate } from "react-router-dom";
import Type from "./UserType"





// Create and export the socket connection




function Form({ submitAction, userType,setShowPages,showPages }) {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [disableButton, setDisabledButton] = useState(true);
  const loginContext = useContext(LoginContext);
  const toast  = useToast();
  const navigate = useNavigate();
  async function handleSubmit(e) {

    e.preventDefault();
    
    try{
      // const socket = io.connect('http://localhost:5000');
      console.log(userType,'foooooooooooooorm')
      console.log(submitAction);
      const response=submitAction==='signup'?
      await loginContext.signup(formData,userType):
      await loginContext.login(formData.username,formData.password,userType);
    
      if(userType==='handymen'&&submitAction==='signup'&&response.status===200){
      //   let userId = response.data.id;
      //   console.log(userId)
      //  socket.emit("signIn", { userId });
      // console.log("respnese userId",userId)
      console.log('well done ')
        setShowPages({...showPages,showExpertiesPage:true,showSecondPage:false});
        toast({
          title: 'Welcome To Skillify ',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }else  if(submitAction==='signup'&&response.status===200&&userType==='user'){
       
        // let userId = response.data.id+response.data.username;
        //   console.log(userId)
        //  socket.emit("signIn", { userId });
        // console.log("respnese userId",userId)

        toast({
          title: 'Welcome To Skillify ',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(()=>
        navigate('/')
        ,1500)

      }else if (submitAction==='signin'&&response.status===200){
        toast({
          title: `Welcome Back ${response.data.username}`,
          description: "Have A good day",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(()=>
        navigate('/')
        ,1500)
      } else throw new Error(response.response.data.message);
      }
        catch(e){
          toast({
            title: `Something Went Wrong`,
            description: e.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
    }
  }

  useEffect(() => {
    setDisabledButton(!checkAllValidation(formData));
  }, [formData]);
  return (
    <Flex  w={'100%'} height={'calc(100vh - 100px)'} alignItems={'center'} justifyContent={'space-around'} >
      <Flex w={'95%'} justifyContent={'space-between'} alignItems={'center'} borderRadius={'15px'} height={'95%'} className="secondPageForm">
      <Flex direction="column" ml={'1em'} w={"45%"} h={'80%'} justifyContent={'center'} gap={'15px'} alignItems={'flex-start'} >
      <Heading alignSelf={'center'}>{submitAction==='signup'?"Welcome To Skilify":"Welcome Back"}</Heading>
      {submitAction === "signup" ? (
        <FormControl isInvalid={!formData.isValidEmail}>
          <FormLabel>Email address</FormLabel>
          <Input
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
            }
            type="email"
          />
          <FormErrorMessage>Kindly Enter A Valid Email</FormErrorMessage>
        </FormControl>
      ) : null}
      <FormControl isRequired={'true'} isInvalid={!formData.isValidUsername}>
        <FormLabel>Username</FormLabel>
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE_USERNAME", payload: e.target.value })
          }
          value={formData.username}
          type="text"
        />
        <FormErrorMessage>This Username Is Invalid </FormErrorMessage>
      </FormControl>
      {submitAction === "signup" ? (
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            onChange={(e) =>
              dispatch({ type: "CHANGE_NAME", payload: e.target.value })
            }
            value={formData.name}
            type="text"
          />
        </FormControl>
      ) : null}
      <FormControl isInvalid={!formData.isValidPassword}>
        <FormLabel>Password</FormLabel>
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value })
          }
          type="password"
          value={formData.password}
        />
        <FormErrorMessage>
          Password Must Be At least 8 letters and contains at least on symbo @!
        </FormErrorMessage>
      </FormControl>
      <Button
        w={'180px'}
        height={'45px'}
        onClick={(e) => handleSubmit(e)}
        mt={4}
        colorScheme="teal"
        type="submit"
        isDisabled={disableButton}
      >
        {submitAction === "signup" ? "Signup" : "Signin"}
      </Button>
      </Flex>
      <Box w={'50%'} h={'100%'} borderTopRightRadius={'15px'} borderBottomRightRadius={'15px'} bgSize={'cover'} bgRepeat={'no-repeat'} bgImage={'url(https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'} >

      </Box>
      </Flex>
   
     
    </Flex>
  );
}

export default Form;
