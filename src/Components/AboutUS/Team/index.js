// import {
//     Box,
//     Heading,
//     Text,
//     Container,
//     Badge,
//     VStack,
//     HStack,
//     SimpleGrid,
//   } from '@chakra-ui/react';
//   import {
//     FaCheckCircle,
//     FaUsers,
//     FaHandshake,
//     FaLightbulb,
//     FaStar,
//     FaHeart,
//     FaClock,
//   } from 'react-icons/fa'; // Import the necessary icons

//   function VisionStatement() {
//     return (
//       <Box bg="gray.100" color="teal.800" minH="50vh" py="4">
//         <Container maxW="lg">
//           <VStack spacing="10" align="flex-start">
//             <Heading as="h1" fontSize="3xl" fontFamily="cursive">
//               OUR VISION AT{' '}
//               <Badge colorScheme="teal" fontSize="xl">
//                 Skillify
//               </Badge>
//             </Heading>
//             <Text fontSize="md"  spacing="10">
//               Connecting Handymen to Clients, Revolutionizing Convenience
//             </Text>
//           </VStack>
//           <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
//             <HStack align="top">
//               <Box as={FaUsers} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Fostering a community of skilled artisans and satisfied clients.
//               </Text>
//             </HStack>
//             <HStack align="top">
//               <Box as={FaHandshake} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Offering convenience and reliability at every touchpoint.
//               </Text>
//             </HStack>
//             <HStack align="top">
//               <Box as={FaLightbulb} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Driving innovation in the service industry.
//               </Text>
//             </HStack>
//             <HStack align="top">
//               <Box as={FaStar} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Delivering top-notch quality services that stand out.
//               </Text>
//             </HStack>
//             <HStack align="top">
//               <Box as={FaHeart} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Building lasting relationships with our clients based on trust.
//               </Text>
//             </HStack>
//             <HStack align="top">
//               <Box as={FaClock} color="teal.400" fontSize="3xl" />
//               <Text ml="4">
//                 Ensuring timely and efficient service every time.
//               </Text>
//             </HStack>
//           </SimpleGrid>
//         </Container>
//       </Box>
//     );
//   }

//   export default VisionStatement;

// import {
//   Box,
//   Heading,
//   Text,
//   Container,
//   Badge,
//   VStack,
//   HStack,
//   SimpleGrid,
//   Flex,
//   Image,
// } from '@chakra-ui/react';
// import {
//   FaUsers,
//   FaHandshake,
//   FaLightbulb,
//   FaStar,
//   FaHeart,
//   FaClock,
// } from 'react-icons/fa';

// function VisionStatement() {
//   return (
//     <Flex py={['4', '8']} flexDirection={['column', 'row']} alignItems="center">
//       {/* Left side with photos */}
//       <Box position="relative" zIndex="1" top={['0', '30px']}>
//         <Image
//           src="/assets/t1.png"
//           alt="Team Member 2"
//           maxW={['200%', '250%']}
//           height="auto"
//           style={{ borderRadius: '20px' }}
//         />
//       </Box>

//       {/* Right side with points */}
//       <Box ml={['0', '8']} flex={['5', '1']} mt={['4', '0']}>
//       <Container maxW="3xl">
//   <VStack spacing={['4', '8']} align={['flex-start', 'center']}>
//     <Heading as="h1" fontSize={['4xl', '5xl']} fontFamily="cursive" textAlign="centre"  justifyContent="center" ml={['0', '-4']}>
//       Our Vision at{' '}
//       <Badge fontSize={['4xl', '5xl']} color={'teal.500'}>
//         Skillify
//       </Badge>
//     </Heading>
//   </VStack>
// </Container>

//         <SimpleGrid columns={1} spacing={['6', '8']} mt={['6', '12']} ml={['0', '8']}>
//           <Point icon={<FaUsers />} text="Building a community of skilled artisans and delighted clients." />
//           <Point icon={<FaHandshake />} text="Providing convenience and dependability at every interaction." />
//           <Point icon={<FaLightbulb />} text="Leading the way in innovation within the service industry." />
//           <Point icon={<FaStar />} text="Delivering exceptional quality services that truly shine." />
//           <Point icon={<FaHeart />} text="Cultivating enduring relationships with our clients built on trust." />
//           <Point icon={<FaClock />} text="Ensuring prompt and efficient service every time." />
//         </SimpleGrid>
//       </Box>
//     </Flex>
//   );
// }

// function Point({ icon, text }) {
//   return (
//     <HStack spacing={['4', '8']} alignItems="flex-start">
//       {icon}
//       <Text ml="2" fontSize={['lg', 'xl']} fontFamily="sans-serif">
//         {text}
//       </Text>
//     </HStack>
//   );
// }

// export default VisionStatement;





import {
  Box,
  Heading,
  Text,
  Container,
  Badge,
  VStack,
  SimpleGrid,
  Flex,
  Image,
} from '@chakra-ui/react';

function VisionStatement() {
  return (
    <Flex
      py={['8', '16']}
      flexDirection={['column', 'row']}
      alignItems="center"
      bg="gray.30" // Set the background color to a darker shade of gray
    >
      {/* Left side with photos */}
      <Box position="relative" zIndex="1" top={['0', '30px']} mb={['4', '0']}>
        <Image
          src="/assets/aa.png"
          alt="Team Member 2"
          maxW={['500px', '800px']} // Adjust the maximum width as needed
          height="auto"
          style={{ borderRadius: '20px' }}
        />
      </Box>

      {/* Right side with text */}
      <Box ml={['0', '8']} flex={['5', '1']}>
        <Container maxW="3xl">
          <VStack spacing={['6', '8']} align={['flex-start', 'center']}>
            <Heading
              as="h1"
              fontSize={['5xl', '6xl']}
              fontFamily="cursive"
              textAlign="center"
              ml={['0', '-4']}
            >
              Our Team at{' '}
              <Badge fontSize={['5xl', '6xl']} color={'teal.500'}>
                Skillify
              </Badge>
            </Heading>
          </VStack>
        </Container>
        <Text
          fontSize={['lg', 'xl']}
          fontFamily="cursive" // Fancy font
          mt={['8', '12']}
          ml={['0', '8']}
          lineHeight={['1.5', '1.7']}
        >
          We are a team of dedicated full-stack developers committed to creating innovative solutions for our clients. Our vision is to combine technical excellence with exceptional customer service to build lasting relationships and deliver top-notch quality in every project. We believe in providing convenient, dependable, and prompt services, cultivating enduring trust with our clients, and leading the way in innovation within the service industry.
        </Text>
      </Box>
    </Flex>
  );
}

export default VisionStatement;


