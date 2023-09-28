// import React, { useState } from 'react';
// import {
//   Box,
//   Text,
//   Button,
//   VStack,
//   HStack,
//   Avatar,
//   SlideFade,
// } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
// ];

// export default function TestimonialCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//   };

//   return (
//     <VStack spacing={8} alignItems="center">
//       <SlideFade in offsetY={-20}>
//         <Box maxW="lg" textAlign="center">
//           <Text fontSize="xl" fontStyle="italic">
//             {testimonials[activeIndex].text}
//           </Text>
//           <Text fontWeight="bold" mt={4}>
//             {testimonials[activeIndex].name}
//           </Text>
//           <Text color="gray.500">{testimonials[activeIndex].position}</Text>
//         </Box>
//       </SlideFade>
//       <HStack spacing={4}>
//         <Button onClick={prevTestimonial} colorScheme="teal" size="sm">
//           Previous
//         </Button>
//         <Button onClick={nextTestimonial} colorScheme="teal" size="sm">
//           Next
//         </Button>
//       </HStack>
//       <Avatar
//         size="xl"
//         name={testimonials[activeIndex].name}
//         src="https://via.placeholder.com/150"
//       />
//     </VStack>
//   );
// }


// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Box, Text, Flex, Avatar } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
// ];

// export default function TestimonialCarousel() {
//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       showThumbs={false}
//       showStatus={false}
//       transitionTime={500}
//       centerMode={true}
//       centerSlidePercentage={80}
//     >
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id}>
//           <Box
//             p={8}
//             mx="auto"
//             maxW="400px"
//             borderRadius="lg"
//             backgroundColor="white"
//             color="gray.800"
//             boxShadow="lg"
//             textAlign="center"
//           >
//             <Avatar
//               size="xl"
//               name={testimonial.name}
//               src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
//               mb={4}
//             />
//             <Text fontSize="lg" fontStyle="italic">
//               {testimonial.text}
//             </Text>
//             <Text fontWeight="bold" mt={4}>
//               {testimonial.name}
//             </Text>
//             <Text color="gray.600">{testimonial.position}</Text>
//           </Box>
//         </div>
//       ))}
//     </Carousel>
//   );
// }


// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Box, Text, Flex, Avatar } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
//   {
//     id: 4,
//     name: 'Emily Davis',
//     position: 'Marketing Manager, Company D',
//     text:
//       'Curabitur ut fringilla nulla. Proin dignissim nulla sed cursus. Etiam consectetur magna nec risus sagittis aliquet.',
//   },
//   {
//     id: 5,
//     name: 'David Wilson',
//     position: 'Developer, Company E',
//     text:
//       'Fusce tincidunt ex eu tortor auctor, ut dictum est blandit. Integer eget nibh nec justo congue egestas.',
//   },
//   {
//     id: 6,
//     name: 'Sarah Brown',
//     position: 'COO, Company F',
//     text:
//       'Vivamus sagittis, elit ac hendrerit mattis, velit metus auctor tortor, id vehicula erat metus eget odio.',
//   },
//   {
//     id: 7,
//     name: 'Robert Clark',
//     position: 'Product Manager, Company G',
//     text:
//       'Cras tempus libero eu turpis bibendum eleifend. Phasellus malesuada posuere dolor in interdum.',
//   },
//   {
//     id: 8,
//     name: 'Laura White',
//     position: 'Sales Director, Company H',
//     text:
//       'Donec sed massa eu felis rhoncus vehicula nec ut dolor. Nullam efficitur euismod ex, eget hendrerit sapien.',
//   },
// ];

// export default function TestimonialCarousel() {
//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       showThumbs={false}
//       showStatus={false}
//       transitionTime={500}
//       centerMode={true}
//       centerSlidePercentage={80}
//     >
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id}>
//           <Box
//             p={8}
//             mx="auto"
//             maxW="400px"
//             borderRadius="lg"
//             backgroundColor="teal.500"
//             color="white"
//             boxShadow="lg"
//             textAlign="center"
//             transition="transform 0.2s, box-shadow 0.2s"
//             _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
//           >
//             <Avatar
//               size="xl"
//               name={testimonial.name}
//               src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
//               mb={4}
//               boxShadow="md"
//             />
//             <Text fontSize="lg" fontStyle="italic">
//               {testimonial.text}
//             </Text>
//             <Text fontWeight="bold" mt={4}>
//               {testimonial.name}
//             </Text>
//             <Text color="gray.300">{testimonial.position}</Text>
//           </Box>
//         </div>
//       ))}
//     </Carousel>
//   );
// }




// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Box, Text, Flex, keyframes } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
//   {
//     id: 4,
//     name: 'Emily Davis',
//     position: 'Marketing Manager, Company D',
//     text:
//       'Curabitur ut fringilla nulla. Proin dignissim nulla sed cursus. Etiam consectetur magna nec risus sagittis aliquet.',
//   },
//   {
//     id: 5,
//     name: 'David Wilson',
//     position: 'Developer, Company E',
//     text:
//       'Fusce tincidunt ex eu tortor auctor, ut dictum est blandit. Integer eget nibh nec justo congue egestas.',
//   },
//   {
//     id: 6,
//     name: 'Sarah Brown',
//     position: 'COO, Company F',
//     text:
//       'Vivamus sagittis, elit ac hendrerit mattis, velit metus auctor tortor, id vehicula erat metus eget odio.',
//   },
//   {
//     id: 7,
//     name: 'Robert Clark',
//     position: 'Product Manager, Company G',
//     text:
//       'Cras tempus libero eu turpis bibendum eleifend. Phasellus malesuada posuere dolor in interdum.',
//   },
//   {
//     id: 8,
//     name: 'Laura White',
//     position: 'Sales Director, Company H',
//     text:
//       'Donec sed massa eu felis rhoncus vehicula nec ut dolor. Nullam efficitur euismod ex, eget hendrerit sapien.',
//   },
// ];

// export default function TestimonialCarousel() {
//   const size = '96px';
//   const color = 'white';

//   const pulseRing = keyframes`
//     0% {
//       transform: scale(0.33);
//     }
//     40%,
//     50% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 0;
//     }
//   `;

//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       showThumbs={false}
//       showStatus={false}
//       transitionTime={500}
//       centerMode={true}
//       centerSlidePercentage={80}
//     >
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id}>
//           <Box
//             p={8}
//             mx="auto"
//             maxW="400px"
//             borderRadius="lg"
//             backgroundColor="teal.500"
//             color="white"
//             boxShadow="lg"
//             textAlign="center"
//             transition="transform 0.2s, box-shadow 0.2s"
//             _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
//           >
//             <Flex
//               justifyContent="center"
//               alignItems="center"
//               h="216px"
//               w="full"
//               overflow="hidden"
//               borderRadius="50%"
//               position="relative"
//               _before={{
//                 content: "''",
//                 position: 'relative',
//                 display: 'block',
//                 width: '300%',
//                 height: '300%',
//                 boxSizing: 'border-box',
//                 marginLeft: '-100%',
//                 marginTop: '-100%',
//                 borderRadius: '50%',
//                 bgColor: color,
//                 animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
//               }}
//             >
//               <img
//                 src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
//                 alt={testimonial.name}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   width: size,
//                   height: size,
//                   borderRadius: '50%',
//                 }}
//               />
//             </Flex>
//             <Text fontSize="lg" fontStyle="italic">
//               {testimonial.text}
//             </Text>
//             <Text fontWeight="bold" mt={4}>
//               {testimonial.name}
//             </Text>
//             <Text color="gray.300">{testimonial.position}</Text>
//           </Box>
//         </div>
//       ))}
//     </Carousel>
//   );
// }


// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Box, Text, Flex, keyframes } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
//   {
//     id: 4,
//     name: 'Emily Davis',
//     position: 'Marketing Manager, Company D',
//     text:
//       'Curabitur ut fringilla nulla. Proin dignissim nulla sed cursus. Etiam consectetur magna nec risus sagittis aliquet.',
//   },
//   {
//     id: 5,
//     name: 'David Wilson',
//     position: 'Developer, Company E',
//     text:
//       'Fusce tincidunt ex eu tortor auctor, ut dictum est blandit. Integer eget nibh nec justo congue egestas.',
//   },
//   {
//     id: 6,
//     name: 'Sarah Brown',
//     position: 'COO, Company F',
//     text:
//       'Vivamus sagittis, elit ac hendrerit mattis, velit metus auctor tortor, id vehicula erat metus eget odio.',
//   },
//   {
//     id: 7,
//     name: 'Robert Clark',
//     position: 'Product Manager, Company G',
//     text:
//       'Cras tempus libero eu turpis bibendum eleifend. Phasellus malesuada posuere dolor in interdum.',
//   },
//   {
//     id: 8,
//     name: 'Laura White',
//     position: 'Sales Director, Company H',
//     text:
//       'Donec sed massa eu felis rhoncus vehicula nec ut dolor. Nullam efficitur euismod ex, eget hendrerit sapien.',
//   },
// ];

// export default function TestimonialCarousel() {
//   const size = '120px';
//   const backgroundColor = 'rgba(255, 255, 255, 0.1)';
//   const textColor = 'black';

//   const pulseRing = keyframes`
//     0% {
//       transform: scale(0.33);
//     }
//     40%,
//     50% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 0;
//     }
//   `;

//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       showThumbs={false}
//       showStatus={false}
//       transitionTime={500}
//       centerMode={true}
//       centerSlidePercentage={80}
//     >
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id}>
//           <Box
//             p={8}
//             mx="auto"
//             maxW="400px"
//             borderRadius="lg"
//             backgroundColor="rgba(255, 255, 255, 0.1)"
//             color={textColor}
//             boxShadow="lg"
//             textAlign="center"
//             transition="transform 0.2s, box-shadow 0.2s"
//             _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
//           >
//             <Flex
//               justifyContent="center"
//               alignItems="center"
//               h="216px"
//               w="full"
//               overflow="hidden"
//               borderRadius="50%"
//               position="relative"
//               _before={{
//                 content: "''",
//                 position: 'absolute',
//                 display: 'block',
//                 width: '300%',
//                 height: '300%',
//                 boxSizing: 'border-box',
//                 marginLeft: '-100%',
//                 marginTop: '-100%',
//                 borderRadius: '50%',
//                 bgColor: backgroundColor,
//                 animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
//               }}
//             >
//               <img
//                 src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
//                 alt={testimonial.name}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   width: size,
//                   height: size,
//                   borderRadius: '50%',
//                 }}
//               />
//             </Flex>
//             <Text fontSize="lg" fontStyle="italic">
//               {testimonial.text}
//             </Text>
//             <Text fontWeight="bold" mt={4}>
//               {testimonial.name}
//             </Text>
//             <Text color="gray.300">{testimonial.position}</Text>
//           </Box>
//         </div>
//       ))}
//     </Carousel>
//   );
// }


// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import { Box, Text, Flex, keyframes } from '@chakra-ui/react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     position: 'CEO, Company A',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     position: 'Designer, Company B',
//     text:
//       'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
//   },
//   {
//     id: 3,
//     name: 'Michael Johnson',
//     position: 'CTO, Company C',
//     text:
//       'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
//   },
//   {
//     id: 4,
//     name: 'Emily Davis',
//     position: 'Marketing Manager, Company D',
//     text:
//       'Curabitur ut fringilla nulla. Proin dignissim nulla sed cursus. Etiam consectetur magna nec risus sagittis aliquet.',
//   },
//   {
//     id: 5,
//     name: 'David Wilson',
//     position: 'Developer, Company E',
//     text:
//       'Fusce tincidunt ex eu tortor auctor, ut dictum est blandit. Integer eget nibh nec justo congue egestas.',
//   },
//   {
//     id: 6,
//     name: 'Sarah Brown',
//     position: 'COO, Company F',
//     text:
//       'Vivamus sagittis, elit ac hendrerit mattis, velit metus auctor tortor, id vehicula erat metus eget odio.',
//   },
//   {
//     id: 7,
//     name: 'Robert Clark',
//     position: 'Product Manager, Company G',
//     text:
//       'Cras tempus libero eu turpis bibendum eleifend. Phasellus malesuada posuere dolor in interdum.',
//   },
//   {
//     id: 8,
//     name: 'Laura White',
//     position: 'Sales Director, Company H',
//     text:
//       'Donec sed massa eu felis rhoncus vehicula nec ut dolor. Nullam efficitur euismod ex, eget hendrerit sapien.',
//   },
// ];

// export default function TestimonialCarousel() {
//   const size = '120px';
//   const backgroundColor = 'rgba(255, 255, 255, 0.1)';
//   const textColor = 'black';

//   const pulseRing = keyframes`
//     0% {
//       transform: scale(0.33);
//     }
//     40%,
//     50% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 0;
//     }
//   `;

//   return (
//     <Carousel
//       showArrows={true}
//       infiniteLoop={true}
//       autoPlay={true}
//       interval={5000}
//       showThumbs={false}
//       showStatus={false}
//       transitionTime={500}
//       centerMode={true}
//       centerSlidePercentage={80}
//     >
//       {testimonials.map((testimonial) => (
//         <div key={testimonial.id}>
//           <Box
//             p={8}
//             mx="auto"
//             maxW="400px"
//             borderRadius="lg"
//             backgroundColor="rgba(255, 255, 255, 0.1)"
//             color={textColor}
//             boxShadow="lg"
//             textAlign="center"
//             transition="transform 0.2s, box-shadow 0.2s"
//             _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
//           >
//             <Flex
//               justifyContent="center"
//               alignItems="center"
//               h="216px"
//               w="full"
//               overflow="hidden"
//               borderRadius="50%"
//               position="relative"
//               _before={{
//                 content: "''",
//                 position: 'absolute',
//                 display: 'block',
//                 width: '300%',
//                 height: '300%',
//                 boxSizing: 'border-box',
//                 marginLeft: '-100%',
//                 marginTop: '-100%',
//                 borderRadius: '50%',
//                 bgColor: backgroundColor,
//                 animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
//               }}
//             >
//               <img
//                 src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
//                 alt={testimonial.name}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   width: size,
//                   height: size,
//                   borderRadius: '50%',
//                 }}
//               />
//             </Flex>
//             <Text fontSize="lg" fontStyle="italic">
//               {testimonial.text}
//             </Text>
//             <Text fontWeight="bold" mt={4}>
//               {testimonial.name}
//             </Text>
//             <Text color="gray.500">{testimonial.position}</Text>
//           </Box>
//         </div>
//       ))}
//     </Carousel>
//   );
// }


import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Flex, keyframes } from '@chakra-ui/react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company A',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam, odio ac lobortis interdum, justo libero bibendum odio, non tincidunt justo felis in odio.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Designer, Company B',
    text:
      'Sed viverra arcu nec odio vestibulum, ut bibendum lectus hendrerit. Aenean efficitur erat ut ex dapibus interdum. In hac habitasse platea dictumst.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    position: 'CTO, Company C',
    text:
      'Proin tristique, libero ac efficitur cursus, velit ligula consectetur mi, at blandit ante mi vel sem. In lacinia ex vel nisi viverra, non feugiat urna facilisis.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Marketing Manager, Company D',
    text:
      'Curabitur ut fringilla nulla. Proin dignissim nulla sed cursus. Etiam consectetur magna nec risus sagittis aliquet.',
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Developer, Company E',
    text:
      'Fusce tincidunt ex eu tortor auctor, ut dictum est blandit. Integer eget nibh nec justo congue egestas.',
  },
  {
    id: 6,
    name: 'Sarah Brown',
    position: 'COO, Company F',
    text:
      'Vivamus sagittis, elit ac hendrerit mattis, velit metus auctor tortor, id vehicula erat metus eget odio.',
  },
  {
    id: 7,
    name: 'Robert Clark',
    position: 'Product Manager, Company G',
    text:
      'Cras tempus libero eu turpis bibendum eleifend. Phasellus malesuada posuere dolor in interdum.',
  },
  {
    id: 8,
    name: 'Laura White',
    position: 'Sales Director, Company H',
    text:
      'Donec sed massa eu felis rhoncus vehicula nec ut dolor. Nullam efficitur euismod ex, eget hendrerit sapien.',
  },
];

export default function TestimonialCarousel() {
  const size = '120px';
  const backgroundColor = 'rgba(255, 255, 255, 0.1)';
  const textColor = 'black';

  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  `;

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
      showStatus={false}
      transitionTime={500}
      centerMode={true}
      centerSlidePercentage={80}
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <Box
            p={4} // Reduced padding to make it smaller
            mx="auto"
            maxW="320px" // Reduced maximum width
            borderRadius="lg"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color={textColor}
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              h="160px" // Reduced height
              w="full"
              overflow="hidden"
              borderRadius="50%"
              position="relative"
              _before={{
                content: "''",
                position: 'absolute',
                display: 'block',
                width: '200%', // Adjusted width
                height: '200%', // Adjusted height
                boxSizing: 'border-box',
                marginLeft: '-50%', // Adjusted margin
                marginTop: '-50%', // Adjusted margin
                borderRadius: '50%',
                bgColor: backgroundColor,
                animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
              }}
            >
              <img
                src={`https://i.pravatar.cc/150?u=${testimonial.id}`} // Use a placeholder avatar image
                alt={testimonial.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  width: size,
                  height: size,
                  borderRadius: '50%',
                }}
              />
            </Flex>
            <Text fontSize="md" fontStyle="italic"> {/* Reduced font size */}
              {testimonial.text}
            </Text>
            <Text fontWeight="bold" mt={2}> {/* Reduced margin-top */}
              {testimonial.name}
            </Text>
            <Text color="gray.500">{testimonial.position}</Text>
          </Box>
        </div>
      ))}
    </Carousel>
  );
}



