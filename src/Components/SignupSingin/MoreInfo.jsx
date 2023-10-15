import React, { useEffect } from 'react'
import {
    Button,
    Flex,
    FormControl,
    Input,
    Text,
    FormLabel,
    Textarea,
  } from "@chakra-ui/react";
function MoreInfo({dispatch,currentPage,formData,setPageNum,userType}) {
    const successCallback = (position) => {
        dispatch({
          type: "CHANGE_LOCATION",
          payload: {
            long: position.coords.longitude,
            lat: position.coords.latitude,
          },
        });
      };
     useEffect(()=>{
      dispatch({type:'DECLARE_LANGUAGES'})
     },[])
      const errorCallback = (error) => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      };
      function getLocation() {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      };
  return (
    <Flex
    w={"100%"}
    justifyContent={"space-around"}
    flexDirection={"column"}
    alignItems={"center"}
    position={`${currentPage==='moreInfo'?'relative':'absolute'}`}
    transform={`translateX(${currentPage==='moreInfo'?'0':'-200%'})`}
    h={`${currentPage==='moreInfo'?'calc(100vh - 80px)':'0'}`}
    transition={'all .7s ease-in-out'}

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
        <Text fontSize={"2xl"}>{userType==='handymen'?'Tell Clients Where You At':'Tell Handymen Where You At'}</Text>
        <Button
          onClick={() => getLocation()}
          variant={"outline"}
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
        {userType==='handymen'&&
        <FormControl>
          <FormLabel>Years of Experience</FormLabel>
          <Input
            onChange={(e) =>
              dispatch({ type: "CHANGE_YearsOfExperience", payload: e.target.value })
            }
            type="number"
          />
        </FormControl>}
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
      {formData.languages&&
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
      </Flex>}
    </Flex>
    <Button
        w={"50%"}
        onClick={() =>
          setPageNum(prev=>++prev)
        }
        colorScheme="teal"
      >
        Next
      </Button>  
      
      </Flex>  )
}

export default MoreInfo