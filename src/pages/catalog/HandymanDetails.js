import React from "react";
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
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function HandymanDetails() {
    const { id } = useParams();

    const handymen = [
        {
            id: "1",
            name: "John Doe",
            profilePic: "path_to_profile_pic1.jpg",
            tasks: [
                { description: "Walk the Dog", rating: 5 },
                { description: "Clean the House", rating: 4 },
            ],
        },
        {
            id: "2",
            name: "Jane Smith",
            profilePic: "path_to_profile_pic2.jpg",
            tasks: [
                { description: "Fix the Door", rating: 4.5 },
                { description: "Mow the Lawn", rating: 4.2 },
            ],
        },
    ];

    // Find the handyman by their id
    const handyman = handymen.find((h) => h.id === id);

    // Check if a handyman was found
    if (!handyman) {
        return <div>Handyman not found.</div>;
    }

    return (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Center>
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={handyman.profilePic}
                    mb={5}
                />
            </Center>
            <Heading size="lg" mb={2} textAlign="center">
                {handyman.name}
            </Heading>
            <Box textAlign="center" mb={4}>
                <Badge colorScheme="green">Handyman</Badge>
            </Box>
            <Heading size="md" mb={3}>
                Tasks:
            </Heading>
            <List spacing={2}>
                {handyman.tasks.map((task, index) => (
                    <ListItem
                        key={index}
                        p={3}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="lg"
                    >
                        <Text>{task.description}</Text>
                        <Box display="flex" alignItems="center" mt={2}>
                            <ListIcon as={StarIcon} color="yellow.400" />
                            <Text fontSize="lg" fontWeight="bold">
                                Rating: {task.rating}
                            </Text>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default HandymanDetails;
