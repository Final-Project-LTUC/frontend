
// import React, { useRef } from 'react';
// import {
//   Box,
//   chakra,
//   Container,
//   SimpleGrid,
//   Stack,
//   Text,
//   VisuallyHidden,
//   Input,
//   IconButton,
//   useColorModeValue,
//   Flex,
//   Center,
//   HStack,
//   Button,
// } from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { BiMailSend } from 'react-icons/bi';
// import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';

// const Logo = (props) => {
//   return (
//     <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
//       {/* ... (SVG path data) */}
//     </svg>
//   );
// };

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

// const ListHeader = ({ children }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

// const TeamMemberCard = ({ name, position, imageSrc, twitter, youtube, instagram }) => {
//   return (
//     <Box
//       maxW={'270px'}
//       w={'full'}
//       bg={useColorModeValue('white', 'gray.800')}
//       boxShadow={'lg'}
//       rounded={'lg'}
//       p={6}
//       textAlign={'center'}
//       transition={'transform 0.2s ease, box-shadow 0.2s ease'}
//       _hover={{
//         transform: 'translateY(-8px)',
//         boxShadow: 'xl',
//       }}
//     >
//       <chakra.img
//         w={32}
//         h={32}
//         mb={6}
//         mx={'auto'}
//         rounded={'full'}
//         fallbackSrc='https://via.placeholder.com/150'
//         src={imageSrc}
//         alt={`${name}'s portrait`}
//       />
//       <Text fontWeight={600} fontSize={'xl'}>
//         {name}
//       </Text>
//       <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')} mb={4}>
//         {position}
//       </Text>
//       <Flex justifyContent={'center'}>
//         <HStack spacing={3}>
//           <SocialButton label={'Twitter'} href={twitter}>
//             <FaTwitter />
//           </SocialButton>
//           <SocialButton label={'YouTube'} href={youtube}>
//             <FaYoutube />
//           </SocialButton>
//           <SocialButton label={'Instagram'} href={instagram}>
//             <FaInstagram />
//           </SocialButton>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// };

// const TeamMembers = () => {
//   const teamRef = useRef(null);

//   return (
//     <Container as={Stack} maxW={'6xl'} py={10} ref={teamRef}>
//       <Text fontWeight={'500'} fontSize={'xl'} mb={5}>
//         Meet Our Team
//       </Text>
//       <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={4}>
//         {/* Team Member 1 */}
//         <TeamMemberCard
//           name="Rama Almomani"
//           position="Full Stack Developer"
//           imageSrc="https://example.com/john.jpg"
//           twitter="#"
//           youtube="#"
//           instagram="#"
//         />
//         {/* Team Member 2 */}
//         <TeamMemberCard
//           name="Laith Saleem"
//           position="Full Stack Developer"
//           imageSrc="https://example.com/jane.jpg"
//           twitter="#"
//           youtube="#"
//           instagram="#"
//         />
//         {/* Team Member 3 */}
//         <TeamMemberCard
//           name="Ala'a Nsairat"
//           position="Full Stack Developer"
//           imageSrc="https://example.com/david.jpg"
//           twitter="#"
//           youtube="#"
//           instagram="#"
//         />
//         {/* Team Member 4 */}
//         <TeamMemberCard
//           name="Mhamad Abdin"
//           position="Full Stack Developer"
//           imageSrc="https://example.com/sarah.jpg"
//           twitter="#"
//           youtube="#"
//           instagram="#"
//         />
//         {/* Team Member 5 */}
//         <TeamMemberCard
//           name="Bashar Al-irani"
//           position="Full Stack Developer"
//           imageSrc="https://example.com/michael.jpg"
//           twitter="#"
//           youtube="#"
//           instagram="#"
//         />
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default function AboutUs() {
//   const teamRef = useRef(null);

//   const scrollToTeam = () => {
//     // Scroll to the TeamMembers component
//     if (teamRef.current) {
//       teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <Box
//       bg={useColorModeValue('gray.50', 'gray.900')}
//       color={useColorModeValue('gray.700', 'gray.200')}
//     >
//       <Container as={Stack} maxW={'6xl'} py={10}>
        
//         <TeamMembers /> 
//       </Container>
//     </Box>
//   );
// }









import React, { useRef, useState } from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import FaGithub and FaLinkedin
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion, useAnimation } from 'framer-motion';

const CustomArrow = ({ onClick, direction }) => {
  return (
    <IconButton
      onClick={onClick}
      icon={direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
      variant="ghost"
      colorScheme="teal"
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
      fontSize="1.5rem"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      bg="whiteAlpha.800"
      _hover={{ bg: 'teal.500', color: 'white' }}
      left={direction === 'left' ? '0' : 'auto'}
      right={direction === 'right' ? '0' : 'auto'}
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      bg={'teal.200'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      //transition={'background 0.3s ease'}
      _hover={{
        bg: 'teal.500',
        color: 'white',
      }}
    >
      <chakra.span fontSize="0">
        <Text>{label}</Text>
      </chakra.span>
      {children}
    </motion.button>
  );
};

const TeamMemberCard = ({ name, position, imageSrc, github, linkedin, description }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      maxW={'150px'}
      w={'full'}
      bg={'white'}
      boxShadow={'lg'}
      rounded={'lg'}
      p={4}
      textAlign={'center'}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      }}
    >
      <chakra.img
        w={40}
        h={40}
        mx={'auto'}
        rounded={'full'}
        fallbackSrc='https://via.placeholder.com/150'
        src={imageSrc}
        alt={`${name}'s portrait`}
      />
      <Text fontWeight={600} fontSize={'md'} mt={2} fontFamily="cursive">
        {name}
      </Text>
      <Text fontSize={'sm'} color={'gray.600'} mt={1} fontFamily="cursive">
        {position}
      </Text>
      <HStack spacing={2} justifyContent={'center'} mt={2}>
        <SocialButton label={'GitHub'} href={github}>
          <FaGithub
            fontSize="1.5rem" // Increase the size
            color="#333" // Change the color
            _hover={{ color: '#4078c0' }} // Hover color
          />
        </SocialButton>
        <SocialButton label={'LinkedIn'} href={linkedin}>
          <FaLinkedin
            fontSize="1.5rem" // Increase the size
            color="#0077B5" // Change the color
            _hover={{ color: '#0A66C2' }} // Hover color
          />
        </SocialButton>
      </HStack>
      <Text fontSize={'sm'} color={'gray.700'} mt={4} fontFamily="cursive">
        {description}
      </Text>
    </motion.div>
  );
};

const TeamMembers = () => {
  const teamRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(0);
  const controls = useAnimation();

  const members = [
    {
      name: "John Doe",
      position: "Full Stack Developer",
      imageSrc: "https://via.placeholder.com/150",
      github: "#", // Replace with GitHub URL
      linkedin: "#", // Replace with LinkedIn URL
      description: "John is an experienced developer with expertise in front-end and back-end technologies. He enjoys solving complex problems and is passionate about delivering high-quality software solutions.",
    },
    {
      name: "Jane Smith",
      position: "UI/UX Designer",
      imageSrc: "https://via.placeholder.com/150",
      github: "#", // Replace with GitHub URL
      linkedin: "#", // Replace with LinkedIn URL
      description: "Jane specializes in creating user-friendly and visually appealing designs. She has a keen eye for detail and a deep understanding of user-centered design principles.",
    },
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      imageSrc: "https://via.placeholder.com/150",
      github: "#", // Replace with GitHub URL
      linkedin: "#", // Replace with LinkedIn URL
      description: "Alice is passionate about creating responsive and interactive web interfaces. She has expertise in modern frontend technologies and enjoys staying up-to-date with the latest trends.",
    },
    {
      name: "Bob Brown",
      position: "Backend Developer",
      imageSrc: "https://via.placeholder.com/150",
      github: "#", // Replace with GitHub URL
      linkedin: "#", // Replace with LinkedIn URL
      description: "Bob is an expert in server-side development and database management. He is known for his problem-solving skills and efficient code optimization.",
    },
    {
      name: "Ella Davis",
      position: "Designer",
      imageSrc: "https://via.placeholder.com/150",
      github: "#", // Replace with GitHub URL
      linkedin: "#", // Replace with LinkedIn URL
      description: "Ella brings creativity and innovation to our design team. She is passionate about creating visually stunning and impactful designs that resonate with users.",
    },
  ];

  const handleMemberChange = (index) => {
    controls.start({ x: `${-index * 100}%` });
    setSelectedMember(index);
  };

  return (
    <Container maxW={'6xl'} py={8} ref={teamRef}>
      <Box
        bg="gray.10"
        color="black"
        p={2}
        rounded="md"
        //boxShadow="lg"
        textAlign="center"
        mb={8}
      >
        <Text fontWeight={'bold'} fontSize={'3xl'} mb={2} fontFamily={'cursive'}>
          Meet Our Team
        </Text>
        <Text fontSize="md">We have an amazing team of professionals ready to serve you.</Text>
      </Box>
      <HStack spacing={4} align="flex-start">
        <Carousel
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <CustomArrow onClick={onClickHandler} direction="left" />
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <CustomArrow onClick={onClickHandler} direction="right" />
            )
          }
          selectedItem={selectedMember}
          onChange={handleMemberChange}
          width="400px"
          height="400px"
        >
          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.imageSrc}
              github={member.github}
              linkedin={member.linkedin}
              
            />
          ))}
        </Carousel>
        <VStack align="flex-start" spacing={4}>
          <motion.div
            key={selectedMember}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Text fontWeight="bold" fontSize="lg" fontFamily="cursive">
              {members[selectedMember].name}
            </Text>
            <Text fontSize="md" fontFamily="cursive">
              {members[selectedMember].position}
            </Text>
            <Text fontSize="sm" color="gray.700" fontFamily="cursive">
              {members[selectedMember].description}
            </Text>
          </motion.div>
        </VStack>
      </HStack>
    </Container>
  );
};

export default function AboutUs() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box bg={'gray.50'} color={'gray.700'}>
      <TeamMembers />
    </Box>
  );
}


