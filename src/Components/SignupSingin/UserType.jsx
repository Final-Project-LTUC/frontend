import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import handymanSignUp from "../../assets/handymanSignUp.jpeg";
import "../../pages/auth/auth.scss";
import Form from "../../Components/SignupSingin/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function UserType({submitAction,setUerType,setShowPages,showPages}) {

  return (
    <Flex
    w={"100%"}
    flexDirection={'column'}
    justifyContent={'space-around'}
    alignItems={"center"}
    height={'calc(100vh - 100px)'}
  >
    <Flex w={'100%'} h={'calc(100vh - 100px)'} justifyContent={'space-around'} alignItems={'center'}> 
   <Flex className="submitAction_card" w={'55%'} h={'85%'} alignItems={'center'} flexDirection={'column'} justifyContent={'space-around'} >
   <Heading>{submitAction==='signup'?'Join':'Signin'} as a client or Handyman</Heading>
    <Flex w={'100%'} height={'70%'}  justifyContent={'space-around'} alignItems={'center'}>
   <Flex
      cursor={"pointer"}
      h={"35%"}
      w={"50%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
                 >
      <FontAwesomeIcon icon={faUser} style={{ fontSize: "60px" }} />
      <Heading as={"h4"} fontSize={"lg"}>
      {submitAction==='signup'?"I'm a client looking for handymen":'Sign In as a client'}
      </Heading>
      <Checkbox
        name="submitAction"
        value={"user"}
        colorScheme="teal"
        onChange={(e) => setUerType(e.target.value)}
      ></Checkbox>
    </Flex>
    <Flex
      cursor={"pointer"}
      h={"35%"}
      w={"50%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <FontAwesomeIcon icon={faHammer} style={{ fontSize: "60px" }} />
      <Heading as={"h4"} fontSize={"lg"}>
        {submitAction==='signup'?"I'm a handyman looking for work":'Sign In as a handyman'}
      </Heading>
      <Checkbox
        name="submitAction"
        size={"lg"}
        value={"handyman"}
        colorScheme="teal"
        onChange={(e) => setUerType(e.target.value)}
      ></Checkbox>
    </Flex>
    </Flex>
      <Button
      w={"80%"} colorScheme="teal" 
      onClick={(e)=>setShowPages({...showPages,showSecondPage:true})}
      
      >
        Next
      </Button>
   </Flex>
    <Flex>
    <Player
autoplay
loop
src="https://lottie.host/e1e4d3cb-2549-4fd1-9a82-7c60f7abfc96/rv8JfI8rBW.json"
style={{ height: '400x', width: '400px' }}
>
</Player>
    </Flex>
    </Flex>
  </Flex>
  )
}

export default UserType