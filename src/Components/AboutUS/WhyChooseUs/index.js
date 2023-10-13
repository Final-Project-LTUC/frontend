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
  
  export default function SimpleAccordion() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Flex
        minH={'100vh'}
        bg="white" // Set the background color to white
        p={4}
        direction="column"
      >
        {/* Title and Subtitle */}
        <Box textAlign="center" mb={4}>
          <Text fontSize="3xl" fontWeight="bold">
            Accordion Section
          </Text>
          <Text fontSize="lg" color="gray.500">
            Here's what you need to know
          </Text>
        </Box>
  
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ lg: 'start' }}
          flexWrap="wrap"
        >
          <Accordion
            allowMultiple
            flex={{ base: 1, lg: 2 }} // Set the initial size and stretch on lg breakpoint
            width="100%"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <AccordionItem key={item}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                  width="100%"
                  onClick={toggleAccordion}
                >
                  <Text fontSize="lg">Accordion Item {item}</Text>
                  <ChevronDownIcon fontSize="24px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text color="gray.600">
                    Content for Accordion Item {item}.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
  
          {/* Image on the right */}
          <Image
            src="/assets/12345.png" // Replace this with the path to your image file
            alt="Description of the image"
            objectFit="cover"
            maxW="100%" // Ensure the image doesn't exceed its container
            flex={{ base: 1, lg: 1 }} // Set the initial size and stretch on lg breakpoint
          />
        </Flex>
      </Flex>
    );
  }
  