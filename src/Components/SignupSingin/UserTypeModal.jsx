import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  Heading,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faPaintRoller,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Usertypemodal.css";
import { Link } from "react-router-dom";
function UserTypeModal({ submitAction = "Signin" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userType,setUerType]=useState('');
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal  size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody m={"0"} p={"0"}>
            <Flex w={"100%"} h={"550px"}>
              <Flex
                w={"50%"}
                h={"100%"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                flexDirection={"column"}
                bgPosition="center"
                bgSize={"cover"}
                bgRepeat="no-repeat"
                bgImage="url('https://plus.unsplash.com/premium_photo-1682597000936-c3871d85ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
              ></Flex>
              {submitAction === "Signup" ? (
                <Flex
                  w={"50%"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Flex
                    cursor={"pointer"}
                    h={"50%"}
                    w={"100%"}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ fontSize: "70px" }}
                    />
                    <Heading as={"h4"} fontSize={"lg"}>
                      I'm a client looking for some experts
                    </Heading>
                    <Checkbox
                      name="submitAction"
                      value={"user"}
                      colorScheme="whatsapp"
                      onChange={(e)=>setUerType(e.target.value)}
                    ></Checkbox>
                  </Flex>
                  <Flex
                    h={"50%"}
                    cursor={"pointer"}
                    w={"100%"}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    <FontAwesomeIcon
                      icon={faHammer}
                      style={{ fontSize: "70px" }}
                    />
                    <Heading as={"h4"} fontSize={"lg"}>
                      I'm a Handyman ,looking for work
                    </Heading>
                    <Checkbox
                      name="submitAction"
                      size={"lg"}
                      value={"handyman"}
                      colorScheme="whatsapp"
                      onChange={(e)=>setUerType(e.target.value)}
                    ></Checkbox>
                  </Flex>
                  <Link style={{width:'100%'}} to={`${userType}${submitAction}`}>
                       <Button
                       w={'100%'}
                    colorScheme="whatsapp"
                    borderTopLeftRadius={"0"}
                    borderBottomLeftRadius={"0"}
                    onClick={onClose}
                  >
                      Next
                  </Button></Link>
                </Flex>
              ) : (
                <Flex
                w={"50%"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                alignItems={'center'}
              >
                <Flex
                  cursor={"pointer"}
                  h={"35%"}
                  w={"60%"}
                  flexDirection={"column"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  border={'2px'}
                  borderRadius={'7px'}
                  _hover={{borderColor:'#22c35e'}}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: "70px" }}
                  />
                  <Heading as={"h4"} fontSize={"lg"}>
                    Sign In As A Client
                  </Heading>
                  <Checkbox
                    name="submitAction"
                    value={"user"}
                    colorScheme="whatsapp"
                    onChange={(e)=>setUerType(e.target.value)}
                  ></Checkbox>
                </Flex>
                <Flex
               cursor={"pointer"}
               h={"35%"}
               w={"60%"}
               flexDirection={"column"}
               justifyContent={"space-around"}
               alignItems={"center"}
               border={'2px'}
               borderRadius={'7px'}
               _hover={{borderColor:'#22c35e'}}
                >
                  <FontAwesomeIcon
                    icon={faHammer}
                    style={{ fontSize: "70px" }}
                  />
                  <Heading as={"h4"} fontSize={"lg"}>
                      Sign In As A Handyman
                  </Heading>
                  <Checkbox
                    name="submitAction"
                    size={"lg"}
                    value={"handyman"}
                    colorScheme="whatsapp"
                    onChange={(e)=>setUerType(e.target.value)}
                  ></Checkbox>
                </Flex>
                <Link style={{width:'70%'}} to={`${userType}${submitAction}`}>
                     <Button
                     w={'100%'}
                  colorScheme="whatsapp"
                  onClick={onClose}
                >
                    Next
                </Button></Link>
              </Flex>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserTypeModal;
