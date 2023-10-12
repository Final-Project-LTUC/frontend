import {
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useToast,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { handymanExperties } from "../../assets/constants";
import cookie from "react-cookies";
import ImageUpload from "./ImageUpload";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import formReducer, { initialState } from "../../hooks/Reducers/FormReducer";
const pages = ["experties", "moreInfo", "profilePic"];
function ExpertiesButtons({ setShowPages, showPages }) {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(pages[pageNum]);
  const toast = useToast();
  const MotionFlex = motion(Flex);
  const loginContext = useContext(LoginContext);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJyYW1hIiwicm9sZSI6ImhhbmR5bWFuIiwiaWF0IjoxNjk3MTUyMDExfQ._8N7zaBgcaEUJVnNZ0v2w35Y1a5BCx27MdnMCYsDp8g";
  const navigate = useNavigate();
  const [selectedImg,setSelectedImg]=useState(null);
  async function handleSubmit() {
    try {
      const newFormData={...formData,languages:formData.languages.join(',')}
      const moreInfo=await loginContext.updateData(newFormData,token);
      const imageUpload=await uploadImage();
      console.log(moreInfo,imageUpload);
      toast({
        title: `Something Went Wrong`,
        description: "All Done",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
    dispatch({
      type: "CHANGE_LOCATION",
      payload: {
        long: position.coords.longitude,
        lat: position.coords.latitude,
      },
    });
  };
  const uploadImage = async () => {
    if (selectedImg) {
      const formData = new FormData();
      formData.append('image', selectedImg);

      try {
        const response = await axios.post(`${process.env.REACT_APP_DATABASE_URL}/uploadImg`,
         formData,
         { headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data',
        }},)

        if (response.status === 200) {
          console.log('Image uploaded successfully');
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Error while uploading the image:', error);
      }
    }
  }
  const errorCallback = (error) => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };
  function getLocation() {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  useEffect(() => {
    const currentPage = pages[pageNum];
    setCurrentPage(currentPage);
  }, [pageNum]);
  useEffect(()=>{
    dispatch({type:'CHANGE_IMAGE',payload:selectedImg});
  },[selectedImg])
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
      <Flex
        position={`${currentPage === "moreInfo" ? "relative" : "absolute"}`}
        transform={`translateY(${currentPage === "moreInfo" ? "0%" : "200%"})`}
        w={"100%"}
        h={"80%"}
        justifyContent={"space-around"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text fontSize="3xl">Tell People More About you </Text>
        <Flex
          w={"50%"}
          h={"60%"}
          wrap={"wrap"}
          nt={"flex-start"}
          gap={"30px"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Flex
            justifyContent={"space-around"}
            h={"24"}
            flexDirection={"column"}
            alignItems={"center"}
            w={"50%"}
          >
            <Text fontSize={"2xl"}>Tell Clients Where You At</Text>
            <Button
              onClick={() => getLocation()}
              variant={"ghost"}
              colorScheme="teal"
            >
              Click Here To Allow Locations
            </Button>
          </Flex>
          <Flex w={"100%"} gap={"2em"} justifyContent={"space-between"}>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                onChange={(e) =>
                  dispatch({ type: "CHANGE_NUMBER", payload: e.target.value })
                }
                type="number"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Years of Experience</FormLabel>
              <Input
                onChange={(e) =>
                  dispatch({ type: "CHANGE_YearsOfExperience", payload: e.target.value })
                }
                type="number"
              />
            </FormControl>
          </Flex>
          <FormControl>
            <Textarea
              placeholder="Profile Bio"
              onChange={(e) =>
                dispatch({
                  type: "CHANGE_DESCRIPTION",
                  payload: e.target.value,
                })
              }
            />
          </FormControl>
          <Flex w={"100%"} justifyContent={"space-around"}>
            <Text fontSize={"xl"}>Spoken Languages</Text>
            <Button
              colorScheme="teal"
              variant={`${
                formData.languages.includes("Arabic") ? "solid" : "outline"
              }`}
              onClick={(e)=>dispatch({type:'CHANGE_LANGUAGES',payload:'Arabic'})}
            >
              Arabic
            </Button>
            <Button
              colorScheme="teal"
              variant={`${
                formData.languages.includes("English") ? "solid" : "outline"
              }`}
              onClick={(e)=>dispatch({type:'CHANGE_LANGUAGES',payload:'English'})}

            >
              English
            </Button>
            <Button
              colorScheme="teal"
              variant={`${
                formData.languages.includes("French") ? "solid" : "outline"
              }`}
              onClick={(e)=>dispatch({type:'CHANGE_LANGUAGES',payload:'French'})}
            >
              French
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position={`${currentPage === "profilePic" ? "relative" : "absolute"}`}
        transform={`translateY(${currentPage === "profilePic" ? "0%" : "200%"})`}
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
        <ImageUpload setSelectedImg={setSelectedImg} />
      </Flex>
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
