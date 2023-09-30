import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  HStack,
  Heading,
  Collapse,
  Box,
  useDisclosure,
  Container,
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Navbar />
      <Flex
        w={"100%"}
        h={"80vh"}
        mx={"auto"}
        backgroundImage={
          "url(https://irp-cdn.multiscreensite.com/d64336ae/dms3rep/multi/desktop/handyman-2100x900.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                OUR SERVICES
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                REQUEST SERVICE
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <HStack>
        <Heading as="h2" size="3xl" noOfLines={1}>
          Why trust us?
        </Heading>
      </HStack>
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

              <Text py="2">
                We are a team of highly professional technicians with an average
                of 15 years of experience in the field.
              </Text>
            </CardBody>
          </Stack>
        </Card>
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
            src="https://cdn3.iconfinder.com/data/icons/seo-glyph-2/24/deal-1024.png"
            alt="Trust"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Trustworthy</Heading>

              <Text py="2">
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
          h="300px"
          flex="1"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src="https://th.bing.com/th/id/OIP.F4LoldycI7AxP14JadJ5lAAAAA?pid=ImgDet&w=168&h=177&c=7&dpr=1.3"
            alt="Reliable"
          />

          <Stack>
            <CardBody>
              <Heading size="md">Reliable</Heading>

              <Text py="2">
                At FixIt Handyman we offer an exceptional service and
                high-quality workmanship which is...
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </HStack>

      {/* 
      <HStack>
       
          <Button onClick={onToggle}>Click Me</Button>
          <Collapse
            in={isOpen}
            transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
          >
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
             
              <Container count={1}>
                There are many benefits to a joint design and development
                system. Not only does it bring benefits to the design team, but
                it also brings benefits to engineering teams. It makes sure that
                our experiences have a consistent look and feel, not just in our
                design specs, but in production
              </Container>
            </Box>
          </Collapse>
      
      </HStack> */}
    </div>
  );
}
