

















import { useState } from "react";
import {
  Box,
  Flex,

  HStack,

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


export default function Sidebar({
  profilePicUrl,
  setShowUpdateForm,
  setShowTasks,
  token,
  setShowNum
}) {

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

              to="/"
            >
              Home
            </Link>
            <Link
              style={{ fontSize: "1.3em" }}
              onClick={()=>setShowNum(0) }
            >
              Profile
            </Link>
            <Link
              style={{ fontSize: "1.3em" }} 
              onClick={()=>setShowNum(1)}
            >
              Update data
            </Link>
            <Link style={{ fontSize: "1.3em" }} 
           onClick={()=>setShowNum(2)}>
              Tasks
            </Link>
            {token.role==='handyman'&&
            <Link
            onClick={()=>setShowNum(3)}
            style={{ fontSize: "1.3em" }}>
              Earnings
            </Link>}
            <Button w={"32"} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}

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










