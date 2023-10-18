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
    Button,
    AbsoluteCenter,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import cookie from "react-cookies";
import "./HandymanDetails.css";
import { css } from "@emotion/react";

function HandymanDetails() {
    const { id } = useParams();
    const listItemHoverColor = "gray.200";
    const imageScaleOnHover = 1.1;
    const [handyman, setHandyman] = useState({});
    const [handymanTasks, setHandymanTasks] = useState([]);
    const token = cookie.load("auth");

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
                setHandymanTasks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchHandymanData = async () => {
            try {
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
            } catch (error) {
                console.error(error);
            }
        };

        if (token) {
            fetchHandymanData();
            fetchHandymanTasks();
        }
    }, [id, token]);

    const [hoveredItem, setHoveredItem] = useState(null);
    const [imageHovered, setImageHovered] = useState(false);

    const handleListItemHover = (index) => {
        setHoveredItem(index);
    };

    const handleImageHover = () => {
        setImageHovered(true);
    };

    const handleImageLeave = () => {
        setImageHovered(false);
    };

    const toggleShowMore = (index) => {
        setHandymanTasks((tasks) =>
            tasks.map((task, i) =>
                i === index ? { ...task, showMore: !task.showMore } : task
            )
        );
    };

    return (
        <>
            {/* <img src="https://st2.depositphotos.com/4431055/11472/i/450/depositphotos_114721466-stock-photo-building-and-treatment-tools.jpg" /> */}
            <div className="containerr"> </div>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                {Object.keys(handyman).length !== 0 ? (
                    <div>
                        <Center>
                            <Image
                                borderRadius="95px"
                                boxSize="180px"
                                src={handyman.profilePicUrl}
                                mb={5}
                                position={"Absolute"}
                                marginRight={"400px"}
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
                                fontSize: "35px",
                                color: "black",
                                animation: "animate 4s ease-in-out infinite",
                            }}
                        >
                            {handyman.firstName + " " + handyman.lastName}
                        </Heading>
                        <Box
                            display={"flex"}
                            justifyContent={"space-around"}
                            marginTop={"100px"}
                            marginBottom={"30px"}
                        >
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="#319795"
                                padding={"10px"}
                                background={"#929ea433"}
                                width={"fit-content"}
                                borderRadius={"10px"}
                            >
                                Email: {handyman.email}
                            </Text>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="#319795"
                                padding={"10px"}
                                background={"#929ea433"}
                                width={"fit-content"}
                                borderRadius={"10px"}
                            >
                                Phone Number: {handyman.phoneNumber}
                            </Text>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="#319795"
                                padding={"10px"}
                                background={"#929ea433"}
                                width={"fit-content"}
                                borderRadius={"10px"}
                            >
                                Age: {handyman.age}
                            </Text>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="#319795"
                                padding={"10px"}
                                background={"#929ea433"}
                                width={"fit-content"}
                                borderRadius={"10px"}
                            >
                                Years of Experience:{" "}
                                {handyman.yearsOfExperience}
                            </Text>

                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="#319795"
                                padding={"10px"}
                                background={"#929ea433"}
                                width={"fit-content"}
                                borderRadius={"10px"}
                            >
                                {" "}
                                Languages :{handyman.languages}
                            </Text>
                        </Box>

                        <Heading
                            className="waviy"
                            size="lg"
                            mb={3}
                            paddingBottom={"5px"}
                        >
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
                        <List
                            spacing={2}
                            display={"flex"}
                            flexWrap={"wrap"}
                            justifyContent={"center"}
                            gap={"1%"}
                            overflow={"hidden"}
                        >
                            {handymanTasks.length !== 0 ? (
                                handymanTasks.map((task, index) => (
                                    <ListItem
                                        flexBasis={"20%"}
                                        key={index}
                                        p={5}
                                        shadow="md"
                                        borderWidth="1px"
                                        mt={"var(--chakra-space-2)"}
                                        borderRadius="lg"
                                        display={"flex"}
                                        flexDirection={"column"} // Set to column
                                        onMouseEnter={() =>
                                            handleListItemHover(index)
                                        }
                                        bgColor={
                                            hoveredItem === index
                                                ? listItemHoverColor
                                                : "white"
                                        }
                                    >
                                        <div
                                            style={{
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Text
                                                fontWeight="bold"
                                                fontSize="lg"
                                                color={"#135408"}
                                            >
                                                {task.title}
                                            </Text>
                                            <Text>
                                                {task.showMore
                                                    ? task.description
                                                    : task.description.slice(
                                                          0,
                                                          100
                                                      )}
                                                {task.description.length >
                                                    100 && (
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
                                                        {task.showMore
                                                            ? "Show Less"
                                                            : "Show More"}
                                                    </Button>
                                                )}
                                            </Text>
                                        </div>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            mt={2}
                                            justifyContent={"center"}
                                            overflow={"hidden"}
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
        </>
    );
}

export default HandymanDetails;
