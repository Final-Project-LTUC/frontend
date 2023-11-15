import {
  Button,
  Flex,
  Heading,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { handymanExperties } from "../../../assets/constants";
import "./HomeServices.scss";

function HomeServices() {


  useEffect(() => {
    try {
      // const response=await axios.get('')
    } catch (e) {}
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const displayedServices = handymanExperties.slice(0, 6);

  return (
    // <div style={{ width: "100%" }}>
      <Box width={"fill"}> 


   
      <Heading as="h2" size="3xl" noOfLines={1} paddingTop={10}>
        Services
      </Heading>

      <Flex
        w={"100%"}
        h={"100%"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"50px"}
      >
        <Flex
          w={"100%"}
          h={"100%"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          gap={"40px"}
          mt={"2em"}
        >
          <section className="hero-section1">
            <div className="card-grid1">
              {displayedServices.map((service, index) => (
                <a className="card1" href="<#" key={index}>
                  <div
                    className="card__background1"
                    style={{ backgroundImage: `url(${service.imgUrl})` }}
                  ></div>
                  <div className="card__content1">
                    <p className="card__category1">Category</p>
                    <h2 className="card__heading1">{service.name}</h2>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </Flex>
      </Flex>

<br/> 
      <ChakraLink as={ReactRouterLink} to="/services" onClick={scrollToTop}>
        <Button
          bg={"teal.500"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "teal.400" }}
        >
          ALL SERVICES
        </Button>
      </ChakraLink>
    {/* </div> */}
    </Box>
  );
}

export default HomeServices;