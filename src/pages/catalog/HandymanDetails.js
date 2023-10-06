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
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function HandymanDetails() {
    const { id } = useParams();

    const handymen = [
        {
            id: "1",
            name: "John Doe",
            tasks: [
                { description: "Walk the Dog", rating: 5 },
                { description: "Clean the House", rating: 4 },
            ],
        },
        {
            id: "2",
            name: "Jane Smith",
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
            <Heading size="lg" mb={4}>
                {handyman.name}
            </Heading>
            <Image
                borderRadius="full"
                boxSize="150px"
                src={handyman.profilePic}
                mb={5}
            />
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
                            <Text>Rating: {task.rating}</Text>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
export default HandymanDetails;
