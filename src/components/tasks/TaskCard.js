import React from 'react';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';

function Task({ title, description, isDone, imageUrl, onTakeTask, onViewDetails }) {
  const cardShadow = useColorModeValue('5px 2px 4px rgba(1, 1, 1, 0.1)', '5px 2px 4px rgba(255, 255, 255, 0.1)');

  return (
    <Box
      style={{ boxShadow: cardShadow }} // Apply the shadow directly
      border="1px solid #ccc"
      padding="16px"
      marginBottom="16px"
      borderRadius="md"
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', marginBottom: '8px' }} />
      )}
      <Text fontWeight="bold">{title}</Text>
      <Text fontSize="sm">{description}</Text>
      {isDone ? (
        <Button onClick={onViewDetails} variant="outline">
          View Details
        </Button>
      ) : (
        <Button onClick={onTakeTask}>Take Task</Button>
      )}
    </Box>
  );
}

export default Task;

