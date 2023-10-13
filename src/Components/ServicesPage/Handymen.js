import React, { useState, useEffect } from "react";
import {
  Spinner,
  Box,
  Text,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Flex,
  Collapse,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";


function Handymen({ handyData }) {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [isOpenArray, setIsOpenArray] = useState([]); // Array to track open/close state for each card

  useEffect(() => {
    if (handyData) {
      setIsOpenArray(new Array(handyData.length).fill(false));

      // Simulate fetching data from the parent and API
      // Replace this with your actual API call or data retrieval logic
      const data = handyData.map((item, index) => (
        <Card
          key={item.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          margin={10}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={item.profilePicUrl}
            alt={"Handyman"}
          />

          <Stack ml={4}>
            <CardBody>
              <Heading size="md">{item.firstName + " " + item.lastName}</Heading>
              <Text py={2}>{item.description}</Text>
              <>
                <Button onClick={() => handleDetailsClick(index)}>Details</Button>

                <Collapse in={isOpenArray[index]} transition={{ exit: { delay: 0 }, enter: { duration: 0 } }}>
                  <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
                    <Text fontSize="xl" fontWeight="bold">
                      Years of Experience: {item.yearsOfExperience}
                    </Text>
                    <Text fontSize="lg">Inquiry Price: ${item.inquiryPrice}</Text>
                    <Text fontSize="lg">Hourly Rate: ${item.hourlyRate}</Text>
                  </Box>
                </Collapse>
              </>

              <Box display="flex" mt={2} alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < item.rating ? "yellow.500" : "gray.300"} />
                  ))}
              </Box>
            </CardBody>

            <CardFooter mt={4}>
              <Button variant="solid" colorScheme="blue">
                Require tasks
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ));

      // Simulate a delay to show the loading animation
      setTimeout(() => {
        setTableData(data);
        setLoading(false);
      }, 2000); // You can adjust the delay as needed
    }
  }, [handyData, isOpenArray]);

  const handleDetailsClick = (index) => {
    setIsOpenArray((prevIsOpenArray) => {
      const newIsOpenArray = [...prevIsOpenArray];
      newIsOpenArray[index] = !newIsOpenArray[index];
     


      return newIsOpenArray;
    });
  };

  return (
    <Box>
      <Text fontSize="xl">Choose your handyman</Text>
      {loading ? (
        <Box className="loading-animation" textAlign="center">
          <Spinner size="xl" color="blue.500" />
          <Text>Loading...</Text>
        </Box>
      ) : (
        <div>{tableData}</div>
      )}
    </Box>
  );
}

export default Handymen;
