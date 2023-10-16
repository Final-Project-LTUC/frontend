import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import gsap from 'gsap';
import Notifications from '../notifications/Notifications';

const BellComponent = () => {
  const bellRef = useRef(null);
  const circleRef = useRef(null);
  const [showNotification, setNotification] = useState(false);

  useEffect(() => {
    const bellElement = bellRef.current;
    const circleElement = circleRef.current;

    gsap.set(bellElement, { transformOrigin: 'center top' });

    gsap.to(bellElement, {
      rotation: -50,
      duration: 3,
      ease: 'wiggle',
      repeat: 5,
      yoyo: true,
    });

    gsap.to(circleElement, {
      x: -50,
      duration: 4.5,
      ease: 'bell-circle',
      repeat: 5,
      yoyo: true,
    });
  }, []);

  const toggleNotification = () => {
    setNotification(!showNotification);
  };

  return (
    <>
      <Flex direction="column">
        <Box
          className="container"
          height={10}
          width={10}
          p={4}
          borderRadius="md"
          cursor="pointer"
          _hover={{
            backgroundColor: 'lightgray',
          }}
          onClick={toggleNotification}
          position="relative" // Added relative positioning
        >
          <Flex className="container__content" direction="column" align="center">
            <Box className="bell" mb={4} ref={bellRef}>
              <Box className="notification">nooo</Box>
              <Icon as={FaBell} className="bell-icon" boxSize={6} />
              <Box className="bell-icon__circle" ref={circleRef}></Box>
            </Box>
          </Flex>
          {showNotification && (
            <Box
              position="absolute" // Position the Notifications component absolutely
              top="100%" // Adjust the top value to your desired position
              right={0} // Adjust the right value to your desired position
              zIndex={1} // Ensure Notifications appear above the bell icon
            >
              <Notifications />
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default BellComponent;
