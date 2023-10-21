import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function ThanksPage() {
  return (
    <Box className="thanks-container" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box className="content" p="20px" bg="white" borderRadius="5px" boxShadow="md" textAlign="center">
        <CheckCircleIcon w={8} h={8} color="green.500" />
        <Heading as="h1" size="xl" mt="4">Thank You!</Heading>
        <Text fontSize="lg" mt="2">Your rating has been received.</Text>
        <Text fontSize="lg">We appreciate your feedback.</Text>
        <Text fontSize="lg">Have a wonderfull day!!!</Text>
      </Box>
    </Box>
  );
}

export default ThanksPage;
