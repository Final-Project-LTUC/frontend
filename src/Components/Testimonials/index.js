
import React, { useState } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import FontAwesome icons

export default function TestimonialCarousel() {
  const testimonials = [
    {
      text: "Skillify helped me find the perfect handyman for my home repairs. Excellent service!",
      author: "John Doe",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1fJdYD5zMTH7J3SYREXO72t94yaMk_KZN3fR4dC9oNDshZsf6HYff3q1d7FowWUW01g&usqp=CAU",
    },
    {
      text: "I've been using Skillify for a while now, and it's made my handyman services much more accessible to clients.",
      author: "Jane Smith",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRyR3wzOR0BjfeCl6zQmlm4C7rzTOc6KQJQ&usqp=CAU",
    },
    {
      text: "Skillify is a game-changer for connecting handymen and clients. It's made my life so much easier.",
      author: "Robert Johnson",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0_sy5dSQ_44g7lnT3Cp2lS34AEEM-m5oKw&usqp=CAU",
    },
    {
      text: "I highly recommend Skillify to anyone looking for reliable handyman services. It's a fantastic platform!",
      author: "Sarah Davis",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0_Mm6V9-WWrpU43cl9MqHkGMtqv2uizMdA&usqp=CAU",
    },
    {
      text: "As a handyman, Skillify has helped me grow my business and connect with new clients. Thank you!",
      author: "Michael Anderson",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1fJdYD5zMTH7J3SYREXO72t94yaMk_KZN3fR4dC9oNDshZsf6HYff3q1d7FowWUW01g&usqp=CAU",
    },
    
    {
      text: "Skillify made it easy for me to hire a handyman for my home renovation project. Highly recommended!",
      author: "David Smith",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1fJdYD5zMTH7J3SYREXO72t94yaMk_KZN3fR4dC9oNDshZsf6HYff3q1d7FowWUW01g&usqp=CAU",
    },
    {
      text: "The service provided by Skillify exceeded my expectations. I'll definitely use it again!",
      author: "Emily White",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRyR3wzOR0BjfeCl6zQmlm4C7rzTOc6KQJQ&usqp=CAU",
    },
    {
      text: "Skillify is the go-to platform for finding reliable handymen. I've had great experiences so far!",
      author: "Liam Johnson",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1fJdYD5zMTH7J3SYREXO72t94yaMk_KZN3fR4dC9oNDshZsf6HYff3q1d7FowWUW01g&usqp=CAU",
    },
    {
      text: "I've recommended Skillify to all my friends and family. It's made home improvement projects hassle-free!",
      author: "Sophia Lee",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRyR3wzOR0BjfeCl6zQmlm4C7rzTOc6KQJQ&usqp=CAU",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const numVisible = 2; // Number of testimonials visible at once
  const numTestimonials = testimonials.length;

  const handlePrevTestimonial = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? numTestimonials - numVisible : prevIndex - 1
    );
  };

  const handleNextTestimonial = () => {
    setStartIndex((prevIndex) =>
      prevIndex === numTestimonials - numVisible ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + numVisible
  );

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Testimonials
      </Heading>
      <Center>
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <IconButton
            onClick={handlePrevTestimonial}
            aria-label="Previous testimonial"
            icon={<FaArrowLeft />}
            colorScheme="blue"
            variant="ghost"
            size="lg"
            borderRadius="50%"
            _hover={{
              bg: 'blue.200',
            }}
          />
          {visibleTestimonials.map((testimonial, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              shadow="lg"
              mx={4}
              css={{ width: '400px' }} // Set the fixed width using Chakra UI's css prop
            >
              <Flex>
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.author}
                  w="150px" // Set image width
                />
                <Box p="4">
                  <Heading fontSize="xl" fontWeight="semibold">
                    {testimonial.author}
                  </Heading>
                  <Text mt="2" color="gray.600">
                    {testimonial.text}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
          <IconButton
            onClick={handleNextTestimonial}
            aria-label="Next testimonial"
            icon={<FaArrowRight />}
            colorScheme="blue"
            variant="ghost"
            size="lg"
            borderRadius="50%"
            _hover={{
              bg: 'blue.200',
            }}
          />
        </Flex>
      </Center>
    </Box>
  );
}










