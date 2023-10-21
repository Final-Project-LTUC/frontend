import React from "react";
import { Box, Image, Text, Badge, Flex, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

function TaskCard({ task }) {
    const navigate = useNavigate();

    // Function to generate star icons based on the rating
    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <StarIcon key={i} color="yellow.400" fontSize="1.2rem" />
                );
            } else {
                stars.push(
                    <StarIcon key={i} color="gray.400" fontSize="1.2rem" />
                );
            }
        }
        return stars;
    };

    return (
        <Grid templateRows="350px" templateColumns="20fr" gap={4}>
            <Box
                borderWidth="1px"
                borderRadius="15px"
                overflow="hidden"
                p={0}
                boxShadow="md"
                maxWidth="90%"
                position="relative"
                _hover={{ shadow: "lg" }}
            >
                <Image
                    src={task.imageUrl}
                    width="100%"
                    objectFit="cover"
                    h="52%"
                />
                <Flex
                    p={6}
                    direction="column"
                    justifyContent="space-between"
                    bg="white"
                    alignItems="center"
                    h="30%"
                    paddingBottom={"40px"}
                >
                    <Box>
                        <Text
                            fontSize="20px"
                            fontWeight="bold"
                            mt={1}
                            fontFamily="heading"
                        >
                            {task.title}
                        </Text>
                    </Box>
                    <Flex mt={5} alignItems="center">
                        {renderRatingStars(task.rating)}
                    </Flex>
                    <Badge
                        colorScheme="teal"
                        borderRadius="10px"
                        px="7"
                        padding={"10px"}
                        cursor="pointer"
                        mt={4}
                        _hover={{ backgroundColor: "teal.600", color: "white" }}
                        onClick={() => {
                            navigate(`/handyman/${task.handymanId}`);
                        }}
                    >
                        Handyman Works
                    </Badge>
                </Flex>
            </Box>
        </Grid>
    );
}

export default TaskCard;
