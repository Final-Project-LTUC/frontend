import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import { Box, Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import "./Catalog.css"; // Import your CSS file here
import Loader from "../../Components/Loader/Loader";
import LargeWithNewsletter from "../../Components/AboutUS/NavBar/Footer/index"; // Replace 'path/to' with the actual path to LargeWithNewsletter.js

function Catalog() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_DATABASE_URL}/tasks/all`
                );
                console.log(response.data);
                setTasks(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    // Filter tasks with taskStatus "done"
    const doneTasks = tasks.filter((task) => task.taskStatus === "done");

    return (

        <Box p={5} className="PageContainer">
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
            {isLoading ? ( // Show the loader when isLoading is true
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "70vh", // Adjust the height as needed
                    }}
                >
                    <Loader />
                </div>
            ) : (
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
            )}
            <LargeWithNewsletter />

        </Box>
    );
}

export default Catalog;
