import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Heading,
    List,
    ListItem,
    ListIcon,
    Text,
    Image,
    Center,
    Badge,
    Button,
} from "@chakra-ui/react";
import { StarIcon, PhoneIcon } from "@chakra-ui/icons";
import axios from "axios";
import cookie from "react-cookies";

function HandymanDetails() {
    const { id } = useParams();
    console.log("ID from useParams:", id);

    const [handyman, setHandyman] = useState({});
    const [handymanTasks, setHandymanTasks] = useState([]);
    const token = cookie.load("auth");
    const [showMore, setShowMore] = useState({});

    useEffect(() => {
        const fetchHandymanTasks = async () => {
            try {
                const encodedId = encodeURIComponent(id);
                const response = await axios.get(
                    `http://localhost:5000/handytasks/${encodedId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log({ response });
                setHandymanTasks(response.data);
                console.log("Handyman tasks:", response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchHandymanData = async () => {
            try {
                console.log(token);
                const encodedId = encodeURIComponent(id);
                const response = await axios.get(
                    `http://localhost:5000/handymen/${encodedId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setHandyman(response.data);
                console.log("Handyman data:", response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            fetchHandymanData();
            fetchHandymanTasks();
        }
    }, [id, token]);

    const toggleShowMore = (index) => {
        setShowMore((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            {Object.keys(handyman).length !== 0 ? (
                <div>
                    <Center>
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src={handyman.profilePicUrl}
                            mb={5}
                        />
                    </Center>
                    <Heading size="lg" mb={2} textAlign="center">
                        {handyman.firstName + " " + handyman.lastName}
                    </Heading>
                    <Text fontSize="2xl"> {handyman.username}</Text>
                    <Box textAlign="center" mb={4}>
                        <Badge colorScheme="green">Handyman</Badge>
                    </Box>
                    <Heading size="md" mb={3}>
                        Previous works :
                    </Heading>
                    <List spacing={2}>
                        {handymanTasks.length !== 0 ? (
                            handymanTasks.map((task, index) => (
                                <ListItem
                                    key={index}
                                    p={3}
                                    shadow="md"
                                    borderWidth="1px"
                                    borderRadius="lg"
                                >
                                    <Text fontWeight="bold" fontSize="lg">
                                        {task.title}
                                    </Text>
                                    <Text>
                                        {showMore[index]
                                            ? task.description
                                            : task.description.slice(0, 100)}
                                        {task.description.length > 100 &&
                                            !showMore[index] && (
                                                <Button
                                                    variant="link"
                                                    color="blue.500"
                                                    size="sm"
                                                    onClick={() =>
                                                        toggleShowMore(index)
                                                    }
                                                    style={{
                                                        marginLeft: "5px",
                                                    }}
                                                >
                                                    Show more
                                                </Button>
                                            )}
                                    </Text>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        mt={2}
                                    >
                                        <ListIcon
                                            as={StarIcon}
                                            color="yellow.400"
                                        />
                                        <Text fontSize="lg" fontWeight="bold">
                                            Rating: {task.rating}
                                        </Text>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        mt={2}
                                    >
                                        <ListIcon
                                            as={PhoneIcon}
                                            color="green.400"
                                        />
                                        <Text fontSize="lg" fontWeight="bold">
                                            Phone: {handyman.phoneNumber}
                                        </Text>
                                    </Box>
                                </ListItem>
                            ))
                        ) : (
                            <ListItem>No tasks available.</ListItem>
                        )}
                    </List>
                </div>
            ) : (
                <div className="no-tasks">Loading</div>
            )}
        </Box>
    );
}

export default HandymanDetails;
