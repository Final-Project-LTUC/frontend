import React from 'react';
import { Box, Heading, VStack,Flex } from '@chakra-ui/react';
import TaskCard from './TaskCard';

function Tasks() {
  const doneTasks = [
    {
      title: 'Task 1 (Done)',
      description: 'Description for Task 1',
      isDone: true,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
    {
      title: 'Task 2 (Done)',
      description: 'Description for Task 2',
      isDone: true,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
    {
      title: 'Task 3 (Done)',
      description: 'Description for Task 2',
      isDone: true,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
  ];

  const incomingTasks = [
    {
      title: 'Task 3 (Incoming)',
      description: 'all is good',
      isDone: false,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
    {
      title: 'Task 4 (Incoming)',
      description: 'Description for Task 4',
      isDone: false,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
    {
      title: 'Task 6 (Incoming)',
      description: 'Description for Task 4',
      isDone: false,
      imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
    },
  ];

  return (
    <Box backgroundColor={'dark'} style={{ boxShadow: '11px 4px 6px rgba(1, 1, 1, 1.1)' }}>
    <Heading as="h1" size="lg" mb="4">
      Tasks Basket
    </Heading>
  
    {/* Done Tasks with padding */}
    <Box padding="2" >
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" >
        {doneTasks.map((task, index) => (
          <TaskCard
          
            key={index}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            imageUrl={task.imageUrl}
            onViewDetails={() => alert(`View details for ${task.title}`)}
          />
        ))}
      </Flex>
    </Box>
  
    {/* Incoming Tasks with padding */}
    <Box padding="2">
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
        {incomingTasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            imageUrl={task.imageUrl}
            onTakeTask={() => alert(`Take task: ${task.title}`)}
          />
        ))}
      </Flex>
    </Box>
  </Box>
  
  );
}

export default Tasks;
