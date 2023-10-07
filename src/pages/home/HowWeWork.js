import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

function HowWeWork() {
  return (
    <div >
        <Container>

            
        </Container>
      <Box bg="gray.200" w="60%" h="500px" p={2} color="black" >
        <br />
        <br />
        <Text> Protecting Anything </Text>
        <br />
        <Heading> How We Work </Heading>
        <br />
        <br />
        <Text>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt
        </Text>
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
      </Box>
    </div>
  );
}

export default HowWeWork;
