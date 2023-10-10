import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TaskCard from "./TaskCard"; // Import the TaskCard component

function Catalog() {
    // Expanded static tasks data
    const tasks = [
        {
            id: 1,
            description: "Walk the Dog",
            rating: 5,
            imageURL: "path_to_image1.jpg",
            handymanId: "1",
        },
        {
            id: 2,
            description: "Clean the House",
            rating: 4,
            imageURL: "path_to_image2.jpg",
            handymanId: "1",
        },
        {
            id: 3,
            description: "Fix the Door",
            rating: 4.5,
            imageURL: "path_to_image3.jpg",
            handymanId: "2",
        },
        {
            id: 4,
            description: "Mow the Lawn",
            rating: 4.8,
            imageURL: "path_to_image4.jpg",
            handymanId: "2",
        },
    ];

    return (
        <Box p={5}>
            <Heading mb={5} textAlign="center" fontSize="2xl">
                Finished Tasks
            </Heading>
            <SimpleGrid columns={3} spacing={6} justifyContent="center">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Catalog;
