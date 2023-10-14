import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import  categories  from "../../pages/services/ServicesTest/constant";
import { motion } from "framer-motion";
function ExpertiesButtons({dispatch,currentPage,formData,setPageNum}) {
  const MotionFlex = motion(Flex);
  return (
    <Flex
      justifyContent={"space-between"}
      flexDirection={"column"}
      alignItems={"center"}
      position={`${currentPage==='experties'?'relative':'absolute'}`}
      transform={`translateX(${currentPage==='experties'?'0':'-200%'})`}
      h={`${currentPage==='experties'?'calc(100vh - 80px)':'0'}`}
      transition={'all .7s ease-in-out'}

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
          {categories.map((experty) => {
            return (
              <Button
                w={"180px"}
                colorScheme={
                  formData.experties.includes(experty.id) ? "teal" : "teal"
                }
                variant={
                  formData.experties.includes(experty.id)
                    ? "solid"
                    : "outline"
                }
                h={"40px"}
                key={experty.id}
                onClick={() =>
                  dispatch({ type: "CHANGE_EXPERTIES", payload: experty.id })
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
