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

      <HStack spacing="4">
        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://th.bing.com/th/id/R.834bf54e383e9009a1b9b795434a65de?rik=B65iq4%2fkPrzEJQ&riu=http%3a%2f%2fimages.cdn2.stockunlimited.net%2fclipart%2fribbon-rosette_1562836.jpg&ehk=veOrMLBgMfPDEiYDxA3H2P%2fOjdHbt3fy2ctYUvDrwfU%3d&risl=&pid=ImgRaw&r=0"
            alt="Experience"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Experienced</Heading>

              <Text py="2"></Text>
            </CardBody>
          </Stack>
        </Card>
      </HStack>
      <ChakraLink as={ReactRouterLink} to="/services">
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
        >
          ALL SERVICES
        </Button>
      </ChakraLink>
    </div>
  );
}

export default HomeServices;
