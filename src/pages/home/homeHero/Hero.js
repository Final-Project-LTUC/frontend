"use client";
import React from "react";
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
const Links = ["Skilify", "Home", "Services", "Catalog", "About us"];
function Hero() {
  const [isNavFixed, setIsNavFixed] = React.useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0 && !isNavFixed) {
      setIsNavFixed(true);
    } else if (scrollPosition === 0 && isNavFixed) {
      setIsNavFixed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavFixed]);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginData, logout } = useContext(LoginContext);
  console.log(loginData);
  const mar = 80;
  return (
    <header>
      <div className={`test ${isNavFixed ? "fixed" : ""}`}>
        <div className="heroSection">
          <video className="video" src={video} loop autoPlay muted />
          <div className="container">
            <nav style={{ marginLeft: mar }}>
              <Navbar />
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
