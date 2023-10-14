import {
  Box,
  Flex,
  Heading, // Added Heading
  Text,
  Icon,
  AspectRatio,
  Grid,
} from '@chakra-ui/react';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const LocationInfo = () => {
  return (
    <Box
      maxW="100%"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      display="flex"
      bg="gray.100"
    >
      <Box w="50%">
        <AspectRatio ratio={16 / 9} maxH="12rem">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            title="Google Map"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <Box w="50%">
        <Grid
          templateColumns="1fr 1fr"
          gap={2}
          p={4}
          borderTopWidth={1}
          borderColor="gray.200"
          h="100%"
          alignItems="center"
        >
          <Box>
            <Flex alignItems="center" mb={2}>
              <Icon as={FaMapMarkerAlt} boxSize={5} color="teal.500" mr={2} />
              <Text>123 Main St, City, Country</Text>
            </Flex>
            <Flex alignItems="center" mb={2}>
              <Icon as={FaPhone} boxSize={5} color="teal.500" mr={2} />
              <Text>+1 123-456-7890</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={FaEnvelope} boxSize={5} color="teal.500" mr={2} />
              <Text>info@example.com</Text>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" mt={2}>
              <Icon as={FaFacebook} boxSize={5} color="teal.500" mr={2} />
              <Text>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
              <Icon as={FaTwitter} boxSize={5} color="teal.500" mr={2} />
              <Text>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
              </Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
              <Icon as={FaInstagram} boxSize={5} color="teal.500" mr={2} />
              <Text>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default LocationInfo;

  