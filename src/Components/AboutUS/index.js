
import React, { useRef } from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  Center,
  HStack,
  Button,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';

const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* ... (SVG path data) */}
    </svg>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const TeamMemberCard = ({ name, position, imageSrc, twitter, youtube, instagram }) => {
  return (
    <Box
      maxW={'270px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
      transition={'transform 0.2s ease, box-shadow 0.2s ease'}
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
      }}
    >
      <chakra.img
        w={32}
        h={32}
        mb={6}
        mx={'auto'}
        rounded={'full'}
        fallbackSrc='https://via.placeholder.com/150'
        src={imageSrc}
        alt={`${name}'s portrait`}
      />
      <Text fontWeight={600} fontSize={'xl'}>
        {name}
      </Text>
      <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')} mb={4}>
        {position}
      </Text>
      <Flex justifyContent={'center'}>
        <HStack spacing={3}>
          <SocialButton label={'Twitter'} href={twitter}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={youtube}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={instagram}>
            <FaInstagram />
          </SocialButton>
        </HStack>
      </Flex>
    </Box>
  );
};

const TeamMembers = () => {
  const teamRef = useRef(null);

  return (
    <Container as={Stack} maxW={'6xl'} py={10} ref={teamRef}>
      <Text fontWeight={'500'} fontSize={'xl'} mb={5}>
        Meet Our Team
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={4}>
        {/* Team Member 1 */}
        <TeamMemberCard
          name="Rama Almomani"
          position="Full Stack Developer"
          imageSrc="https://example.com/john.jpg"
          twitter="#"
          youtube="#"
          instagram="#"
        />
        {/* Team Member 2 */}
        <TeamMemberCard
          name="Laith Saleem"
          position="Full Stack Developer"
          imageSrc="https://example.com/jane.jpg"
          twitter="#"
          youtube="#"
          instagram="#"
        />
        {/* Team Member 3 */}
        <TeamMemberCard
          name="Ala'a Nsairat"
          position="Full Stack Developer"
          imageSrc="https://example.com/david.jpg"
          twitter="#"
          youtube="#"
          instagram="#"
        />
        {/* Team Member 4 */}
        <TeamMemberCard
          name="Mhamad Abdin"
          position="Full Stack Developer"
          imageSrc="https://example.com/sarah.jpg"
          twitter="#"
          youtube="#"
          instagram="#"
        />
        {/* Team Member 5 */}
        <TeamMemberCard
          name="Bashar Al-irani"
          position="Full Stack Developer"
          imageSrc="https://example.com/michael.jpg"
          twitter="#"
          youtube="#"
          instagram="#"
        />
      </SimpleGrid>
    </Container>
  );
};

export default function AboutUs() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    // Scroll to the TeamMembers component
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        
        <TeamMembers /> 
      </Container>
    </Box>
  );
}


