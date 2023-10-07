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
        bg={"teal.500"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "teal.400" }}
        >
          SEE MORE
        </Button>
      </ChakraLink>
    </div>
  );
}

export default HomeCatalog;
