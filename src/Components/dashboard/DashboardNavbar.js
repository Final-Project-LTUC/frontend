"use client";
import { useState } from "react"; // Import useState
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-a-BqCGck--transformed-removebg-preview.png';
import { FaChartBar, FaHome, FaUser, FaMoneyBillWave, FaEdit, FaTasks } from "react-icons/fa";
import './profile.css'
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
  token,
  setShowNum
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
        h={"100vh"}
        position={"sticky"}
        top={"10px"}
        color={"white"}
        w={"15%"}
        className="glassNav"
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
            _hover={
              {}
            }
          >
            <Image src={logo} w={"64"} borderRadius={"10px"} />
            <Flex w={'100%'} h={'12%'} justifyContent={'space-between'} flexDirection={'column'}  alignItems={'center'}>
            <FaHome fontSize={'28'}/>
            <Link
              style={{ fontSize: "1.3em" }}
              textDecoration={"none"}
              as={ReactRouterLink}
              to="/"
              >
              Home
            </Link>
              </Flex>
              <Flex w={'100%'} h={'12%'}  justifyContent={'space-between'} flexDirection={'column'}  alignItems={'center'}>
              <FaUser fontSize={'28'}/>
            <Link
              style={{ fontSize: "1.3em" }}
              onClick={()=>setShowNum(0) }
              >
              Profile
            </Link>
              </Flex>
              <Flex w={'100%'} h={'12%'} justifyContent={'space-between'} flexDirection={'column'} alignItems={'center'}>
                <FaEdit fontSize={'28'}/>
            <Link
              style={{ fontSize: "1.3em" }} 
              onClick={()=>setShowNum(1)}
              >
              Update
            </Link>
              </Flex>
              <Flex w={'100%'} h={'12%'} alignItems={'center'} flexDirection={'column'}   justifyContent={'space-between'}>
                <FaTasks fontSize={'28'}/>
            <Link style={{ fontSize: "1.3em" }} 
           onClick={()=>setShowNum(2)}>
              Tasks
            </Link>
            </Flex>
            {token.role==='handyman'&&<Flex h={'12%'} flexDirection={'column'}  w={'100%'} jjustifyContent={'space-between'} alignItems={'center'}>
            <FaChartBar fontSize={'28'}/>
            <Link
            onClick={()=>setShowNum(3)}
            style={{ fontSize: "1.3em" }}>
              Earnings
            </Link>
              </Flex>}
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




// import { useState } from "react";
// import {
//   Box,
//   Flex,

//   HStack,

//   IconButton,
//   Button,
//   useColorMode,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { FaChartBar, FaHome, FaUser, FaMoneyBillWave, FaEdit, FaTasks } from "react-icons/fa";
// import { Link, Link as ReactRouterLink } from "react-router-dom";

// const SidebarItems = [
//   { label: "Dashboard", icon: <FaChartBar size={20} />, path: "/dashboard" },
//   { label: "Home", icon: <FaHome size={20}/>, path: "/" },
//   { label: "Profile", icon: <FaUser size={20}/>, path: "/profile" },
//   { label: "Earnings", icon: <FaMoneyBillWave size={20}/>, path: "/earnings" },
//   { label: "Update Data", icon: <FaEdit size={20}/>, path: "/update-data" },
//   { label: "Tasks", icon: <FaTasks size={20}/>, path: "/tasks" },
// ];


// export default function Sidebar({
//   profilePicUrl,
//   setShowUpdateForm,
//   setShowTasks,
//   token,
//   setShowNum
// }) {

//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setDashboardSidebarOpen(!isDashboardSidebarOpen);
//   };

//   return (
//     <Box
//     bg="teal.500"
//     h="100vh"
//     position="sticky"
//     top="0"
//     color="white"
//     w={isDashboardSidebarOpen ? "160px" : "70px"}
//     transition="width 0.2s"
//   >
//     <Flex h="100%" flexDirection="column" alignItems="center">
//       <IconButton
//         size="lg"
//         icon={isDashboardSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
//         aria-label="Toggle Menu"
//         onClick={toggleSidebar}
//       />
  
//       <Flex as="nav" w="100%" flexDirection="column" justifyContent="space-between" alignItems="center" h="80%" gap={1}>
//         {SidebarItems.map((item, index) => (
//           <Button
//             as={ReactRouterLink}
//             to={item.path}
//             w="100%"
//             variant="ghost"
//             color="white"
//             leftIcon={item.icon}
//             justifyContent="start"
//             key={index}
//             _hover={{ bg: "teal.600" }}
//             p={7}
//             display="flex"
//           >
//             {isDashboardSidebarOpen ? item.label : null}
//             {item.path === "/" && "Home"}
  
//             {item.path === "/profile" && (
//               <Link style={{ fontSize: "1.3em" }} onClick={() => setShowNum(0)}>
//                 Profile
//               </Link>
//             )}
  
//             {item.path === "/update-data" && (
//               <Link style={{ fontSize: "1.3em" }} onClick={() => setShowNum(1)}>
//                 Update data
//               </Link>
//             )}
  
//             {item.path === "/tasks" && (
//               <Link style={{ fontSize: "1.3em" }} onClick={() => setShowNum(2)}>
//                 Tasks
//               </Link>
//             )}
  
//             {token.role === "handyman" && item.path === "/earnings" && (
//               <Link style={{ fontSize: "1.3em" }} onClick={() => setShowNum(3)}>
//                 Earnings
//               </Link>
//             )}
//           </Button>
//         ))}
//         <Button w="32" onClick={toggleColorMode}>
//           {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//         </Button>
//       </Flex>
  
//       <IconButton
//         w="50px"
//         h="50px"
//         icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//         aria-label="Toggle Dark Mode"
//         onClick={toggleColorMode}
//       />
//     </Flex>
//   </Box>
  
//   );
// }

