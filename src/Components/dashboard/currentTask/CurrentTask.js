import React from 'react';
import './CurrentTask.scss'; // Import your CSS file for styling
import PaymentStepper from './paymentStages/PaymentStepper';
import { Box, Grid, GridItem, Text, VStack, Center, Flex, Button } from "@chakra-ui/react";

function CurrentTask({ arrivedOnTime, paymentStatuses, task }) {
  const paymentLabels = ['Payment 1', 'Payment 2', 'Payment 3']; // Labels for the payments
  const taskKeys = Object.keys(task);
  paymentStatuses = true
  function formatKey(key) {
    // Replace capital letters with spaces and the lowercase version of the letter
    return key.replace(/([A-Z])/g, ' $1').toUpperCase();
  }

  return (
    <>
    <PaymentStepper/>
    <Center>
      
      <Box className="current-task-card">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Task Information
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {taskKeys.map((key, index) => (
            <GridItem key={key} colSpan={1}>
              <Box className="task-content">
                <VStack spacing={2}>
                  <Text className="task-title">{formatKey(key)}</Text>
                  <Text>{task[key]}</Text>
                </VStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>




      
      <Flex justify="center" alignItems="center" mt={4}>
        <Box className={`circle-status ${arrivedOnTime ? 'green' : 'red'}`}>
          <Box className="circle"></Box>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center" mt={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Current Task
        </Text>
        <div className="button-container">
          {/* Buttons */}
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Choice to continue
          </Button>
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Details
          </Button>
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Review of client
          </Button>
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Choice to continue
          </Button>
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Details
          </Button>
          <Button className="task-button" bg="#007bff" color="#fff" border="2px" borderColor="#007bff">
            Review of handyman
          </Button>
        </div>
      </Flex>
      <div className="payment-status">
        {/* Render payment statuses or labels as needed */}
      </div>
    </Center>
    </>
  );
}

export default CurrentTask;