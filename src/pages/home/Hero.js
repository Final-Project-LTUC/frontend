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
import "./Hero.scss";

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
    const intervalId = setInterval(updateImageIndex, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>


{/* ///////////////////////////// */}

      <div class="hero">
        <div class="hero__bg">
          <picture>
            <img src="https://th.bing.com/th/id/R.f7dcad3108819cd6b39bc6dbb53737a0?rik=veRlPhjbRuu75g&riu=http%3a%2f%2fded7t1cra1lh5.cloudfront.net%2fsite_banners%2f65253%2fcrop%2fhandyman_hero.jpg%3f1573857999&ehk=%2be8zD6Zajw0yRVf8DjgP5Gn%2fQmgtDMwc8DHuh%2bbHAsQ%3d&risl=&pid=ImgRaw&r=0" alt="heroimage" />
          </picture>
        </div>

        <div class="hero__cnt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 213">
            <path d="M201.76,17.01C174.45,6.79,145.3,1.07,115.13,0c-1.35-.04-2.66,.46-3.63,1.39-.97,.94-1.52,2.23-1.52,3.58V73.57c0,2.75,2.23,4.98,4.98,4.98h78.8c2.3,0,4.3-1.57,4.84-3.8,4.25-17.46,6.4-35.31,6.4-53.07,0-2.08-1.29-3.94-3.24-4.67Z" />
            <path d="M93.51,1.4c-.97-.94-2.29-1.44-3.63-1.39C59.7,1.07,30.55,6.79,3.24,17.01c-1.95,.73-3.24,2.59-3.24,4.67,0,17.77,2.16,35.63,6.42,53.08,.54,2.23,2.54,3.8,4.84,3.8H90.06c2.75,0,4.98-2.23,4.98-4.98V4.98c0-1.35-.55-2.65-1.52-3.58Z" />
            <path d="M90.06,93.5H17.1c-1.61,0-3.12,.78-4.05,2.09-.93,1.31-1.18,2.99-.66,4.51,11.56,33.67,30.73,64.99,56.97,93.07l17.06,18.25c.96,1.03,2.29,1.58,3.64,1.58,.61,0,1.23-.11,1.83-.35,1.9-.75,3.15-2.59,3.15-4.63V98.48c0-2.75-2.23-4.98-4.98-4.98Z" />
            <path d="M191.95,95.58c-.93-1.31-2.44-2.09-4.05-2.09H114.96c-2.75,0-4.98,2.23-4.98,4.98v109.53c0,2.05,1.25,3.88,3.15,4.63,.59,.23,1.21,.35,1.83,.35,1.35,0,2.68-.55,3.64-1.58l17.05-18.25c26.23-28.08,45.4-59.39,56.96-93.07,.52-1.52,.28-3.2-.66-4.51Z" />
          </svg>
          <h1>Skilify</h1>
        </div>
      </div>


      {/* //////////////////////// */}

      {/* <Flex
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
      </Flex> */}
    </div>
  );
}

export default Hero;
