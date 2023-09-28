import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaCheckCircle, FaStar, FaThumbsUp, FaLightbulb } from 'react-icons/fa'; // Import icons from react-icons library

const trustPoints = [
  {
    id: 1,
    title: 'Experienced Team',
    text: 'Our team consists of experienced professionals dedicated to excellence.',
    icon: <FaCheckCircle />,
  },
  {
    id: 2,
    title: 'Quality Service',
    text: 'We are committed to providing high-quality services that exceed expectations.',
    icon: <FaStar />,
  },
  {
    id: 3,
    title: 'Customer Satisfaction',
    text: 'Customer satisfaction is our top priority, and we strive to make every client happy.',
    icon: <FaThumbsUp />,
  },
  {
    id: 4,
    title: 'Innovation',
    text: 'We embrace innovation and constantly seek new solutions to meet your needs.',
    icon: <FaLightbulb />,
  },
];

export default function WhyTrustUs() {
  return (
    <Box
      p={4}
      bg="gray.100"
      borderRadius="lg"
      boxShadow="lg"
      py={12}
      fontFamily="cursive" // Set the fancy font family
    >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          fontFamily="cursive" // Set the fancy font family
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
        >
          WHY TRUST US
        </Heading>
        <Text
          color={'gray.600'}
          fontSize={{ base: 'lg', md: 'xl' }}
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
        >
          Discover why we're the best choice for your needs.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {trustPoints.map((point) => (
            <HStack
              key={point.id}
              align={'top'}
              bg="teal.100" // Set the card background color
              p={6}
              borderRadius="md"
              color="teal.500"
              boxShadow="md"
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
            >
              <Box fontSize="3xl">{point.icon}</Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{point.title}</Text>
                <Text color={'gray.600'}>{point.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
