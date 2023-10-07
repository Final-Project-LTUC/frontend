import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

function HomeServices() {
  return (
    <div>
      <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
        Services
      </Heading>

      <ChakraLink as={ReactRouterLink} to="/services">
        <Button
         bg={"teal.500"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "teal.400" }}
        >
          ALL SERVICES
        </Button>
      </ChakraLink>
    </div>
  );
}

export default HomeServices;
