import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";
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
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            boxShadow="md"
            maxW="sm"
            position="relative"
            _hover={{ shadow: "lg" }}
        >
            <Image src={task.imageUrl} boxSize="200px" width={"250px"} />
            <Box mt={4}>
                <Text fontSize="lg" fontWeight="semibold">
                    {task.description}
                </Text>
                <Box mt={2} display="flex" alignItems="center">
                    <Text>Rating: </Text>

                    {renderRatingStars(task.rating)}
                </Box>
            </Box>
            <Badge
                colorScheme="teal"
                borderRadius="full"
                px="2"
                position="absolute"
                top="1rem"
                right="1rem"
                cursor="pointer"
                onClick={() => {
                    navigate(`/handyman/${task.handymanId}`);
                }}
            >
                Handyman Works
            </Badge>
        </Box>
    );
}

export default TaskCard;
