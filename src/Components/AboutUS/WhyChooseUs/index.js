
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function FancyAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const accordionItems = [
    '24/7 Support',
    'Clients Reviews',
    'Professional Team',
    'Best Services',
    'Transparency',
    'Competitive Pricing',
  ];

  return (
    <Flex
      minH={'100vh'}
      bg={useColorModeValue('gray.100', 'gray.800')}
      p={8}
      direction="column"
    >
      {/* Title and Subtitle */}
      <Box textAlign="center" mb={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold" color={useColorModeValue('teal.600', 'teal.300')}>
          Why Choose Us 
        </Text>
        <Text fontSize="lg" color="gray.500">
          Here's what you need to know
        </Text>
      </Box>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
      >

        {/* Accordion on the far left with increased width */}
        <Accordion
          allowToggle
          width="60%" // Adjust the width as needed
          maxW="60%"
          onChange={toggleAccordion}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} my={4}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                width="100%"
                _hover={{
                  bg: 'teal.200',
                }}
              >
                <Text fontSize="lg">{item}</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel p={4} bg="teal.100" color="teal.700">
                <Text>
                  Content for {item}. You can customize this content as needed.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Space between the accordion and the image */}
        <Box flex={1} />

        {/* Image on the right with margin-right to move it a bit to the left */}
        <Image
          src="/assets/q.png" // Replace this with the path to your image file
          alt="Description of the image"
          objectFit="cover"
          maxW="100%"
          flex={1}
          borderRadius="lg"
          mr={20} // Adjust the margin-right value as needed
        />
      </Flex>
    </Flex>
  );
}










