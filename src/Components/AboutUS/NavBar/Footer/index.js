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
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
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
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
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
        }}>
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
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>

              
              
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={'#'}>
                About us
              </Box>
              <Box as="a" href={'#'}>
                Blog
              </Box>
              <Box as="a" href={'#'}>
                Contact us
              </Box>
              <Box as="a" href={'#'}>
                Pricing
              </Box>
              <Box as="a" href={'#'}>
                Testimonials
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Box as="a" href={'#'}>
                Help Center
              </Box>
              <Box as="a" href={'#'}>
                Terms of Service
              </Box>
              <Box as="a" href={'#'}>
                Legal
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Satus
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        {/* Add your teal-colored footer here */}
        <center>
        <Box bg="#319795" p={4} color="white">
        <Text fontSize={'sm'}>© 2023 Skillify. All rights reserved</Text>
        </Box>
        </center>
      </Box>
    );
  }
  



  

  

// import {
//     Box,
//     chakra,
//     Container,
//     SimpleGrid,
//     Stack,
//     Text,
//     VisuallyHidden,
//     Input,
//     IconButton,
//     useColorModeValue,
//     Center,
//     HStack,
//   } from '@chakra-ui/react';
//   import { ReactNode } from 'react';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { BiMailSend } from 'react-icons/bi';
//   import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';
  
//   const Logo = (props) => {
//     return (
//       <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
//         {/* ... (SVG path data) */}
//       </svg>
//     );
//   };
  
//   const SocialButton = ({ children, label, href }) => {
//     return (
//       <chakra.button
//         bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//         rounded={'full'}
//         w={8}
//         h={8}
//         cursor={'pointer'}
//         as={'a'}
//         href={href}
//         display={'inline-flex'}
//         alignItems={'center'}
//         justifyContent={'center'}
//         transition={'background 0.3s ease'}
//         _hover={{
//           bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//         }}>
//         <VisuallyHidden>{label}</VisuallyHidden>
//         {children}
//       </chakra.button>
//     );
//   };
  
//   const ListHeader = ({ children }) => {
//     return (
//       <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//         {children}
//       </Text>
//     );
//   };
  
//   export default function LargeWithNewsletter() {
//     return (
//       <Box
//         bg={useColorModeValue('gray.50', 'gray.900')}
//         color={useColorModeValue('gray.700', 'gray.200')}>
//         <Container as={Stack} maxW={'6xl'} py={10}>
//           <SimpleGrid
//             templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
//             spacing={8}>
//             <Stack spacing={6}>
//               <Box>
//                 <Logo color={useColorModeValue('gray.700', 'white')} />
//               </Box>
  
//               <Stack direction={'row'} spacing={6}>
//                 <SocialButton label={'Twitter'} href={'#'}>
//                   <FaTwitter />
//                 </SocialButton>
//                 <SocialButton label={'YouTube'} href={'#'}>
//                   <FaYoutube />
//                 </SocialButton>
//                 <SocialButton label={'Instagram'} href={'#'}>
//                   <FaInstagram />
//                 </SocialButton>
//               </Stack>
//             </Stack>
  
//             {/* New "Reach Us" section */}
//             <Stack align={'flex-start'}>
//               <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//                 Reach Us
//               </Text>
//               <HStack spacing={4} alignItems="center">
//                 <IoCallOutline />
//                 <Text>+1 123-456-7890</Text>
//               </HStack>
//               <HStack spacing={4} alignItems="center">
//                 <IoMailOutline />
//                 <Text>contact@example.com</Text>
//               </HStack>
//               <HStack spacing={4} alignItems="center">
//                 <IoLocationOutline />
//                 <Text>1234 Elm Street, City, Country</Text>
//               </HStack>
//             </Stack>
  
//             {/* Rest of your code */}
//             <Stack align={'flex-start'}>
//               <ListHeader>Company</ListHeader>
//               <Box as="a" href={'#'}>
//                 About us
//               </Box>
//               <Box as="a" href={'#'}>
//                 Blog
//               </Box>
//               <Box as="a" href={'#'}>
//                 Contact us
//               </Box>
//               <Box as="a" href={'#'}>
//                 Pricing
//               </Box>
//               <Box as="a" href={'#'}>
//                 Testimonials
//               </Box>
//             </Stack>
//             <Stack align={'flex-start'}>
//               <ListHeader>Support</ListHeader>
//               <Box as="a" href={'#'}>
//                 Help Center
//               </Box>
//               <Box as="a" href={'#'}>
//                 Terms of Service
//               </Box>
//               <Box as="a" href={'#'}>
//                 Legal
//               </Box>
//               <Box as="a" href={'#'}>
//                 Privacy Policy
//               </Box>
//               <Box as="a" href={'#'}>
//                 Status
//               </Box>
//             </Stack>
//             <Stack align={'flex-start'}>
//               <ListHeader>Stay up to date</ListHeader>
//               <Stack direction={'row'}>
//                 <Input
//                   placeholder={'Your email address'}
//                   bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//                   border={0}
//                   _focus={{
//                     bg: 'whiteAlpha.300',
//                   }}
//                 />
//                 <IconButton
//                   bg={useColorModeValue('green.400', 'green.800')}
//                   color={useColorModeValue('white', 'gray.800')}
//                   _hover={{
//                     bg: 'green.600',
//                   }}
//                   aria-label="Subscribe"
//                   icon={<BiMailSend />}
//                 />
//               </Stack>
//             </Stack>
//           </SimpleGrid>
  
//           {/* Centered text in teal-colored footer */}
//           <Center>
//             <Box bg="#319795" p={4} color="white">
//               <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
//             </Box>
//           </Center>
//         </Container>
//       </Box>
//     );
//   }
  