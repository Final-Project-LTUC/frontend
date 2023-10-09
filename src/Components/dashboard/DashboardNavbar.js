"use client";
import { useState } from "react"; // Import useState
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
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

const Links = ["Skilify", "Home", "Dashboard"];

const NavLink = (props) => {
  const { children } = props;

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

const DropdownMenuItem = ({ children }) => {
  return <MenuItem>{children}</MenuItem>;
};

export default function Simple() {

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

  const handleDashboardClick = () => {
    setDashboardSidebarOpen(!isDashboardSidebarOpen);
  };

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
            <ChakraLink
              as={ReactRouterLink}
              to="/dashboard"
              onClick={handleDashboardClick}
            >
              Dashboard
            </ChakraLink>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>{/* ... (same as before) */}</Menu>
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
                  <ChakraLink as={ReactRouterLink} to="/dashboard">
                    <MenuItem>Your Dashboard</MenuItem>
                  </ChakraLink>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem> onCliLogout</MenuItem>
                </MenuList>
              </Menu>
              {/* Dropdown Menu for "Update data," "Delete Profile," and "Tasks" */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  More Actions
                </MenuButton>
                <MenuList>
                    <ChakraLink as={ReactRouterLink} to="/update">
                  <DropdownMenuItem >
                      Update data
                  </DropdownMenuItem>
                    </ChakraLink>
                    <ChakraLink as={ReactRouterLink} to="/delete">
                  <DropdownMenuItem>
                      Delete Profile
                  </DropdownMenuItem>
                    </ChakraLink>

                    <ChakraLink as={ReactRouterLink} to="/tasks">
                  <DropdownMenuItem>
                      Tasks
                  </DropdownMenuItem>
                    </ChakraLink>
                </MenuList>
              </Menu>
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
