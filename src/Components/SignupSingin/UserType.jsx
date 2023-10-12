import React, { useState,useRef,useEffect } from "react";
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
import {motion} from 'framer-motion'
function UserType({submitAction,setUerType,setShowPages,showPages}) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  
  
  const handleCheckboxClick1 = () => { // user
    setIsChecked1(true);
    setIsChecked2(false);

  };

  const handleCheckboxClick2 = () => { // handyman
    setIsChecked1(false);
    setIsChecked2(true);
  };

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
      h={"45%"}
      w={"50%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
                 >
      <FontAwesomeIcon icon={faUser} style={{ fontSize: "60px" }} />
      <Heading as={"h4"} fontSize={"lg"}>
      {submitAction==='signup'?"I'm a client looking for handymen":'Sign In as a client'}
      </Heading>
      <motion.div
        className="checkbox-container"
        whileTap={{ scale: 0.9 }} 
        transition={{ duration: 0.4 }}
       
      >
        <motion.div
          className={`checkbox-circle ${isChecked1 ? "active" : ""}`}
          onClick={()=>{
            handleCheckboxClick1();
            setUerType('user');
          }}
          whileHover={{ scale: 1.1 }}
        />
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={() => {}}
          style={{ display: "none" }} 
        />
      </motion.div>

    </Flex>
    <Flex
      h={"45%"}
       w={"50%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <FontAwesomeIcon icon={faHammer} style={{ fontSize: "60px" }} />
      <Heading as={"h4"} fontSize={"lg"}>
        {submitAction==='signup'?"I'm a handyman looking for work":'Sign In as a handyman'}
      </Heading>
      <motion.div
        className="checkbox-container"
        whileTap={{ scale: 0.9 }} 
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className={`checkbox-circle ${isChecked2 ? "active" : ""}`}
          onClick={()=>{
            handleCheckboxClick2();
            setUerType('handymen')
          }}
          whileHover={{ scale: 1.1 }} 
        />
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => {}}
          style={{ display: "none" }} 
        />
      </motion.div>
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