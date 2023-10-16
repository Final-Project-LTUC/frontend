import React, { useRef, useEffect } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import gsap from 'gsap';

const BellComponent = () => {
  const bellRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const bellElement = bellRef.current;
    const circleElement = circleRef.current;

    gsap.set(bellElement, { transformOrigin: 'center top' });

    gsap.to(bellElement, {
      rotation: -50,
      duration: 3,
      ease: 'wiggle',
      repeat: 5, // Make it repeat once (forth and back)
      yoyo: true, // Make it go forth and back
    });

    gsap.to(circleElement, {
      x: -50,
      duration: 4.5,
      ease: 'bell-circle',
      repeat: 5, // Make it repeat once (forth and back)
      yoyo: true, // Make it go forth and back
    });
  }, []);

  return (
    <Box
      className="container"
      height={10}
      width={10}
      p={4}
      borderRadius="md"
      cursor="pointer" // Change cursor to a hand pointer
      // Add a hover effect using CSS
      _hover={{
        // Define hover styles here
        backgroundColor: 'lightgray',
        // You can add more styles as needed
      }}
    >
      <Flex className="container__content" direction="column" align="center">
        <Box className="bell" mb={4} ref={bellRef}>
          <Box className="notification"></Box>
          <Icon as={FaBell} className="bell-icon" boxSize={6} />
          <Box className="bell-icon__circle" ref={circleRef}></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BellComponent;
