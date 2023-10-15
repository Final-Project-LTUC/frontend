import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TaskCard from "./TaskCard"; // Import the TaskCard component
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";

function Catalog() {
    const [tasks, setTasks] = useState([]);
    // Expanded static tasks data
    // const tasks = [
    //     {
    //         id: 1,
    //         description: "Walk the Dog",
    //         rating: 5,
    //         imageURL: "path_to_image1.jpg",
    //         handymanId: "1",
    //     },
    //     {
    //         id: 2,
    //         description: "Clean the House",
    //         rating: 4,
    //         imageURL: "path_to_image2.jpg",
    //         handymanId: "1",
    //     },
    //     {
    //         id: 3,
    //         description: "Fix the Door",
    //         rating: 4.5,
    //         imageURL: "path_to_image3.jpg",
    //         handymanId: "2",
    //     },
    //     {
    //         id: 4,
    //         description: "Mow the Lawn",
    //         rating: 4.8,
    //         imageURL: "path_to_image4.jpg",
    //         handymanId: "2",
    //     },
    // ];
    const token = cookie.load("auth");
    console.log(token);
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const data = await axios("http://localhost:5000/tasks/all");
            return data;
        };

        // call the function
        fetchData()
            // make sure to catch any error
            .then((data) => setTasks(data.data))
            .catch(console.error);
    }, []);

    return (
        <Box p={5}>
            <Heading mb={5} textAlign="center" fontSize="2xl">
                Finished Tasks
            </Heading>
            <SimpleGrid columns={3} spacing={6} justifyContent="center">
                {/* {tasks.map((task) => ( 
                    <TaskCard key={task.id} task={task} />
                ))} */}

                {tasks.length !== 0 ? (
                    tasks.map((task, index) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <div className="no-tasks">Loading</div>
                )}
            </SimpleGrid>
        </Box>
    );
}

export default Catalog;
