import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./howWeWork.scss";

function HowWeWork() {
  return (
    <div className="howWeWork">
      <Box
      rounded={5}
        bg="gray.200"
        w="60%"
        h="500px"
        p={2}
        color="black"
        position="relative"
        marginLeft={8}
       
      >
        <div className="floating-card1" >
          <a href="/services" className="data-card">
            <h3>01</h3>
            <h4>Inquire</h4>
            <p>Contact us with your project details.</p>
          </a>
        </div>

        <div className="floating-card2">
          <a href="/services" className="data-card">
            <h3>02</h3>
            <h4>Estimate</h4>
            <p>We'll provide you with a project cost estimate.</p>
          </a>
        </div>

        <div className="floating-card3">
          <a href="/services" className="data-card">
            <h3>03</h3>
            <h4>Execute</h4>
            <p>Our team will start working on your project.</p>
          </a>
        </div>

        <br />

        <div className="content" > 
          <Heading> How We Work </Heading>
          <br />
          <br />
          <Text maxWidth={"400px"} >
          Our process is designed to make your project a success. <br/>
          We start by listening to your needs and goals.<br/>
           Then, our team  provides you with a detailed project<br/> estimate,
            ensuring transparency and accuracy.<br/>

          Once the project kicks off, <br/>
          our experts work diligently to bring your vision to life. <br/>
          We are committed to delivering high-quality results within<br/> your budget and timeline. 
          </Text>
          <br />
          <ChakraLink as={ReactRouterLink} to="/services">
            <Button
              bg={"teal.500"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "teal.400" }}
              
            >
              View Services
            </Button>
          </ChakraLink>
        </div>
      </Box>
    </div>
  );
}

export default HowWeWork;