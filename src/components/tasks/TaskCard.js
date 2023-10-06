import React from "react";
import {
  Box,
  Image,
  Button,
  Badge,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
function Task({
  title,
  description,
  isDone,
  imageUrl,
  onTakeTask,
  onViewDetails,
  startDate 
}) {
  const cardShadow = useColorModeValue(
    "5px 2px 4px rgba(1, 1, 1, 0.1)",
    "5px 2px 4px rgba(255, 255, 255, 0.1)"
  );
  
  // Format the startDate prop in "year/month/day" format
  const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString("en-US", { timeZone: "Asia/Amman" }) : "";
  return ( 
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
      <Image src={imageUrl} alt={"taskCard"} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {isDone ? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Done
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              Incoming
            </Badge>
          )}

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {startDate && new Date(startDate).toLocaleDateString()} &bull; {startDate && new Date(startDate).toLocaleTimeString()}
          </Box>
        </Box>

        <Box display="flex" alignItems="baseline">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {title}
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {5} reviews
          </Box>
        </Box>

        {/* Display formatted startDate */}
        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            Start Date: {formattedStartDate}
          </Box>
        </Box>

        {/* Add Buttons */}
        <Box display="flex" mt="4">
          {isDone ? (
            <Button onClick={onViewDetails} variant="outline">
              View Details
            </Button>
          ) : (
            <Button onClick={onTakeTask}>Take Task</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}


export default Task;
