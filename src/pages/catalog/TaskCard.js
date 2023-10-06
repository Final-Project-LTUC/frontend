import { Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={4}>
            <Image src={task.imageURL} alt={task.description} boxSize="200px" />
            <Text mt={4}>{task.description}</Text>
            <Text mt={2}>Rating: {task.rating}</Text>
            <Button
                onClick={() => {
                    navigate(`/handyman/${task.handymanId}`);
                }}
            >
                See rest of handyman work
            </Button>
        </Box>
    );
}

export default TaskCard;
