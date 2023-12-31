import React from "react";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from "../assets/logo.png";
// import "./Hero.scss";
import './navbar.scss'
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

function Navbar() {
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
    <header className="nav2">
      <div className="container" >
        <nav className={`navbar ${isNavFixed ? 'fixed' : ''}`}
          style={{
            position: isNavFixed ? "fixed" : "relative",
            top: 0,
            left: 0,
            width: isNavFixed ? "100%" : "auto",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: isNavFixed ? "transparent" : "transparent",
            boxShadow: isNavFixed ? "0 15px 15px rgba(0, 0, 0, 0.3)" : "none",
            borderBottom: isNavFixed
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "none",
            borderTop: isNavFixed
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "none",
            borderRadius: isNavFixed ? "30px" : "none",
            padding: isNavFixed ? "10px" : "none",
            letterSpacing: isNavFixed ? "1px" : "none",
            textDecoration: "none",
            overflow: "hidden",
            color: isNavFixed ? "black" : "auto",
            fontWeight: isNavFixed ? "400" : "auto",
            zIndex: isNavFixed ? "1000" : "auto",
            transition: "0.5s",
            backdropFilter: isNavFixed ? "blur(15px)" : "none",
            overflowY: "hidden",
          }}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />

            <HStack
              // as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
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
        </nav>
      </div>
     </header> 
  );
}

export default Navbar;
