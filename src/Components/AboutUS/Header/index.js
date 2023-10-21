
import React, { useRef } from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  const teamMembersRef = useRef(null);

  const scrollToTeamMembers = () => {
    teamMembersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'teal.400',
                zIndex: -1,
              }}>
              MEET
            </Text>
            <br />{' '}
            <Text color={'teal.500'} as={'span'}>
              SKILLIFY TEAM
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Meet our dynamic team of full-stack wizards!  
          From crafting pixel-perfect designs to building robust server-side solutions, 
          our experts do it all. 
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'teal'}
              color={'white'}
              marginLeft= {"15vh"}
              _hover={{
                bg: 'yellow.600',
               
              }}
              onClick={scrollToTeamMembers}>
              Meet the Team
            </Button>
            <Button rounded={'full'}>Contact Us</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} ref={teamMembersRef}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'./assets/bb.png'}
        />
      </Flex>
    </Stack>
  );
}
