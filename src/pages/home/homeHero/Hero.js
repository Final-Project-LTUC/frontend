"use client";
import React, { useEffect, useState } from "react";
import "./Hero.scss";
import video from "../assets/video.mp4";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

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
  Tooltip,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
import BellComponent from "../../../Components/icons/BellComponent";
const Links = ["Skilify", "Home", "Services", "Catalog", "About us"];

function Hero() {
  const { loginData, logout } = useContext(LoginContext);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isNavFixed, setIsNavFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0 && !isNavFixed) {
      setIsNavFixed(true);
    } else if (scrollPosition === 0 && isNavFixed) {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavFixed]);

  // const mar = 80;
  const textColor = isNavFixed ? "black" : "white";
  return (
    <header>
      <div className={`test ${isNavFixed ? "fixed" : ""}`}>
        <div className="heroSection">
          <video className="video" src={video} loop autoPlay muted />
          <div className="container">
            <nav
              // style={{ marginLeft: mar }}
              className={isNavFixed ? "fixed" : ""}
            >
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
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  justifyContent={"space-between"}
                  color={textColor}
                >
                  <div className="logo">
                    <ChakraLink as={ReactRouterLink} to="/">
                      <img src={logo} alt="Logo" />
                    </ChakraLink>
                  </div>
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

                  <Flex alignItems={"center"}>
                    <Stack
                      flex={{ base: 1, md: 0 }}
                      justify={"flex-end"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      direction={"row"}
                      spacing={6}
                    >
                      <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                      </Button>
                      {loginData.loggedIn ? (
                        <>
                          <Menu>
                            <Tooltip
                              label="Visit your profile"
                              aria-label="Visit your profile"
                              placement="top"
                            >
                              <ChakraLink as={ReactRouterLink} to="/dashboard">
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
                              </ChakraLink>
                            </Tooltip>
                            <MenuList alignItems={"center"}>
                              <br />
                            </MenuList>
                          </Menu>
                          <BellComponent />
                        </>
                      ) : null}

                      {loginData.loggedIn ? (
                        <Button onClick={() => logout()}>Logout</Button>
                      ) : (
                        <>
                          <Button
                            as={"a"}
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={"sm"}
                            fontWeight={700}
                            color={"black"}
                            bg={"gray.100"}
                            _hover={{
                              bg: "teal.100",
                            }}
                            onClick={onOpen}
                            // variant={"link"}
                            href={"/signin"}
                          >
                            Sign In
                          </Button>
                          <Button
                            as={"a"}
                            display={{ base: "none", md: "inline-flex" }}
                            fontSize={"sm"}
                            fontWeight={600}
                            color={"white"}
                            bg={"teal.400"}
                            href={"/signup"}
                            _hover={{
                              bg: "teal.300",
                            }}
                            onClick={onOpen}
                          >
                            Sign Up
                          </Button>
                        </>
                      )}
                    </Stack>
                  </Flex>
                </HStack>
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
            <p>
              {" "}
              Your Home's Trusted Handyman. From quick fixes to complete
              transformations, our skilled team is ready to elevate your space.
            </p>
            <ChakraLink as={ReactRouterLink} to="/services">
              <button class="joinNow"> Services </button>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about">
              <button>Know more</button>
            </ChakraLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
