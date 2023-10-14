import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { handymanExperties } from "../../assets/constants";
import { motion } from "framer-motion";
function ExpertiesButtons({dispatch,currentPage,formData,setPageNum}) {
  const MotionFlex = motion(Flex);
  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"center"}
      position={`${currentPage==='experties'?'relative':'absolute'}`}
      transform={`translateY(${currentPage==='experties'?'0':'200%'})`}
      h={`${currentPage==='experties'?'calc(100vh - 80px)':'0'}`}
    >
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
                onClick={() =>
                  dispatch({ type: "CHANGE_EXPERTIES", payload: experty.name })
                }
              >
                {experty.name}
              </Button>
            );
          })}
        </Flex>
      </MotionFlex>
      <Button
        w={"50%"}
        onClick={() =>
          setPageNum(prev=>++prev)
        }
        colorScheme="teal"
      >
        Next
      </Button>
    </Flex>
  );
}

export default ExpertiesButtons;
