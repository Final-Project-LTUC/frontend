import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { handymanExperties } from "../../assets/constants";
import { redirect } from "react-router-dom";
import cookie from "react-cookies";
import ImageUpload from "./ImageUpload";
import { Textarea } from "@chakra-ui/react";
import formReducer, { initialState } from "../../hooks/Reducers/FormReducer";
import axios from "axios";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const pages = ["experties", "moreInfo", "profilePic"];
function ExpertiesButtons({ setShowPages, showPages }) {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(pages[pageNum]);
  const toast = useToast();
  const MotionFlex = motion(Flex);
  const loginContext = useContext(LoginContext);
  const token = cookie.load("auth");
  const navigate=useNavigate()
  async function handleSubmit() {
    try {
      const response = await loginContext.updateData(formData, token);
      navigate('/');
    } catch (e) {
      toast({
        title: `Something Went Wrong`,
        description: e.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  function getLocation(){
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  useEffect(() => {
    const currentPage = pages[pageNum];
    setCurrentPage(currentPage);
  }, [pageNum]);
  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"center"}
      h={"calc(100vh - 80px)"}
    >
      <Text fontSize={"5xl"}>Now Let's Finish up your profile</Text>
      <MotionFlex
        position={`${currentPage === "experties" ? "relative" : "absolute"}`}
        initial={currentPage === "experties" ? { x: "0" } : { x: "-200%" }}
        h={"90%"}
        justifyContent={"space-around"}
        flexDirection={"column"}
        transition={{
          damping: 5,
          duration: 0.7,
          type: "spring",
        }}
      >
        <Text fontSize="3xl">Tell Us What You Are Good At</Text>
        <Flex
          w={"100%"}
          h={"70%"}
          wrap={"wrap"}
          justifyContent={"flex-start"}
          gap={"30px"}
          alignItems={"flex-start"}
        >
          {handymanExperties.map((experty) => {
            return (
              <Button
                w={"180px"}
                colorScheme={
                  formData.experties.includes(experty.name) ? "teal" : "teal"
                }
                variant={
                  formData.experties.includes(experty.name)
                    ? "solid"
                    : "outline"
                }
                h={"40px"}
                key={experty.name}
                onClick={(e) =>
                  dispatch({ type: "CHANGE_EXPERTIES", payload: experty.name })
                }
              >
                {experty.name}
              </Button>
            );
          })}
        </Flex>
      </MotionFlex>
      <MotionFlex
        position={`${currentPage === "moreInfo" ? "" : "absolute"}`}
        initial={currentPage === "moreInfo" ? { x: "0" } : { x: "-200%" }}
        w={'100%'}
        h={"80%"}
        justifyContent={"space-around"}
        flexDirection={"column"}
        alignItems={'center'}
        transition={{
          damping: 5,
          duration: 0.7,
          type: "spring",
        }}
      >
        <Text fontSize="3xl">Tell People More About you </Text>
        <Flex
          w={"50%"}
          h={"60%"}
          wrap={"wrap"}
          nt={"flex-start"}
          gap={"30px"}
          alignItems={"flex-start"}
          justifyContent={'center'}
        >
          <Flex justifyContent={'space-around'} h={'24'} flexDirection={'column'} alignItems={'center'} w={'50%'}>
            <Text fontSize={'2xl'}>Tell Clients Where You At</Text>
            <Button onClick={()=>getLocation()} variant={'ghost'} colorScheme="teal">Click Here To Allow Locations</Button>
          </Flex>
          <Input type="text" placeholder="Years Of Experience" />
          <Textarea placeholder="Tell The Clients About You" size="lg" />
          <Input type="number" placeholder="Phone Number" />
        </Flex>
      </MotionFlex>
      <MotionFlex
        position={`${currentPage === "profilePic" ? "relative" : "absolute"}`}
        initial={currentPage === "profilePic" ? { x: "0" } : { x: "-200%" }}
        h={"80%"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        transition={{
          damping: 5,
          duration: 0.7,
          type: "spring",
        }}
      >
        <Text fontSize={"3xl"}>
          High Earning Handymen Have Great Profile Pictures
        </Text>
        <ImageUpload />
      </MotionFlex>
      <Button
        w={"50%"}
        onClick={() =>
          currentPage === "profilePic"
            ? handleSubmit()
            : setPageNum((prev) => prev + 1)
        }
        colorScheme="teal"
      >
        {currentPage === "profilePic" ? "Finish" : "Next"}
      </Button>
    </Flex>
  );
}

export default ExpertiesButtons;
