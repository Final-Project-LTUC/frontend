import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./howWeWork.scss";

function HowWeWork() {
  return (
    <div>
      <Box bg="gray.200" w="60%" h="500px" p={2} color="black" position="relative">
        <div className="floating-card">
          {/* First card - Floating above the box */}
          <a href="#" className="data-card">
            <h3>270</h3>
            <h4>Care Facilities</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur.</p>
            <span className="link-text">
              View All Providers
              <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
              </svg>
            </span>
          </a>
        </div>

        <br />
        <Heading> How We Work </Heading>
        <br />
        <br />
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt        </Text>
        <br />
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
        
        {/* Second card - To the right of the first one */}
        {/* <a href="#" className="data-card right-card">
          <h3>12,000</h3>
          <h4>Employees</h4>
          <p>Etiam porta sem malesuada.</p>
          <span className="link-text">
            View Information
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
            </svg>
          </span>
        </a> */}
      </Box>
    </div>
  );
}

export default HowWeWork;
