
import CurrentTask from "./currentTask/CurrentTask"
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "./taskcard1.css";
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
  Stack,
  Heading,
  Center,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
const cost = "50 jd";

function TaskCard1() {
  const [showCurrentTask, setShowCurrentTask] = useState(false);


  const paymentStatuses = [true, true, true]; // fetch it from the api
  const arrivedOnTime = true; //// button pressed when arriving 

  

  const handleViewCurrentTask = () => {
    setShowCurrentTask(true);
  };

  return (
    <>
      <SimpleGrid spacing={10} column={1} className="cardsanime">
        <Card>
          <CardHeader>
            <Heading size="md"> Current tasks</Heading>
          </CardHeader>
          <CardBody>
            <Text>View current task status.</Text>
            <Text>stage 1 costed : {cost}</Text>
            <Text>stage 2 costed : {cost} </Text>
            <Text>stage 3 costed : {cost} </Text>
          </CardBody>
          <Center>
            <CardFooter>
              <Button onClick={handleViewCurrentTask}>View Current task</Button>
            </CardFooter>
          </Center>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Previous tasks</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your tasks.</Text>
          </CardBody>
          <Center>
            <CardFooter>
              <ChakraLink as={ReactRouterLink} to="/tasks">
                <Button>Go to Task basket</Button>
              </ChakraLink>
            </CardFooter>
          </Center>
        </Card>
      </SimpleGrid>

      {/* Conditional rendering of CurrentTask */}
      {showCurrentTask && <CurrentTask paymentStatuses={paymentStatuses}  arrivedOnTime= {arrivedOnTime} />}
    </>
  );
}

export default TaskCard1;
