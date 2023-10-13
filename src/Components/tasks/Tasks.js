import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";

export default function Tasks() {
    const doneTasks = [
        {
            title: "fix broken sink  1 ",
            description: "Description for fix broken sink  1",
            isDone: true,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
        },
        {
            title: "fix broken sink  2",
            description: "Description for fix broken sink  2",
            isDone: true,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
        },
        {
            title: "fix broken sink  4 ",
            description: "Description for fix broken sink  3",
            isDone: true,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
        },
        {
            title: "fix broken sink  5 ",
            description: "Description for fix broken sink  4",
            isDone: true,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
        },
        {
            title: "fix broken sink  6 ",
            description: "Description for fix broken sink  5",
            isDone: true,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: `${Date.now}`,
        },
    ];

    const incomingTasks = [
        {
            title: "fix bronken sink 7 ",
            description: "all is good",
            isDone: false,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: Date.now(),
        },
        {
            title: "fix bronken sink 8 ",
            description: "Description for fix bronken sink 7",
            isDone: false,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: Date.now(),
        },
        {
            title: "fix bronken sink 9 ",
            description: "Description for fix bronken sink 8",
            isDone: false,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: Date.now(),
        },
        {
            title: "fix bronken sink 10 ",
            description: "Description for fix bronken sink 9",
            isDone: false,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: Date.now(),
        },
        {
            title: "fix bronken sink 11 ",
            description: "Description for fix bronken sink 10",
            isDone: false,
            imageUrl:
                "https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg",
            startDate: Date.now(),
        },
    ];

    return (
        <>
            <TableContainer>
                <Table variant="striped" colorScheme="messenger">
                    <TableCaption>
                        Imperial to metric conversion factors
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Image</Th>
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>isDone</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {doneTasks.map((e, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>
                                        <img
                                            alt={e.title}
                                            src={e.imageUrl}
                                            width={60}
                                            height={60}
                                            style={{ borderRadius: "10px" }}
                                        />
                                    </Td>
                                    <Td>{e.title}</Td>
                                    <Td>
                                        {e.description.length > 200
                                            ? e.description
                                                  .slice(0, 200)
                                                  .concat("...")
                                            : e.description}
                                    </Td>
                                    <Td>{e.isDone ? "True" : "False"}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

// import React, { useState } from 'react';
// import { Box,Button, Heading, VStack,Flex } from '@chakra-ui/react';
// import TaskCard from './TaskCard';
// import {  ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
// function Tasks() {
//   const doneTasks = [
//     {
//       title: 'fix broken sink  1 ',
//       description: 'Description for fix broken sink  1',
//       isDone: true,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//     },
//     {
//       title: 'fix broken sink  2',
//       description: 'Description for fix broken sink  2',
//       isDone: true,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//     },
//     {
//       title: 'fix broken sink  4 ',
//       description: 'Description for fix broken sink  3',
//       isDone: true,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//     },
//     {
//       title: 'fix broken sink  5 ',
//       description: 'Description for fix broken sink  4',
//       isDone: true,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//     },
//     {
//       title: 'fix broken sink  6 ',
//       description: 'Description for fix broken sink  5',
//       isDone: true,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: `${Date.now}`
//     },
//   ];

//   const incomingTasks = [
//     {
//       title: 'fix bronken sink 7 ',
//       description: 'all is good',
//       isDone: false,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: Date.now(),
//     },
//     {
//       title: 'fix bronken sink 8 ',
//       description: 'Description for fix bronken sink 7',
//       isDone: false,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: Date.now(),
//     },
//     {
//       title: 'fix bronken sink 9 ',
//       description: 'Description for fix bronken sink 8',
//       isDone: false,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: Date.now(),
//     },
//     {
//       title: 'fix bronken sink 10 ',
//       description: 'Description for fix bronken sink 9',
//       isDone: false,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: Date.now(),
//     },
//     {
//       title: 'fix bronken sink 11 ',
//       description: 'Description for fix bronken sink 10',
//       isDone: false,
//       imageUrl: 'https://www.reicheltplumbing.com/wp-content/uploads/broken-sink-300x200.jpg',
//       startDate: Date.now(),
//     },
//   ];

//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const maxCards = 3;

//   const displayDoneTasks = doneTasks.slice(currentCardIndex, currentCardIndex + maxCards);
//   const displayIncomingTasks = incomingTasks.slice(currentCardIndex, currentCardIndex + maxCards);

//   const handlePrevClick = () => {
//     if (currentCardIndex > 0) {
//       setCurrentCardIndex(currentCardIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (currentCardIndex < doneTasks.length - maxCards) {
//       setCurrentCardIndex(currentCardIndex + 1);
//     }
//   };

//   return (
//     <Box backgroundColor={'dark'} padding={4}>
//       <Heading as="h1" size="lg" mb="4">
//         Tasks Basket
//         {/* Navigation Buttons */}
//         <Flex justifyContent="space-around" mt="4">
//           <Button onClick={handlePrevClick} disabled={currentCardIndex === 0}>
//             <ArrowLeftIcon />
//           </Button>
//           <Button onClick={handleNextClick} ml="4" disabled={currentCardIndex >= doneTasks.length - maxCards}>
//             <ArrowRightIcon />
//           </Button>
//         </Flex>
//       </Heading>

//       {/* Incoming Tasks with padding */}
//       <Box padding={8} paddingLeft="20" paddingRight="20" backgroundColor={'dark'}>
//         <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
//           {displayIncomingTasks.map((task, index) => (
//             <TaskCard
//               key={index}
//               title={task.title}
//               description={task.description}
//               isDone={task.isDone}
//               imageUrl={task.imageUrl}
//               startDate={task.startDate}
//               onTakeTask={() => alert(`Take task: ${task.title}`)}
//               style={{
//                 opacity: index === 1 ? 0 : 1, // Add opacity property for animation
//                 transition: 'opacity 0.5s ease-in-out', // Add transition for opacity
//               }}
//             />
//           ))}
//         </Flex>
//       </Box>
//       {/* Done Tasks with padding */}
//       <Box paddingLeft="20" paddingRight="20" backgroundColor={'dark'}>
//         <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
//           {displayDoneTasks.map((task, index) => (
//             <TaskCard
//               key={index}
//               title={task.title}
//               description={task.description}
//               isDone={task.isDone}
//               imageUrl={task.imageUrl}
//               onViewDetails={() => alert(`View details for ${task.title}`)}

//             />
//           ))}
//         </Flex>
//       </Box>
//     </Box>
//   );
// }

// export default Tasks;
