import {
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function TrustUs() {
  return (
    <>
      <Heading
        as="h2"
        size="3xl"
        // color={"teal"}
        noOfLines={1}
        padding={4}
        paddingTop={14}
      >
        Why trust us?
      </Heading>

      <HStack spacing="4" padding={8}>
        <Card
          backgroundColor={"yellow.100"}
          direction="row"
          overflow="hidden"
          variant="outline"
          h="225px"
          flex="1"
          alignItems={"center"}
          color="black"
        >
          <lottie-player
            src="https://lottie.host/3306f311-74d9-429d-b9a0-6d753d4c0d39/RvWQlhHsvK.json"
            background="transparent"
            speed="1"
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            loop
            autoplay
          ></lottie-player>

          <Stack>
            <Center>
              <CardBody>
                <Heading size="md">Experienced</Heading>
                <Text py="2" padding={5}>
                  We are a team of highly professional technicians with an
                  average of 15 years of experience in the field.
                </Text>
              </CardBody>
            </Center>
          </Stack>
        </Card>

        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="225px"
          flex="1"
          alignItems={"center"}
          backgroundColor={"blue.100"}
          color="black"
        >
          <lottie-player
            src="https://lottie.host/402998d5-e754-4089-a2ca-bfeca76ee523/D8VnRGEARq.json"
            background="transparent"
            speed="1"
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            loop
            autoplay
          ></lottie-player>

          <Stack>
            <CardBody>
              <Heading size="md">Trustworthy</Heading>

              <Text py="2" padding={5}>
                Our technicians are experienced with a variety of skills in
                different fields and get work done...
              </Text>
            </CardBody>
          </Stack>
        </Card>

        <Card
          direction="row"
          overflow="hidden"
          variant="outline"
          h="225px"
          flex="1"
          alignItems={"center"}
          backgroundColor={"gray.200"}
          color="black"
        >
          <lottie-player
            src="https://lottie.host/ae9c99aa-6b09-416f-bb75-cd3276cd8c4d/jWsE0GG6j1.json"
            background="transparent"
            speed="1"
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            loop
            autoplay
          ></lottie-player>

          <Stack>
            <CardBody>
              <Heading size="md">Reliable</Heading>

              <Text py="2" padding={5}>
                At Skilify Handyman we offer an exceptional service and
                high-quality workmanship which is...
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </HStack>
    </>
  );
}

export default TrustUs;
