import React, { useState, useEffect } from "react";
import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import axios from "axios";
import TaskCard from "../catalog/TaskCard";
import Loader from "../../Components/Loader/Loader";

function HomeCatalog() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const maxCardsToShow = 3; // Set the maximum number of cards to show

    useEffect(() => {
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

    const limitedTasks = tasks.slice(0, maxCardsToShow); // Slice the array to get a limited number of tasks

    return (
        <div>
            <Heading as="h2" size="3xl" noOfLines={1} padding={10}>
                Catalog
            </Heading>
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "70vh",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div>
                    <SimpleGrid
                        columns={3}
                        spacing={8}
                        justifyContent="center"
                        marginLeft={20}
                        marginRight={10}
                    >
                        {limitedTasks.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </SimpleGrid>
                    {tasks.length > maxCardsToShow && (
                        <ChakraLink as={ReactRouterLink} to="/catalog">
                            <Button
                                bg={"teal.500"}
                                rounded={"full"}
                                color={"white"}
                                marginTop={"28px"}
                                _hover={{ bg: "teal.400" }}
                            >
                                SEE MORE
                            </Button>
                        </ChakraLink>
                    )}
                    {limitedTasks.length === 0 && (
                        <Text fontSize="xl" textAlign="center">
                            No tasks found
                        </Text>
                    )}
                </div>
            )}
        </div>
    );
}

export default HomeCatalog;
