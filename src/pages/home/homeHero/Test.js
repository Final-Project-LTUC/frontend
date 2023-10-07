"use client";
import React from "react";
import "./Test.scss";
import video from "../assets/video.mp4";
import logo from "../assets/logo.png";

import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Skilify", "Home", "Services", "Catalog", "About us"];
function Test() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <div class="test">
        <div class="heroSection">
          <video
            className="video"
            src={video}
            loop
            autoPlay
            muted
            // allowFullScreen
          >
            {" "}
          </video>

          <div class="container">
            <div class="logo"></div>
            <nav>
              <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />

                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  <ChakraLink as={ReactRouterLink} to="/">
                    <img src={logo} alt="Logo" />
                  </ChakraLink>
                  <ChakraLink as={ReactRouterLink} to="/">
                    Home
                  </ChakraLink>
                  <ChakraLink as={ReactRouterLink} to="/services">
                    Services
                  </ChakraLink>
                  <ChakraLink as={ReactRouterLink} to="/catalog">
                    Catalog
                  </ChakraLink>
                  <ChakraLink as={ReactRouterLink} to="/about">
                    About
                  </ChakraLink>
                </HStack>
                <Flex alignItems={"center"}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem>Link 1</MenuItem>
                      <MenuItem>Link 2</MenuItem>
                      <MenuDivider />
                      <MenuItem>Link 3</MenuItem>
                    </MenuList>
                  </Menu>
                  <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={6}
                  >
                    <Button onClick={toggleColorMode}>
                      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rounded={"full"}
                        variant={"link"}
                        cursor={"pointer"}
                        minW={0}
                      >
                        <Avatar
                          size={"sm"}
                          src={
                            "https://avatars.dicebear.com/api/male/username.svg"
                          }
                        />
                      </MenuButton>
                      <MenuList alignItems={"center"}>
                        <br />
                        <Center>
                          <Avatar
                            size={"2xl"}
                            src={
                              "https://avatars.dicebear.com/api/male/username.svg"
                            }
                          />
                        </Center>
                        <br />
                        <Center>
                          <p>Username</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <ChakraLink as={ReactRouterLink} to="/dashboard">
                          <MenuItem>Your Dashboard</MenuItem>
                        </ChakraLink>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                      </MenuList>
                    </Menu>
                    <Button
                      as={"a"}
                      fontSize={"sm"}
                      fontWeight={400}
                      variant={"link"}
                      href={"#"}
                      onClick={onOpen}
                    >
                      Sign In
                    </Button>
                    <Button
                      as={"a"}
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={"white"}
                      bg={"yellow.400"}
                      href={"#"}
                      _hover={{
                        bg: "yellow.300",
                      }}
                      onClick={onOpen}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                </Flex>
              </Flex>

              {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                  <Stack as={"nav"} spacing={4}>
                    {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                    ))}
                  </Stack>
                </Box>
              ) : null}
            </nav>
          </div>

          <div class="heroText">
            <h1>You can do it!</h1>
            <p> Your Home's Trusted Handyman. From quick fixes to complete transformations, our skilled team is ready to elevate your space.</p>
            <button class="joinNow">Join now</button>
            <button>Know more</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Test;
