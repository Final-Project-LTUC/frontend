import { Button, Flex, Stack, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function Hero() {
  return (
    <div>
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
    </div>
  )
}

export default Hero