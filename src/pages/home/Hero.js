import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    image:
      "https://irp-cdn.multiscreensite.com/d64336ae/dms3rep/multi/desktop/handyman-2100x900.jpg",
  },
  {
    id: 2,
    image: "https://www.corralejo.info/images/Ferramenta-Portada2.jpg",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/R.f7dcad3108819cd6b39bc6dbb53737a0?rik=veRlPhjbRuu75g&riu=http%3a%2f%2fded7t1cra1lh5.cloudfront.net%2fsite_banners%2f65253%2fcrop%2fhandyman_hero.jpg%3f1573857999&ehk=%2be8zD6Zajw0yRVf8DjgP5Gn%2fQmgtDMwc8DHuh%2bbHAsQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    image:
      "https://mlqjqxveabkl.i.optimole.com/leaubAo-oTKc4k2P/w:1600/h:1068/q:mauto/f:avif/https://stroisbyt.kz/wp-content/uploads/2022/05/mt-1828-content-bg-2.jpg",
  },
];

console.log(cards);

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(updateImageIndex, 4000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <Flex
        w={"100%"}
        h={"70vh"}
        mx={"auto"}
        backgroundImage={`url(${cards[currentImageIndex].image})`}
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
              <ChakraLink as={ReactRouterLink} to="/services">
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  OUR SERVICES
                </Button>
              </ChakraLink>

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
  );
}

export default Hero;
