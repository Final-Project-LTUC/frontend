"use client";
import { useState } from "react"; // Import useState
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  MenuItem,
  useDisclosure,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Skilify", "Home", "Dashboard"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box as="a" px={2} py={1} rounded={"md"} href={"/"}>
      {children}
    </Box>
  );
};

const DropdownMenuItem = ({ children }) => {
  return <MenuItem>{children}</MenuItem>;
};

export default function Simple({
  profilePicUrl,
  setShowUpdateForm,
  setShowTasks,
  token
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

  const handleDashboardClick = () => {
    setDashboardSidebarOpen(!isDashboardSidebarOpen);
  };
  return (
    <>
      <Box
        bg={"teal"}
        h={"100vh"}
        position={"sticky"}
        top={"0px"}
        color={"white"}
        w={"20%"}
      >
        <Flex
          h={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
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
            w={"100%"}
            display={{ base: "none", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            h={"80%"}
            gap={"5%"}
          >
            <Image src={profilePicUrl} w={"48"} borderRadius={"10px"} />
            <Link
              style={{ fontSize: "1.3em" }}
              textDecoration={"none"}
              as={ReactRouterLink}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ fontSize: "1.3em" }}
              onClick={() => {
                setShowUpdateForm(false);
                setShowTasks(false);
              }}
            >
              Profile
            </Link>
            {token.role==='handyman'&&
            <Link style={{ fontSize: "1.3em" }}>
              Earnings
            </Link>}
            <Link
              style={{ fontSize: "1.3em" }} 
              onClick={() => {
                setShowTasks(false)
                setShowUpdateForm(true)}}
            >
              Update data
            </Link>
            <Link style={{ fontSize: "1.3em" }} onClick={()=>{
                setShowTasks(true);
                setShowUpdateForm(false);
            }}>
              Tasks
            </Link>
            <Button w={"32"} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
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
      </Box>
    </>
  );
}
