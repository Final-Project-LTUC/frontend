"use client";

import { Link, Link as ReactRouterLink } from "react-router-dom";
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
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import {LoginContext} from '../../hooks/Context/LoginProvider'
const Links = ["Skilify", "Home", "Services", "Catalog", "About us"];

const NavLink = (props) => {
  const { children } = props;
  const {loginData}=useContext(LoginContext);
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"/"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {loginData,logout}=useContext(LoginContext);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <ChakraLink as={ReactRouterLink} to="/">
              Skilify
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
              About us
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
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <ChakraLink as={ReactRouterLink} to="/dashboard"><MenuItem>Your Dashboard</MenuItem></ ChakraLink>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              {loginData.loggedIn? 
               <Button onClick={()=>logout()}>Logout</Button>:
               //updated
             <>
             <ChakraLink as={ReactRouterLink} to={'/signin'}>
             <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                >
                Sign In
              </Button>
             </ChakraLink>
              <ChakraLink as={ReactRouterLink} to={'/signup'}>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"yellow.400"}
                _hover={{
                  bg: "yellow.300",
                }}
                >
                Sign Up
              </Button>
              </ChakraLink>
              </> 
             }
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
      </Box>
    </>
  );
}
