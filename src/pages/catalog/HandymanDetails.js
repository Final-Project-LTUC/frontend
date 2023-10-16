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
import "./HandymanDetails.css";
function HandymanDetails() {
    const { id } = useParams();
    console.log("ID from useParams:", id);
    const listItemHoverColor = "gray.200"; // Color for list item hover background
    const imageScaleOnHover = 1.1; // Scale factor for image on hover
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
    const [hoveredItem, setHoveredItem] = useState(null);
    const [imageHovered, setImageHovered] = useState(false);

    // Function to handle hovering over a list item
    const handleListItemHover = (index) => {
        setHoveredItem(index);
    };

    // Function to handle mouse leaving the list item
    const handleListItemLeave = () => {
        setHoveredItem(null);
    };

    // Function to handle hovering over the image
    const handleImageHover = () => {
        setImageHovered(true);
    };

    // Function to handle mouse leaving the image
    const handleImageLeave = () => {
        setImageHovered(false);
    };

    return (
        <div className="container">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                {Object.keys(handyman).length !== 0 ? (
                    <div>
                        <Center>
                            <Image
                                borderRadius="95px"
                                boxSize="180px"
                                src={handyman.profilePicUrl}
                                mb={5}
                                // Apply a hover effect to the image
                                transform={
                                    imageHovered
                                        ? `scale(${imageScaleOnHover})`
                                        : "scale(1)"
                                }
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Center>
                        <Heading
                            as="h2"
                            size="lg"
                            mb={2}
                            textAlign="center"
                            style={{
                                fontSize: "1.5rem",
                                color: "#085449",
                                animation: "animate 4s ease-in-out infinite",
                            }}
                        >
                            {handyman.firstName + " " + handyman.lastName}
                        </Heading>

                        <Heading className="waviy" size="lg" mb={3}>
                            <span style={{ "--i": 1 }}>P</span>
                            <span style={{ "--i": 2 }}>r</span>
                            <span style={{ "--i": 3 }}>e</span>
                            <span style={{ "--i": 4 }}>v</span>
                            <span style={{ "--i": 5 }}>i</span>
                            <span style={{ "--i": 6 }}>o</span>
                            <span style={{ "--i": 7 }}>u</span>
                            <span style={{ "--i": 8 }}>s</span>
                            <span style={{ "--i": 9 }}>&nbsp;</span>

                            <span style={{ "--i": 10 }}>W</span>
                            <span style={{ "--i": 11 }}>o</span>
                            <span style={{ "--i": 12 }}>r</span>
                            <span style={{ "--i": 13 }}>k</span>
                            <span style={{ "--i": 14 }}> :</span>
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
                                        onMouseEnter={() =>
                                            handleListItemHover(index)
                                        }
                                        onMouseLeave={handleListItemLeave}
                                        // Apply a background color when hovering
                                        bgColor={
                                            hoveredItem === index
                                                ? listItemHoverColor
                                                : "white"
                                        }
                                    >
                                        <Text
                                            fontWeight="bold"
                                            fontSize="lg"
                                            color={"#135408"}
                                        >
                                            {task.title}
                                        </Text>
                                        <Text>
                                            {showMore[index]
                                                ? task.description
                                                : task.description.slice(
                                                      0,
                                                      100
                                                  )}
                                            {task.description.length > 100 &&
                                                !showMore[index] && (
                                                    <Button
                                                        variant="link"
                                                        color="blue.500"
                                                        size="sm"
                                                        onClick={() =>
                                                            toggleShowMore(
                                                                index
                                                            )
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

                                            <Text
                                                fontSize="lg"
                                                fontWeight="bold"
                                            >
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
                                            <Text
                                                fontSize="lg"
                                                fontWeight="bold"
                                            >
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
        </div>
    );
}

export default HandymanDetails;
