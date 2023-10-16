import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import "./Catalog.css"; // Import your CSS file here

function Catalog() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/tasks/all"
                );
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Filter tasks with taskStatus "done"
    const doneTasks = tasks.filter((task) => task.taskStatus === "done");

    return (
        <Box p={5}>
            <Text
                className="animate-charcter" // Apply the animation class to the Text
                fontSize="52px"
                fontWeight="bold"
                textAlign="center"
                color="teal.500"
                mb={5}
            >
                Completed Tasks
            </Text>
            <SimpleGrid
                columns={3}
                spacing={8}
                justifyContent="center"
                marginLeft={20}
                marginRight={10}
            >
                {doneTasks.length !== 0 ? (
                    doneTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <Text fontSize="xl" textAlign="center">
                        No completed tasks found
                    </Text>
                )}
            </SimpleGrid>
        </Box>
    );
}

export default Catalog;
