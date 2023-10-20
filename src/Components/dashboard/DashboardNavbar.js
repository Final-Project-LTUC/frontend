// "use client";
// import { useState } from "react"; // Import useState
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   MenuItem,
//   useDisclosure,
//   Stack,
//   useColorMode,
//   Image,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// const Links = ["Skilify", "Home", "Dashboard"];

// const NavLink = (props) => {
//   const { children } = props;

//   return (
//     <Box as="a" px={2} py={1} rounded={"md"} href={"/"}>
//       {children}
//     </Box>
//   );
// };

// const DropdownMenuItem = ({ children }) => {
//   return <MenuItem>{children}</MenuItem>;
// };

// export default function Simple({
//   profilePicUrl,
//   setShowUpdateForm,
//   setShowTasks,
// }) {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

//   const handleDashboardClick = () => {
//     setDashboardSidebarOpen(!isDashboardSidebarOpen);
//   };
//   return (
//     <>
//       <Box
//         bg={"teal"}
//         h={"100vh"}
//         position={"sticky"}
//         top={"0px"}
//         color={"white"}
//         w={"20%"}
//       >
//         <Flex
//           h={"100%"}
//           flexDirection={"column"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />

//           <HStack
//             as={"nav"}
//             w={"100%"}
//             display={{ base: "none", md: "flex" }}
//             flexDirection={"column"}
//             justifyContent={"space-around"}
//             alignItems={"center"}
//             h={"80%"}
//             gap={"5%"}
//           >
//             <Image src={profilePicUrl} w={"48"} borderRadius={"10px"} />
//             <Link
//               style={{ fontSize: "1.3em" }}
//               textDecoration={"none"}
//               as={ReactRouterLink}
//               to="/"
//             >
//               Home
//             </Link>
//             <Link
//               style={{ fontSize: "1.3em" }}
//               onClick={() => {
//                 setShowUpdateForm(false);
//                 setShowTasks(false);
//               }}
//             >
//               Profile
//             </Link>
//             <Link style={{ fontSize: "1.3em" }}>
//               Earnings
//             </Link>
//             <Link
//               style={{ fontSize: "1.3em" }}
//               onClick={() => {
//                 setShowTasks(false)
//                 setShowUpdateForm(true)}}
//             >
//               Update data
//             </Link>
//             <Link style={{ fontSize: "1.3em" }} onClick={()=>{
//                 setShowTasks(true);
//                 setShowUpdateForm(false);
//             }}>
//               Tasks
//             </Link>
//             <Button w={"32"} onClick={toggleColorMode}>
//               {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             </Button>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Flex,
//   IconButton,
//   useDisclosure,
//   Stack,
//   useColorMode,
//   Image,
//   Icon,
//   HStack,
//   Button,
// } from "@chakra-ui/react";
// import {
//   HiUser,
//   HiHome,
//   HiCurrencyDollar,
//   HiDocument,
//   HiRefresh,
//   HiMoon,
//   HiSun,
//   HiMenu,
//   HiX,
// } from "react-icons/hi";

// const Links = ["Skilify", "Home", "Dashboard"];

// export default function DashboardNavbar({
//   profilePicUrl,
//   setShowUpdateForm,
//   setShowTasks,
// }) {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

//   const handleDashboardClick = () => {
//     setDashboardSidebarOpen(!isDashboardSidebarOpen);
//   };

//   return (
//     <>
//       <Box
//         bg={"teal"}
//         h={"100vh"}
//         position={"sticky"}
//         top={"0px"}
//         color={"white"}
//         w={"20%"}
//       >
//         <Flex
//           h={"100%"}
//           flexDirection={"column"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <HiX /> : <HiMenu />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />

//           <HStack
//             as={"nav"}
//             w={"100%"}
//             display={{ base: "none", md: "flex" }}
//             flexDirection={"column"}
//             justifyContent={"space-around"}
//             alignItems={"center"}
//             h={"80%"}
//             gap={"5%"}
//           >
//             <Image src={profilePicUrl} w={"48"} borderRadius={"10px"} />
//             <Link style={{ fontSize: "1.3em" }} as={Link} to="/">
//               <Icon as={HiHome} mr={2} /> Home
//             </Link>
//             <Link
//               style={{ fontSize: "1.3em" }}
//               onClick={() => {
//                 setShowUpdateForm(false);
//                 setShowTasks(false);
//               }}
//             >
//               <Icon as={HiUser} mr={2} /> Profile
//             </Link>
//             <Link style={{ fontSize: "1.3em" }}>
//               <Icon as={HiCurrencyDollar} mr={2} /> Earnings
//             </Link>
//             <Link
//               style={{ fontSize: "1.3em" }}
//               onClick={() => {
//                 setShowTasks(false);
//                 setShowUpdateForm(true);
//               }}
//             >
//               <Icon as={HiRefresh} mr={2} /> Update data
//             </Link>
//             <Link style={{ fontSize: "1.3em" }} onClick={() => {
//                 setShowTasks(true);
//                 setShowUpdateForm(false);
//             }}>
//               <Icon as={HiDocument} mr={2} /> Tasks
//             </Link>
//             <Button w={"32"} onClick={toggleColorMode}>
//               {colorMode === "light" ? <HiMoon /> : <HiSun />}
//             </Button>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map((link) => (
//                 <Link key={link} to="/">{link}</Link>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }


// import { useState } from "react";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Button,
//   Stack,
//   useColorMode,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { FaHome, FaUser, FaMoneyBillWave, FaEdit, FaTasks, FaChartBar } from "react-icons/fa";
// import { Link as ReactRouterLink } from "react-router-dom";

// const SidebarItems = [
//   { label: "Dashboard", icon: <FaChartBar />, path: "/" },
//   { label: "Home", icon: <FaHome />, path: "/" },
//   { label: "Profile", icon: <FaUser />, path: "/profile" },
//   { label: "Earnings", icon: <FaMoneyBillWave />, path: "/earnings" },
//   { label: "Update Data", icon: <FaEdit />, path: "/update-data" },
//   { label: "Tasks", icon: <FaTasks />, path: "/tasks" },
// ];

// const SidebarItem = (props) => {
//   const { label, icon, path } = props;

//   return (
//     <Button
//       as={ReactRouterLink}
//       to={path}
//       w="100%"
//       variant="ghost"
//       color="white"
//       leftIcon={icon}
//       justifyContent="start"
//       _hover={{ bg: "teal.600" }}
//     >
//       {label}
//     </Button>
//   );
// };

// export default function Sidebar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

//   const handleDashboardClick = () => {
//     setDashboardSidebarOpen(!isDashboardSidebarOpen);
//   };

//   return (
//     <Box
//       bg="teal.500"
//       h="100vh"
//       position="sticky"
//       top="0px"
//       color="white"
//       w="15%"
//     >
//       <Flex
//         h="100%"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <IconButton
//           size="md"
//           icon={isDashboardSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: "none" }}
//           onClick={handleDashboardClick}
//         />

//         <Stack
//           as="nav"
//           w="100%"
//           display={{ base: "none", md: "flex" }}
//           flexDirection="column"
//           justifyContent="space-around"
//           alignItems="center"
//           h="80%"
//           gap={4}
//         >
//           {SidebarItems.map((item, index) => (
//             <SidebarItem
//               key={index}
//               label={item.label}
//               icon={item.icon}
//               path={item.path}
//             />
//           ))}
//           <Button
//             w="100%"
//             onClick={toggleColorMode}
//             leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             variant="ghost"
//             color="white"
//             _hover={{ bg: "teal.600" }}
//           />
//         </Stack>
//       </Flex>
//     </Box>
//   );
// }




// import { useState } from "react";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Button,
//   Stack,
//   useColorMode,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { FaHome, FaUser, FaMoneyBillWave, FaEdit, FaTasks, FaChartBar } from "react-icons/fa";
// import { Link as ReactRouterLink } from "react-router-dom"; // Import Link for navigation

// const SidebarItems = [
//   { label: "Dashboard", icon: <FaChartBar />, path: "/" },
//   { label: "Home", icon: <FaHome />, path: "/" },
//   { label: "Profile", icon: <FaUser />, path: "/profile" },
//   { label: "Earnings", icon: <FaMoneyBillWave />, path: "/earnings" },
//   { label: "Update Data", icon: <FaEdit />, path: "/update-data" },
//   { label: "Tasks", icon: <FaTasks />, path: "/tasks" },
// ];

// const SidebarItem = (props) => {
//   const { label, icon, path } = props;

//   return (
//     <Button
//       as={ReactRouterLink} // Use Link for navigation
//       to={path}
//       w="100%"
//       variant="ghost"
//       color="white"
//       leftIcon={icon}
//       justifyContent="start"
//       _hover={{ bg: "teal.600" }}
//     >
//       {label}
//     </Button>
//   );
// };

// export default function Sidebar() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

//   const handleDashboardClick = () => {
//     setDashboardSidebarOpen(!isDashboardSidebarOpen);
//   };

//   return (
//     <Box
//       bg="teal.500"
//       h="100vh"
//       position="sticky"
//       top="0px"
//       color="white"
//       w="15%"
//     >
//       <Flex
//         h="100%"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <IconButton
//           size="md"
//           icon={isDashboardSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: "none" }}
//           onClick={handleDashboardClick}
//         />

//         <Stack
//           as="nav"
//           w="100%"
//           display={{ base: "none", md: "flex" }}
//           flexDirection="column"
//           justifyContent="space-around"
//           alignItems="center"
//           h="80%"
//           gap={4}
//         >
//           {SidebarItems.map((item, index) => (
//             <SidebarItem
//               key={index}
//               label={item.label}
//               icon={item.icon}
//               path={item.path}
//             />
//           ))}
//           <Button
//             w="100%"
//             onClick={toggleColorMode}
//             leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//             variant="ghost"
//             color="white"
//             _hover={{ bg: "teal.600" }}
//           />
//         </Stack>
//       </Flex>
//     </Box>
//   );
// }

















import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaChartBar, FaHome, FaUser, FaMoneyBillWave, FaEdit, FaTasks } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";

const SidebarItems = [
  { label: "Dashboard", icon: <FaChartBar size={20} />, path: "/dashboard" },
  { label: "Home", icon: <FaHome size={20}/>, path: "/" },
  { label: "Profile", icon: <FaUser size={20}/>, path: "/profile" },
  { label: "Earnings", icon: <FaMoneyBillWave size={20}/>, path: "/earnings" },
  { label: "Update Data", icon: <FaEdit size={20}/>, path: "/update-data" },
  { label: "Tasks", icon: <FaTasks size={20}/>, path: "/tasks" },
];

export default function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setDashboardSidebarOpen(!isDashboardSidebarOpen);
  };

  return (
    <Box
      bg="teal.500"
      h="100vh"
      position="sticky"
      top="0px"
      color="white"
      w={isDashboardSidebarOpen ? "160px" : "70px"}
      transition="width 0.2s"
    >
      <Flex
        h="100%"
        flexDirection="column"
        alignItems="center"
      >
        <IconButton
          size="lg"
          icon={isDashboardSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          onClick={toggleSidebar}
        />

        <Flex
          as="nav"
          w="100%"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          h="80%"
          gap={1}
        >
          {SidebarItems.map((item, index) => (
            <Button
              as={ReactRouterLink}
              to={item.path}
              w="100%"
              variant="ghost"
              color="white"
              leftIcon={item.icon}
              justifyContent="start"
              key={index}
              _hover={{ bg: "teal.600" }}
              p={7}
              display="flex" 
             
            >
              
              {isDashboardSidebarOpen ? item.label : null}
            </Button>
          ))}
        </Flex>

        <IconButton
          w="50px"
          h="50px"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Dark Mode"
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
}










