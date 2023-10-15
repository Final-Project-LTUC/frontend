// import {
//   Container,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   IconButton,
//   Button,
//   VStack,
//   HStack,
//   Wrap,
//   WrapItem,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Textarea,
// } from '@chakra-ui/react';
// import {
//   MdPhone,
//   MdEmail,
//   MdLocationOn,
//   MdFacebook,
//   MdOutlineEmail,
// } from 'react-icons/md';
// import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Instagram and Twitter icons
// import { BsPerson } from 'react-icons/bs'; // Import the BsPerson icon from 'react-icons/bs'

// export default function Contact() {
//   return (
//     <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
//       <Flex>
//         <Box
//           bg="white"
//           color="teal.500"
//           borderRadius="lg"
//           m={{ sm: 4, md: 16, lg: 10 }}
//           p={{ sm: 5, md: 5, lg: 16 }}
//           boxShadow="lg"
//         >
//           <Box p={4}>
//             <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//               <WrapItem>
//                 <Box>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdPhone size="20px" />}
//                       >
//                         +962-798888888
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdEmail size="20px" />}
//                       >
//                         hello@Skillify.com
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdLocationOn size="20px" />}
//                       >
//                         Amman, Jordan
//                       </Button>
//                     </VStack>
//                   </Box>
//                   <HStack
//                     mt={{ lg: 10, md: 10 }}
//                     spacing={5}
//                     px={5}
//                     alignItems="flex-start"
//                   >
//                     <IconButton
//                       aria-label="facebook"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<MdFacebook size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="instagram"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaInstagram size="28px" />} // Use Instagram icon
//                     />
//                     <IconButton
//                       aria-label="twitter"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaTwitter size="28px" />} // Use Twitter icon
//                     />
//                   </HStack>
//                 </Box>
//               </WrapItem>
//               <WrapItem>
//                 <Box bg="teal.500" borderRadius="lg" color="white" p={8} boxShadow="lg">
//                   <VStack spacing={5}>
//                     <FormControl id="name" borderColor="teal.200">
//                       <FormLabel>Your Name</FormLabel>
//                       <InputGroup borderColor="teal.200">
//                         <InputLeftElement pointerEvents="none">
//                           <BsPerson color="gray.800" />
//                         </InputLeftElement>
//                         <Input type="text" size="md" />
//                       </InputGroup>
//                     </FormControl>
//                     <FormControl id="email" borderColor="teal.200">
//                       <FormLabel>Email</FormLabel>
//                       <InputGroup borderColor="teal.200">
//                         <InputLeftElement pointerEvents="none">
//                           <MdOutlineEmail color="gray.800" />
//                         </InputLeftElement>
//                         <Input type="text" size="md" />
//                       </InputGroup>
//                     </FormControl>
//                     <FormControl id="phone" borderColor="teal.200">
//                       <FormLabel>Phone Number</FormLabel>
//                       <InputGroup borderColor="teal.200">
//                         <InputLeftElement pointerEvents="none">
//                           <MdPhone color="gray.800" />
//                         </InputLeftElement>
//                         <Input type="text" size="md" />
//                       </InputGroup>
//                     </FormControl>
//                     <FormControl id="message" borderColor="teal.200">
//                       <FormLabel>Message</FormLabel>
//                       <Textarea
//                         borderColor="teal.200"
//                         _hover={{
//                           borderColor: 'teal.300',
//                         }}
//                         placeholder="Message"
//                       />
//                     </FormControl>
//                     <FormControl id="send" float="right">
//                       <Button
//                         variant="solid"
//                         bg="white"
//                         color="teal.500"
//                         _hover={{ bg: '.600' }}
//                         size="lg" // Increase the size of the button
//                         width="100%" // Make the button full width
//                       >
//                         Send Message
//                       </Button>
//                     </FormControl>
//                   </VStack>
//                 </Box>
//               </WrapItem>
//             </Wrap>
//           </Box>
//         </Box>
//       </Flex>
//     </Container>
//   );
// }




















// import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
//   } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

//   export default function Contact() {
//     return (
//       <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
//         <Flex>
//           <Box
//             bg="#02054B"
//             color="white"
//             borderRadius="lg"
//             m={{ sm: 4, md: 16, lg: 10 }}
//             p={{ sm: 5, md: 5, lg: 16 }}>
//             <Box p={4}>
//               <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//                 <WrapItem>
//                   <Box>
//                     <Heading>Contact</Heading>
//                     <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                       Fill up the form below to contact
//                     </Text>
//                     <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                       <VStack pl={0} spacing={3} alignItems="flex-start">
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdPhone color="#1970F1" size="20px" />}
//                         >
//                           +91-988888888
//                         </Button>
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdEmail color="#1970F1" size="20px" />}
//                         >
//                           hello@abc.com
//                         </Button>
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
//                         >
//                           Karnavati, India
//                         </Button>
//                       </VStack>
//                     </Box>
//                     <HStack
//                       mt={{ lg: 10, md: 10 }}
//                       spacing={5}
//                       px={5}
//                       alignItems="flex-start">
//                       <IconButton
//                         aria-label="facebook"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<MdFacebook size="28px" />}
//                       />
//                       <IconButton
//                         aria-label="github"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<BsGithub size="28px" />}
//                       />
//                       <IconButton
//                         aria-label="discord"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<BsDiscord size="28px" />}
//                       />
//                     </HStack>
//                   </Box>
//                 </WrapItem>
//                 <WrapItem>
//                   <Box bg="white" borderRadius="lg">
//                     <Box m={8} color="#0B0E3F">
//                       <VStack spacing={5}>
//                         <FormControl id="name">
//                           <FormLabel>Your Name</FormLabel>
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <BsPerson color="gray.800" />
//                             </InputLeftElement>
//                             <Input type="text" size="md" />
//                           </InputGroup>
//                         </FormControl>
//                         <FormControl id="name">
//                           <FormLabel>Mail</FormLabel>
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <MdOutlineEmail color="gray.800" />
//                             </InputLeftElement>
//                             <Input type="text" size="md" />
//                           </InputGroup>
//                         </FormControl>
//                         <FormControl id="name">
//                           <FormLabel>Message</FormLabel>
//                           <Textarea
//                             borderColor="gray.300"
//                             _hover={{
//                               borderRadius: 'gray.300',
//                             }}
//                             placeholder="message"
//                           />
//                         </FormControl>
//                         <FormControl id="name" float="right">
//                           <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
//                             Send Message
//                           </Button>
//                         </FormControl>
//                       </VStack>
//                     </Box>
//                   </Box>
//                 </WrapItem>
//               </Wrap>
//             </Box>
//           </Box>
//         </Flex>
//       </Container>
//     );
//   }


// import {
//   Container,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   IconButton,
//   Button,
//   VStack,
//   HStack,
//   Wrap,
//   WrapItem,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Textarea,
// } from '@chakra-ui/react';
// import {
//   MdPhone,
//   MdEmail,
//   MdLocationOn,
//   MdFacebook,
//   MdOutlineEmail,
// } from 'react-icons/md';
// import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

// export default function Contact() {
//   return (
//     <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
//       <Flex>
//         <Box
//           bg="#02054B"
//           color="white"
//           borderRadius="lg"
//           m={{ sm: 4, md: 16, lg: 10 }}
//           p={{ sm: 5, md: 5, lg: 16 }}>
//           <Box p={4}>
//             <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//               <WrapItem>
//                 <Box>
//                   <Heading>Contact</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Fill up the form below to contact
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="ghost"
//                         color="#DCE2FF"
//                         _hover={{ border: '2px solid #1C6FEB' }}
//                         leftIcon={<MdPhone color="#1970F1" size="20px" />}
//                       >
//                         +91-988888888
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="ghost"
//                         color="#DCE2FF"
//                         _hover={{ border: '2px solid #1C6FEB' }}
//                         leftIcon={<MdEmail color="#1970F1" size="20px" />}
//                       >
//                         hello@abc.com
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="ghost"
//                         color="#DCE2FF"
//                         _hover={{ border: '2px solid #1C6FEB' }}
//                         leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
//                       >
//                         Karnavati, India
//                       </Button>
//                     </VStack>
//                   </Box>
//                   <HStack
//                     mt={{ lg: 10, md: 10 }}
//                     spacing={5}
//                     px={5}
//                     alignItems="flex-start">
//                     <IconButton
//                       aria-label="facebook"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: '#0D74FF' }}
//                       icon={<MdFacebook size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="github"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: '#0D74FF' }}
//                       icon={<BsGithub size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="discord"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: '#0D74FF' }}
//                       icon={<BsDiscord size="28px" />}
//                     />
//                   </HStack>
//                 </Box>
//               </WrapItem>
//               <WrapItem>
//                 <Box bg="white" borderRadius="lg">
//                   <Box m={8} color="#0B0E3F">
//                     <VStack spacing={5}>
//                       <FormControl id="name">
//                         <FormLabel>Your Name</FormLabel>
//                         <InputGroup borderColor="#E0E1E7">
//                           <InputLeftElement pointerEvents="none">
//                             <BsPerson color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="email">
//                         <FormLabel>Email</FormLabel>
//                         <InputGroup borderColor="#E0E1E7">
//                           <InputLeftElement pointerEvents="none">
//                             <MdOutlineEmail color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="phone">
//                         <FormLabel>Phone Number</FormLabel>
//                         <InputGroup borderColor="#E0E1E7">
//                           <InputLeftElement pointerEvents="none">
//                             <MdPhone color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="message">
//                         <FormLabel>Message</FormLabel>
//                         <Textarea
//                           borderColor="gray.300"
//                           _hover={{
//                             borderRadius: 'gray.300',
//                           }}
//                           placeholder="Message"
//                         />
//                       </FormControl>
//                       <FormControl id="send" float="right">
//                         <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
//                           Send Message
//                         </Button>
//                       </FormControl>
//                     </VStack>
//                   </Box>
//                 </Box>
//               </WrapItem>
//             </Wrap>
//           </Box>
//         </Box>
//       </Flex>
//     </Container>
//   );
// }


// import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
//   } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

//   export default function Contact() {
//     return (
//       <Container bg="gray.500" maxW="full" mt={0} centerContent overflow="hidden">
//         <Flex>
//           <Box
//             bg="teal"
//             color="white"
//             borderRadius="lg"
//             m={{ sm: 4, md: 16, lg: 10 }}
//             p={{ sm: 5, md: 5, lg: 16 }}>
//             <Box p={4} bg="teal" borderRadius="lg"> {/* Change the background color here */}
//               <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//                 <WrapItem>
//                   <Box>
//                     <Heading>Contact</Heading>
//                     <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                       Fill up the form below to contact
//                     </Text>
//                     <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                       <VStack pl={0} spacing={3} alignItems="flex-start">
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdPhone color="#1970F1" size="20px" />}
//                         >
//                           +962-791234567
//                         </Button>
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdEmail color="#1970F1" size="20px" />}
//                         >
//                           info@Skillify.com
//                         </Button>
//                         <Button
//                           size="md"
//                           height="48px"
//                           width="200px"
//                           variant="ghost"
//                           color="#DCE2FF"
//                           _hover={{ border: '2px solid #1C6FEB' }}
//                           leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
//                         >
//                           Amman, Jordan
//                         </Button>
//                       </VStack>
//                     </Box>
//                     <HStack
//                       mt={{ lg: 10, md: 10 }}
//                       spacing={5}
//                       px={5}
//                       alignItems="flex-start">
//                       <IconButton
//                         aria-label="facebook"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<MdFacebook size="28px" />}
//                       />
//                       <IconButton
//                         aria-label="github"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<BsGithub size="28px" />}
//                       />
//                       <IconButton
//                         aria-label="discord"
//                         variant="ghost"
//                         size="lg"
//                         isRound={true}
//                         _hover={{ bg: '#0D74FF' }}
//                         icon={<BsDiscord size="28px" />}
//                       />
//                     </HStack>
//                   </Box>
//                 </WrapItem>
//                 <WrapItem>
//                   <Box bg="white" borderRadius="lg">
//                     <Box m={8} color="#0B0E3F">
//                       <VStack spacing={5}>
//                         <FormControl id="name">
//                           <FormLabel>Your Name</FormLabel>
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <BsPerson color="gray.800" />
//                             </InputLeftElement>
//                             <Input type="text" size="md" />
//                           </InputGroup>
//                         </FormControl>
//                         <FormControl id="email">
//                           <FormLabel>Email</FormLabel>
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <MdOutlineEmail color="gray.800" />
//                             </InputLeftElement>
//                             <Input type="text" size="md" />
//                           </InputGroup>
//                         </FormControl>
//                         <FormControl id="phone">
//                           <FormLabel>Phone Number</FormLabel>
//                           <InputGroup borderColor="#E0E1E7">
//                             <InputLeftElement pointerEvents="none">
//                               <MdPhone color="gray.800" />
//                             </InputLeftElement>
//                             <Input type="text" size="md" />
//                           </InputGroup>
//                         </FormControl>
//                         <FormControl id="message">
//                           <FormLabel>Message</FormLabel>
//                           <Textarea
//                             borderColor="gray.300"
//                             _hover={{
//                               borderRadius: 'gray.300',
//                             }}
//                             placeholder="Message"
//                           />
//                         </FormControl>
//                         <FormControl id="send" float="right">
//                           <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
//                             Send a Message
//                           </Button>
//                         </FormControl>
//                       </VStack>
//                     </Box>
//                   </Box>
//                 </WrapItem>
//               </Wrap>
//             </Box>
//           </Box>
//         </Flex>
//       </Container>
//     );
//   }





// import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
// } from '@chakra-ui/react';
// import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
// } from 'react-icons/md';
// import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Instagram and Twitter icons
// import { BsPerson } from 'react-icons/bs'; // Import the BsPerson icon from 'react-icons/bs'

// export default function Contact() {
//     return (
//         <Container bg="teal.100" maxW="full" mt={0} centerContent overflow="hidden">
//             <Flex>
//                 <Box
//                     bg="white"
//                     color="teal.500"
//                     borderRadius="lg"
//                     m={{ sm: 4, md: 16, lg: 10 }}
//                     p={{ sm: 5, md: 5, lg: 16 }}
//                     boxShadow="lg"
//                 >
//                     <Box p={4}>
//                         <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//                             <WrapItem>
//                                 <Box>
//                                     <Heading>Contact</Heading>
//                                     <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                                         Get in touch with us
//                                     </Text>
//                                     <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                                         <VStack pl={0} spacing={3} alignItems="flex-start">
//                                             <Button
//                                                 size="md"
//                                                 height="48px"
//                                                 width="200px"
//                                                 variant="solid"
//                                                 color="teal.500"
//                                                 _hover={{ bgColor: 'teal.400', color: 'white' }}
//                                                 leftIcon={<MdPhone size="20px" />}
//                                             >
//                                                 +91-988888888
//                                             </Button>
//                                             <Button
//                                                 size="md"
//                                                 height="48px"
//                                                 width="200px"
//                                                 variant="solid"
//                                                 color="teal.500"
//                                                 _hover={{ bgColor: 'teal.400', color: 'white' }}
//                                                 leftIcon={<MdEmail size="20px" />}
//                                             >
//                                                 hello@abc.com
//                                             </Button>
//                                             <Button
//                                                 size="md"
//                                                 height="48px"
//                                                 width="200px"
//                                                 variant="solid"
//                                                 color="teal.500"
//                                                 _hover={{ bgColor: 'teal.400', color: 'white' }}
//                                                 leftIcon={<MdLocationOn size="20px" />}
//                                             >
//                                                 Karnavati, India
//                                             </Button>
//                                         </VStack>
//                                     </Box>
//                                     <HStack
//                                         mt={{ lg: 10, md: 10 }}
//                                         spacing={5}
//                                         px={5}
//                                         alignItems="flex-start"
//                                     >
//                                         <IconButton
//                                             aria-label="facebook"
//                                             variant="ghost"
//                                             size="lg"
//                                             isRound={true}
//                                             _hover={{ bg: 'teal.400', color: 'white' }}
//                                             icon={<MdFacebook size="28px" />}
//                                         />
//                                         <IconButton
//                                             aria-label="instagram" // Change label to "instagram"
//                                             variant="ghost"
//                                             size="lg"
//                                             isRound={true}
//                                             _hover={{ bg: 'teal.400', color: 'white' }}
//                                             icon={<FaInstagram size="28px" />} // Use Instagram icon
//                                         />
//                                         <IconButton
//                                             aria-label="twitter" // Change label to "twitter"
//                                             variant="ghost"
//                                             size="lg"
//                                             isRound={true}
//                                             _hover={{ bg: 'teal.400', color: 'white' }}
//                                             icon={<FaTwitter size="28px" />} // Use Twitter icon
//                                         />
//                                     </HStack>
//                                 </Box>
//                             </WrapItem>
//                             <WrapItem>
//                                 <Box bg="teal.500" borderRadius="lg" color="white" p={8} boxShadow="lg">
//                                     <VStack spacing={5}>
//                                         <FormControl id="name" borderColor="teal.200">
//                                             <FormLabel>Your Name</FormLabel>
//                                             <InputGroup borderColor="teal.200">
//                                                 <InputLeftElement pointerEvents="none">
//                                                     <BsPerson color="gray.800" />
//                                                 </InputLeftElement>

//                                                 <Input type="text" size="md" />
//                                             </InputGroup>
//                                         </FormControl>
//                                         <FormControl id="email" borderColor="teal.200">
//                                             <FormLabel>Email</FormLabel>
//                                             <InputGroup borderColor="teal.200">
//                                                 <InputLeftElement pointerEvents="none">
//                                                     <MdOutlineEmail color="gray.800" />
//                                                 </InputLeftElement>
//                                                 <Input type="text" size="md" />
//                                             </InputGroup>
//                                         </FormControl>
//                                         <FormControl id="phone" borderColor="teal.200">
//                                             <FormLabel>Phone Number</FormLabel>
//                                             <InputGroup borderColor="teal.200">
//                                                 <InputLeftElement pointerEvents="none">
//                                                     <MdPhone color="gray.800" />
//                                                 </InputLeftElement>
//                                                 <Input type="text" size="md" />
//                                             </InputGroup>
//                                         </FormControl>
//                                         <FormControl id="message" borderColor="teal.200">
//                                             <FormLabel>Message</FormLabel>
//                                             <Textarea
//                                                 borderColor="teal.200"
//                                                 _hover={{
//                                                     borderColor: 'teal.300',
//                                                 }}
//                                                 placeholder="Message"
//                                             />
//                                         </FormControl>
//                                         <FormControl id="send" float="right">
//                                             <Button variant="solid" bg="teal.500" color="white" _hover={{ bg: 'teal.400' }}>
//                                                 Send Message
//                                             </Button>
//                                         </FormControl>
//                                     </VStack>
//                                 </Box>
//                             </WrapItem>
//                         </Wrap>
//                     </Box>
//                 </Box>
//             </Flex>
//         </Container>
//     );
// }



  
































//  import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
//   } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Instagram and Twitter icons
//   import { BsPerson } from 'react-icons/bs'; // Import the BsPerson icon from 'react-icons/bs'
  
//   export default function Contact() {
//     return (
//       <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
//         <Flex>
//           <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//             <WrapItem>
//               <Box bg="teal.500" borderRadius="lg" color="white" p={8} boxShadow="lg">
//                 <VStack spacing={5}>
//                   <FormControl id="name" borderColor="teal.200">
//                     <FormLabel>Your Name</FormLabel>
//                     <InputGroup borderColor="teal.200">
//                       <InputLeftElement pointerEvents="none">
//                         <BsPerson color="gray.800" />
//                       </InputLeftElement>
//                       <Input type="text" size="md" />
//                     </InputGroup>
//                   </FormControl>
//                   <FormControl id="email" borderColor="teal.200">
//                     <FormLabel>Email</FormLabel>
//                     <InputGroup borderColor="teal.200">
//                       <InputLeftElement pointerEvents="none">
//                         <MdOutlineEmail color="gray.800" />
//                       </InputLeftElement>
//                       <Input type="text" size="md" />
//                     </InputGroup>
//                   </FormControl>
//                   <FormControl id="phone" borderColor="teal.200">
//                     <FormLabel>Phone Number</FormLabel>
//                     <InputGroup borderColor="teal.200">
//                       <InputLeftElement pointerEvents="none">
//                         <MdPhone color="gray.800" />
//                       </InputLeftElement>
//                       <Input type="text" size="md" />
//                     </InputGroup>
//                   </FormControl>
//                   <FormControl id="message" borderColor="teal.200">
//                     <FormLabel>Message</FormLabel>
//                     <Textarea
//                       borderColor="teal.200"
//                       _hover={{
//                         borderColor: 'teal.300',
//                       }}
//                       placeholder="Message"
//                     />
//                   </FormControl>
//                   <FormControl id="send" float="right">
//                     <Button
//                       variant="solid"
//                       bg="white"
//                       color="teal.500"
//                       _hover={{ bg: '.600' }}
//                       size="lg" // Increase the size of the button
//                       width="100%" // Make the button full width
//                     >
//                       Send Message
//                     </Button>
//                   </FormControl>
//                 </VStack>
//               </Box>
//             </WrapItem>
//             <WrapItem>
//               <Box
//                 bg="white"
//                 color="teal.500"
//                 borderRadius="lg"
//                 m={{ sm: 4, md: 16, lg: 10 }}
//                 p={{ sm: 5, md: 5, lg: 16 }}
//                 boxShadow="lg"
//               >
//                 <Box p={4}>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdPhone size="20px" />}
//                       >
//                         +962-798888888
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdEmail size="20px" />}
//                       >
//                         hello@Skillify.com
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdLocationOn size="20px" />}
//                       >
//                         Amman, Jordan
//                       </Button>
//                     </VStack>
//                   </Box>
//                   <HStack
//                     mt={{ lg: 10, md: 10 }}
//                     spacing={5}
//                     px={5}
//                     alignItems="flex-start"
//                   >
//                     <IconButton
//                       aria-label="facebook"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<MdFacebook size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="instagram"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaInstagram size="28px" />} // Use Instagram icon
//                     />
//                     <IconButton
//                       aria-label="twitter"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaTwitter size="28px" />} // Use Twitter icon
//                     />
//                   </HStack>
//                 </Box>
//               </Box>
//             </WrapItem>
//           </Wrap>
//         </Flex>
//       </Container>
//     );
//   }
  























// import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
//   } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Instagram and Twitter icons
//   import { BsPerson } from 'react-icons/bs'; // Import the BsPerson icon from 'react-icons/bs'
  
//   export default function Contact() {
//     return (
//       <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
//         <Flex>
//           <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//             <WrapItem>
//               <Box
//                 bg="teal.500" // Teal background for "Contact Us" box
//                 color="white" // White text color for "Contact Us" box
//                 borderRadius="lg"
//                 m={{ sm: 4, md: 16, lg: 10 }}
//                 p={{ sm: 5, md: 5, lg: 16 }}
//                 boxShadow="lg"
//               >
//                 <Box p={4}>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdPhone size="20px" />}
//                       >
//                         +962-798888888
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdEmail size="20px" />}
//                       >
//                         hello@Skillify.com
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdLocationOn size="20px" />}
//                       >
//                         Amman, Jordan
//                       </Button>
//                     </VStack>
//                   </Box>
//                   <HStack
//                     mt={{ lg: 10, md: 10 }}
//                     spacing={5}
//                     px={5}
//                     alignItems="flex-start"
//                   >
//                     <IconButton
//                       aria-label="facebook"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<MdFacebook size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="instagram"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaInstagram size="28px" />} // Use Instagram icon
//                     />
//                     <IconButton
//                       aria-label="twitter"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaTwitter size="28px" />} // Use Twitter icon
//                     />
//                   </HStack>
//                 </Box>
//               </Box>
//             </WrapItem>
//             <WrapItem>
//               <Box
//                 bg="white" // White background for the form
//                 color="teal.500" // Teal text color for the form
//                 borderRadius="lg"
//                 m={{ sm: 4, md: 16, lg: 10 }}
//                 p={{ sm: 5, md: 5, lg: 16 }}
//                 boxShadow="lg"
//               >
//                 <Box p={4}>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <FormControl id="name" borderColor="teal.200">
//                         <FormLabel>Your Name</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <BsPerson color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="email" borderColor="teal.200">
//                         <FormLabel>Email</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <MdOutlineEmail color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="phone" borderColor="teal.200">
//                         <FormLabel>Phone Number</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <MdPhone color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="message" borderColor="teal.200">
//                         <FormLabel>Message</FormLabel>
//                         <Textarea
//                           borderColor="teal.200"
//                           _hover={{
//                             borderColor: 'teal.300',
//                           }}
//                           placeholder="Message"
//                         />
//                       </FormControl>
//                       <FormControl id="send" float="right">
//                         <Button
//                           variant="solid"
//                           bg="teal.500"
//                           color="white"
//                           _hover={{ bg: 'teal.400' }}
//                           size="lg"
//                           width="100%"
//                         >
//                           Send Message
//                         </Button>
//                       </FormControl>
//                     </VStack>
//                   </Box>
//                 </Box>
//               </Box>
//             </WrapItem>
//           </Wrap>
//         </Flex>
//       </Container>
//     );
//   }
  

// import {
//     Container,
//     Flex,
//     Box,
//     Heading,
//     Text,
//     IconButton,
//     Button,
//     VStack,
//     HStack,
//     Wrap,
//     WrapItem,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     InputLeftElement,
//     Textarea,
//   } from '@chakra-ui/react';
//   import {
//     MdPhone,
//     MdEmail,
//     MdLocationOn,
//     MdFacebook,
//     MdOutlineEmail,
//   } from 'react-icons/md';
//   import { FaInstagram, FaTwitter } from 'react-icons/fa'; // Import Instagram and Twitter icons
//   import { BsPerson } from 'react-icons/bs'; // Import the BsPerson icon from 'react-icons/bs'
  
//   export default function Contact() {
//     return (
//       <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
//         <Flex>
//           <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//             <WrapItem>
//               <Box
//                 bg="teal.500" // Teal background for "Contact Us" box
//                 color="white" // White text color for "Contact Us" box
//                 borderRadius="lg"
//                 m={{ sm: 4, md: 16, lg: 10 }}
//                 p={{ sm: 5, md: 5, lg: 16 }}
//                 boxShadow="lg"
//                 height="100%" // Add fixed height to match the white box
//               >
//                 <Box p={4}>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdPhone size="20px" />}
//                       >
//                         +962-798888888
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdEmail size="20px" />}
//                       >
//                         hello@Skillify.com
//                       </Button>
//                       <Button
//                         size="md"
//                         height="48px"
//                         width="200px"
//                         variant="solid"
//                         color="teal.500"
//                         _hover={{ bgColor: 'teal.400', color: 'white' }} // Add hover effect
//                         leftIcon={<MdLocationOn size="20px" />}
//                       >
//                         Amman, Jordan
//                       </Button>
//                     </VStack>
//                   </Box>
//                   <HStack
//                     mt={{ lg: 10, md: 10 }}
//                     spacing={5}
//                     px={5}
//                     alignItems="flex-start"
//                   >
//                     <IconButton
//                       aria-label="facebook"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<MdFacebook size="28px" />}
//                     />
//                     <IconButton
//                       aria-label="instagram"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaInstagram size="28px" />} // Use Instagram icon
//                     />
//                     <IconButton
//                       aria-label="twitter"
//                       variant="ghost"
//                       size="lg"
//                       isRound={true}
//                       _hover={{ bg: 'teal.400', color: 'white' }} // Add hover effect
//                       icon={<FaTwitter size="28px" />} // Use Twitter icon
//                     />
//                   </HStack>
//                 </Box>
//               </Box>
//             </WrapItem>
//             <WrapItem>
//               <Box
//                 bg="white" // White background for the form
//                 color="teal.500" // Teal text color for the form
//                 borderRadius="lg"
//                 m={{ sm: 4, md: 16, lg: 10 }}
//                 p={{ sm: 5, md: 5, lg: 16 }}
//                 boxShadow="lg"
//                 height="100%" // Add fixed height to match the teal box
//               >
//                 <Box p={4}>
//                   <Heading>Contact Us</Heading>
//                   <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                     Get in touch with us
//                   </Text>
//                   <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                     <VStack pl={0} spacing={3} alignItems="flex-start">
//                       <FormControl id="name" borderColor="teal.200">
//                         <FormLabel>Your Name</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <BsPerson color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="email" borderColor="teal.200">
//                         <FormLabel>Email</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <MdOutlineEmail color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="phone" borderColor="teal.200">
//                         <FormLabel>Phone Number</FormLabel>
//                         <InputGroup borderColor="teal.200">
//                           <InputLeftElement pointerEvents="none">
//                             <MdPhone color="gray.800" />
//                           </InputLeftElement>
//                           <Input type="text" size="md" />
//                         </InputGroup>
//                       </FormControl>
//                       <FormControl id="message" borderColor="teal.200">
//                         <FormLabel>Message</FormLabel>
//                         <Textarea
//                           borderColor="teal.200"
//                           _hover={{
//                             borderColor: 'teal.300',
//                           }}
//                           placeholder="Message"
//                         />
//                       </FormControl>
//                       <FormControl id="send" float="right">
//                         <Button
//                           variant="solid"
//                           bg="teal.500"
//                           color="white"
//                           _hover={{ bg: '.600' }}
//                           size="lg" // Increase the size of the button
//                           width="100%" // Make the button full width
//                         >
//                           Send Message
//                         </Button>
//                       </FormControl>
//                     </VStack>
//                   </Box>
//                 </Box>
//               </Box>
//             </WrapItem>
//           </Wrap>
//         </Flex>
//       </Container>
//     );
//   }
  


// import React from 'react';
// import {
//   Container,
//   Flex,
//   Box,
//   Heading,
//   Text,
//   IconButton,
//   Button,
//   VStack,
//   HStack,
//   Wrap,
//   WrapItem,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Textarea,
//   Image,
// } from '@chakra-ui/react';
// import {
//   MdPhone,
//   MdEmail,
//   MdLocationOn,
//   MdFacebook,
//   MdOutlineEmail,
// } from 'react-icons/md';
// import { FaInstagram, FaTwitter } from 'react-icons/fa';
// import { BsPerson } from 'react-icons/bs';
// import ContactImage from './public/assets/handyman.png'; // Replace with the path to your contact image

// export default function Contact() {
//   return (
//     <Container bg="gray.100" maxW="full" mt={0} centerContent overflow="hidden">
//       <Flex>
//         <Box mr={8}>
//           <Image src={ContactImage} alt="Contact Image" borderRadius="lg" boxShadow="lg" />
//         </Box>
//         <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
//           <WrapItem>
//             <Box bg="teal.500" borderRadius="lg" color="white" p={8} boxShadow="lg">
//               <VStack spacing={5}>
//                 <FormControl id="name" borderColor="teal.200">
//                   <FormLabel>Your Name</FormLabel>
//                   <InputGroup borderColor="teal.200">
//                     <InputLeftElement pointerEvents="none">
//                       <BsPerson color="gray.800" />
//                     </InputLeftElement>
//                     <Input type="text" size="md" />
//                   </InputGroup>
//                 </FormControl>
//                 <FormControl id="email" borderColor="teal.200">
//                   <FormLabel>Email</FormLabel>
//                   <InputGroup borderColor="teal.200">
//                     <InputLeftElement pointerEvents="none">
//                       <MdOutlineEmail color="gray.800" />
//                     </InputLeftElement>
//                     <Input type="text" size="md" />
//                   </InputGroup>
//                 </FormControl>
//                 <FormControl id="phone" borderColor="teal.200">
//                   <FormLabel>Phone Number</FormLabel>
//                   <InputGroup borderColor="teal.200">
//                     <InputLeftElement pointerEvents="none">
//                       <MdPhone color="gray.800" />
//                     </InputLeftElement>
//                     <Input type="text" size="md" />
//                   </InputGroup>
//                 </FormControl>
//                 <FormControl id="message" borderColor="teal.200">
//                   <FormLabel>Message</FormLabel>
//                   <Textarea
//                     borderColor="teal.200"
//                     _hover={{
//                       borderColor: 'teal.300',
//                     }}
//                     placeholder="Message"
//                   />
//                 </FormControl>
//                 <FormControl id="send" float="right">
//                   <Button
//                     variant="solid"
//                     bg="white"
//                     color="teal.500"
//                     _hover={{ bg: '.600' }}
//                     size="lg"
//                     width="100%"
//                   >
//                     Send Message
//                   </Button>
//                 </FormControl>
//               </VStack>
//             </Box>
//           </WrapItem>
//           <WrapItem>
//             <Box
//               bg="white"
//               color="teal.500"
//               borderRadius="lg"
//               m={{ sm: 4, md: 16, lg: 10 }}
//               p={{ sm: 5, md: 5, lg: 16 }}
//               boxShadow="lg"
//             >
//               <Box p={4}>
//                 <Heading>Contact Us</Heading>
//                 <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
//                   Get in touch with us
//                 </Text>
//                 <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
//                   <VStack pl={0} spacing={3} alignItems="flex-start">
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="solid"
//                       color="teal.500"
//                       _hover={{ bgColor: 'teal.400', color: 'white' }}
//                       leftIcon={<MdPhone size="20px" />}
//                     >
//                       +962-798888888
//                     </Button>
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="solid"
//                       color="teal.500"
//                       _hover={{ bgColor: 'teal.400', color: 'white' }}
//                       leftIcon={<MdEmail size="20px" />}
//                     >
//                       hello@Skillify.com
//                     </Button>
//                     <Button
//                       size="md"
//                       height="48px"
//                       width="200px"
//                       variant="solid"
//                       color="teal.500"
//                       _hover={{ bgColor: 'teal.400', color: 'white' }}
//                       leftIcon={<MdLocationOn size="20px" />}
//                     >
//                       Amman, Jordan
//                     </Button>
//                   </VStack>
//                 </Box>
//                 <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
//                   <IconButton
//                     aria-label="facebook"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: 'teal.400', color: 'white' }}
//                     icon={<MdFacebook size="28px" />}
//                   />
//                   <IconButton
//                     aria-label="instagram"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: 'teal.400', color: 'white' }}
//                     icon={<FaInstagram size="28px" />}
//                   />
//                   <IconButton
//                     aria-label="twitter"
//                     variant="ghost"
//                     size="lg"
//                     isRound={true}
//                     _hover={{ bg: 'teal.400', color: 'white' }}
//                     icon={<FaTwitter size="28px" />}
//                   />
//                 </HStack>
//               </Box>
//             </Box>
//           </WrapItem>
//         </Wrap>
//       </Flex>
//     </Container>
//   );
// }


















import React from 'react';

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden" position="relative">
      {/* Chakra UI Image as the background */}
      <Image
        src="./assets/background.jpg" // Replace with the path to your desired Chakra UI image
        alt="Background Image"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
        w="100%"
        h="100%"
        opacity="0.7" // Adjust opacity as needed
      />
      {/* Transparent black layer */}
      <Box
        bg="rgba(0, 0, 0, 0.5)" // Transparent black background with 50% opacity
        position="absolute"
        top="0"
        left="0"
        zIndex="0"
        w="100%"
        h="100%"
      />
      <Flex>
        <Box
          bg="rgba(255, 255, 255, 0.6)" // White background with 70% opacity
          color="teal.500"
          borderRadius="10px"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          boxShadow="lg"
          position="relative" // This is needed to place it above the background image and below the black layer
          zIndex="1" // Ensure the form appears above the black layer
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact Us</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Get in touch with us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdPhone size="20px" />}
                      >
                        +962-798888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        hello@Skillify.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="solid"
                        color="teal.500"
                        _hover={{ bgColor: 'teal.400', color: 'white' }}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        Amman, Jordan
                      </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<FaInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: 'teal.400', color: 'white' }}
                      icon={<FaTwitter size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  borderRadius="lg"
                  color="white"
                  p={8}
                  boxShadow="lg"
                >
                  <VStack spacing={5}>
                    <FormControl id="name" borderColor="teal.200">
                      <FormLabel color="black">Your Name</FormLabel>
                      <InputGroup borderColor="teal.200">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email" borderColor="teal.200">
                      <FormLabel color="black">Email</FormLabel>
                      <InputGroup borderColor="teal.200">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="phone" borderColor="teal.200">
                      <FormLabel color="black">Phone Number</FormLabel>
                      <InputGroup borderColor="teal.200">
                        <InputLeftElement pointerEvents="none">
                          <MdPhone color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message" borderColor="teal.200">
                      <FormLabel color="black">Message</FormLabel>
                      <Textarea
                        borderColor="teal.200"
                        _hover={{
                          borderColor: 'teal.300',
                        }}
                        placeholder="Message"
                      />
                    </FormControl>
                    <FormControl id="send" float="right">
                      <Button
                        variant="solid"
                        bg="white"
                        color="teal.500"
                        _hover={{ bg: '.600' }}
                        size="lg"
                        width="100%"
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

