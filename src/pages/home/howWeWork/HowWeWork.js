import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./howWeWork.scss";

function HowWeWork() {
  return (
    <div className="howWeWork">
      <Box
        rounded={5}
        bg="gray.200"
        w="60%"
        h="500px"
        p={2}
        color="black"
        position="relative"
        marginLeft={8}
      >
        <div className="floating-card1">
          <a href="/services" className="data-card">
            <h3>01</h3>
            <h4>Inquire</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur.</p>
          </a>
        </div>

        <div className="floating-card2">
          <a href="/services" className="data-card">
            <h3>02</h3>
            <h4>Estimate</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur.</p>
          </a>
        </div>

        <div className="floating-card3">
          <a href="/services" className="data-card">
            <h3>03</h3>
            <h4>Execute</h4>
            <p>Etiam porta sem malesuada.</p>
          </a>
        </div>

        <br />

        <div className="content">
          <Heading> How We Work </Heading>
          <br />
          <br />
          <Text maxWidth={"400px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
            <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt
          </Text>
          <br />
          <ChakraLink as={ReactRouterLink} to="/services">
            <Button
              bg={"teal.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "teal.400" }}
            >
              View Services
            </Button>
          </ChakraLink>
        </div>
      </Box>
    </div>
  );
}

export default HowWeWork;
