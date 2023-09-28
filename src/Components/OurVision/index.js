import {
    Box,
    Heading,
    Text,
    Container,
    Badge,
    VStack,
    HStack,
    SimpleGrid,
  } from '@chakra-ui/react';
  import {
    FaCheckCircle,
    FaUsers,
    FaHandshake,
    FaLightbulb,
    FaStar,
    FaHeart,
    FaClock,
  } from 'react-icons/fa'; // Import the necessary icons
  
  function VisionStatement() {
    return (
      <Box bg="gray.100" color="teal.800" minH="50vh" py="4">
        <Container maxW="lg">
          <VStack spacing="10" align="flex-start">
            <Heading as="h1" fontSize="3xl" fontFamily="cursive">
              OUR VISION AT{' '}
              <Badge colorScheme="teal" fontSize="xl">
                Skillify
              </Badge>
            </Heading>
            <Text fontSize="md"  spacing="10">
              Connecting Handymen to Clients, Revolutionizing Convenience
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <HStack align="top">
              <Box as={FaUsers} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Fostering a community of skilled artisans and satisfied clients.
              </Text>
            </HStack>
            <HStack align="top">
              <Box as={FaHandshake} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Offering convenience and reliability at every touchpoint.
              </Text>
            </HStack>
            <HStack align="top">
              <Box as={FaLightbulb} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Driving innovation in the service industry.
              </Text>
            </HStack>
            <HStack align="top">
              <Box as={FaStar} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Delivering top-notch quality services that stand out.
              </Text>
            </HStack>
            <HStack align="top">
              <Box as={FaHeart} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Building lasting relationships with our clients based on trust.
              </Text>
            </HStack>
            <HStack align="top">
              <Box as={FaClock} color="teal.400" fontSize="3xl" />
              <Text ml="4">
                Ensuring timely and efficient service every time.
              </Text>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  
  export default VisionStatement;
  