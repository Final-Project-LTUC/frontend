import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import cookie from "react-cookies";
import "./HandymanDetails.css";
import { MdBuild, MdPhone, MdEmail } from "react-icons/md";
import Loader from "../../Components/Loader/Loader";
function HandymanDetails() {
  const { id } = useParams();
  const listItemHoverColor = "gray.200";
  const imageScaleOnHover = 1.1;
  const [handyman, setHandyman] = useState({});
  const [handymanTasks, setHandymanTasks] = useState([]);
  const token = cookie.load("auth");
  const [isLoading, setIsLoading] = useState(true);
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} color="yellow.400" fontSize="1.2rem" />);
      } else {
        stars.push(<StarIcon key={i} color="gray.400" fontSize="1.2rem" />);
      }
    }
    return stars;
  };
  useEffect(() => {
    const fetchHandymanTasks = async () => {
      try {
        const encodedId = encodeURIComponent(id);
        const response = await axios.get(
          `${`${process.env.REACT_APP_DATABASE_URL}`}/handytasks/${encodedId}`,
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
          `${`${process.env.REACT_APP_DATABASE_URL}`}/handymen/${encodedId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHandyman(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set isLoading to false when data is fetched
      }
    };

    if (token) {
      fetchHandymanData();
      fetchHandymanTasks();
    }

    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
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
      {isLoading ? (
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
                      imageHovered ? `scale(${imageScaleOnHover})` : "scale(1)"
                    }
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  />
                </Center>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "53px",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "10vh", // Ensures full viewport height
                  }}
                >
                  <Heading
                    mb={1}
                    textAlign="center"
                    className="waviy pulse"
                    style={{
                      fontSize: "37px",
                      color: "black",
                    }}
                  >
                    <span style={{ "--i": 1 }}>{handyman.firstName}</span>{" "}
                    <span style={{ "--i": 2 }}>{handyman.lastName}</span>
                  </Heading>

                  <Button
                    className="bounce"
                    leftIcon={
                      <MdBuild
                        style={{
                          fontSize: "24px",
                          color: "#ebc910",
                        }}
                      />
                    }
                    colorScheme="#929ea433"
                    variant="solid"
                  ></Button>
                </div>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  marginTop={"38px"}
                  marginBottom={"55px"}
                  gap={"20px"}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
                    display="flex"
                    alignItems="center" // Center vertically
                  >
                    <MdEmail size="20px" style={{ marginRight: "5px" }} />
                    {handyman.email}
                  </Text>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    display="flex" // Add this style
                    alignItems="center" // Add this style
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
                  >
                    <MdPhone
                      style={{
                        marginRight: "5px",
                        fontSize: "1.2rem",
                      }}
                    />
                    {handyman.phoneNumber}
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  marginTop={"65px"}
                  marginBottom={"55px"}
                  gap={"55px"}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
                  >
                    UserName: {handyman.username}
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
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
                    fontFamily="mono"
                  >
                    City: {handyman.city}
                  </Text>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
                  >
                    Years of Experience: {handyman.yearsOfExperience}
                  </Text>

                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="#319795"
                    padding={"10px"}
                    background={"#929ea433"}
                    width={"fit-content"}
                    borderRadius={"10px"}
                    fontFamily="mono"
                  >
                    {" "}
                    Languages :{handyman.languages}
                  </Text>
                </Box>

                <Text
                  fontSize="42px"
                  fontWeight="bold"
                  color="#319795"
                  padding={"10px"}
                  borderRadius={"10px"}
                >
                  Previous Work
                </Text>
                {/* <Heading
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
                        </Heading> */}
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
                        onMouseEnter={() => handleListItemHover(index)}
                        bgColor={
                          hoveredItem === index ? listItemHoverColor : "white"
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
                              : task.description.slice(0, 100)}
                            {task.description.length > 100 && (
                              <Button
                                variant="link"
                                color="blue.500"
                                size="sm"
                                onClick={() => toggleShowMore(index)}
                                style={{
                                  marginLeft: "5px",
                                }}
                              >
                                {task.showMore ? "Show Less" : "Show More"}
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
                          <Text fontSize="lg" fontWeight="bold">
                            {renderRatingStars(task.reviewOfHandyman)}
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
      )}
    </>
  );
}

export default HandymanDetails;
