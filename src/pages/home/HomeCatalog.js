import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
function HomeCatalog() {
  return (
    <div>
      <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
        Catalog
      </Heading>
      <ChakraLink as={ReactRouterLink} to="/catalog">
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "yellow.300" }}//"blue.500" 
        >
          SEE MORE
        </Button>
      </ChakraLink>
    </div>
  );
}

export default HomeCatalog;
