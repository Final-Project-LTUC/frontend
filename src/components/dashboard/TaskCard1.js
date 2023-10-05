import React from 'react'

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    StackDivider,
    Stack,
    Heading,
    Center,
    Icon,
    SimpleGrid,
  } from "@chakra-ui/react";
  const cost = "50 jd"

function TaskCard1() {
  return (
    <>
    
    <SimpleGrid spacing={10} column={1} >
        
  <Card>
    <CardHeader>
      <Heading size='md'> Current tasks</Heading>
    </CardHeader>
    <CardBody>
      <Text>View crrent task status.</Text>
      <Text>stage 1 costed : {cost}</Text>
      <Text>stage 2 costed : {cost} </Text>
      <Text>stage 3 costed : {cost} </Text>
    </CardBody>
    <Center>

    <CardFooter>
      <Button>View Current task</Button>
    </CardFooter>
    </Center>

  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Prevous tasks</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your tasks.</Text>
    </CardBody>
    <Center >
    <CardFooter>
        
        <Button >Go to Task basketoo</Button>
        
      
    </CardFooter>
    </Center>
  </Card>
  
</SimpleGrid>
    </>
  )
}

export default TaskCard1