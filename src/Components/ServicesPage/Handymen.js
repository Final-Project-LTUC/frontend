// import React, { useState, useEffect } from "react";
// import {
//   Spinner,
//   Box,
//   Text,
//   Card,
//   Image,
//   Stack,
//   CardBody,
//   Heading,
//   CardFooter,
//   Button,
//   Flex,
//   Collapse,
// } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
// import TaskModal from "./TaskModal";


// function Handymen({ handyData,token }) {
//   const [loading, setLoading] = useState(true);
//   const [tableData, setTableData] = useState([]);
//   const [isOpenArray, setIsOpenArray] = useState([]); // Array to track open/close state for each card


//   useEffect(() => {
//     if(handyData){
//       setIsOpenArray(new Array(handyData.length).fill(false));



//     }},[handyData])
//   useEffect(() => {
//     if (handyData) {


//       // Simulate fetching data from the parent and API
//       // Replace this with your actual API call or data retrieval logic
//       const data = handyData.map((item, index) => (

//         <Card
//           key={item.id}
//           direction={{ base: "column", sm: "row" }}
//           overflow="hidden"
//           variant="outline"
//           margin={10}
//         >

//           <Image
//             objectFit="cover"
//             maxW={{ base: "100%", sm: "200px" }}
//             src={item.profilePicUrl}
//             alt={"Handyman"}
//           />

//           <Stack ml={4}>
//             <CardBody>
//               <Heading size="md">{item.firstName + " " + item.lastName}</Heading>
//               <Text py={2}>{item.description}</Text>
//               <>
//                     <Text fontSize="lg">Inquiry Price: ${item.inquiryPrice}</Text>
//                     <Text fontSize="lg">Hourly Rate: ${item.hourlyRate}</Text>
//                 <Button onClick={() => handleDetailsClick(index)}>Details</Button>

//                 <Collapse in={isOpenArray[index]} transition={{ exit: { delay: 0 }, enter: { duration: 0 } }}>
//                   <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
//                     <Text fontSize="xl" fontWeight="bold">
//                       Years of Experience: {item.yearsOfExperience}
//                       <Text fontSize="lg">Languages: {item.languages}</Text>
//                     <Text fontSize="lg">Phone number: 0{item.phoneNumber}</Text>
//                     </Text>
//                   </Box>
//                 </Collapse>
//               </>

//               <Box display="flex" mt={2} alignItems="center">
//                 {Array(5)
//                   .fill("")
//                   .map((_, i) => (
//                     <StarIcon key={i} color={i < item.rating ? "yellow.500" : "gray.300"} />
//                   ))}
//               </Box>
//             </CardBody>

//             <CardFooter mt={4}>
//             <TaskModal  data={handyData} index={index} token ={token} />
//             </CardFooter>
//           </Stack>
//         </Card>
//       ));

//       // Simulate a delay to show the loading animation
//       setTimeout(() => {
//         setTableData(data);
//         setLoading(false);
//       }, 2000); // You can adjust the delay as needed
//     }
//   }, [handyData, isOpenArray]);

//   const handleDetailsClick = (index) => {
//     setIsOpenArray((prevIsOpenArray) => {
//       const newIsOpenArray = [...prevIsOpenArray];
//       newIsOpenArray[index] = !newIsOpenArray[index];



//       return newIsOpenArray;
//     });
//   };


//   return (
//     <Box>
//       <Text fontSize="xl">Choose your handyman</Text>
//       {loading ? (
//         <Box className="loading-animation" textAlign="center">
//           <Spinner size="xl" color="blue.500" />
//           <Text>Loading...</Text>
//         </Box>
//       ) : (
//         <div>{tableData}</div>

//       )}

//     </Box>
//   );
// }

// export default Handymen;












// import React, { useState, useEffect } from "react";
// import {
//   Spinner,
//   Box,
//   Text,
//   Card,
//   Image,
//   Stack,
//   CardBody,
//   Heading,
//   CardFooter,
//   Button,
//   Flex,
//   Collapse,
//   Center,
// } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
// import TaskModal from "./TaskModal";

// function Handymen({ handyData, token }) {
//   const [loading, setLoading] = useState(true);
//   const [tableData, setTableData] = useState([]);
//   const [isOpenArray, setIsOpenArray] = useState([]);

//   useEffect(() => {
//     if (handyData) {
//       setIsOpenArray(new Array(handyData.length).fill(false));
//     }
//   }, [handyData]);

//   useEffect(() => {
//     if (handyData) {
//       const data = handyData.map((item, index) => (
//         <Card
//           key={item.id}
//           border="1px solid #e0e0e0"
//           borderRadius="lg"
//           overflow="hidden"
//           margin="10px"
//         >
//           <Flex direction={{ base: "column", sm: "row" }}>
//             <Image
//               maxW={{ base: "100%", sm: "200px" }}
//               maxH="200px"
//               objectFit="cover"
//               src={item.profilePicUrl}
//               alt={"Handyman"}
//             />
//             <Stack ml={4} spacing={4}>
//               <CardBody>
//                 <Heading size="md">{item.firstName + " " + item.lastName}</Heading>
//                 <Text fontSize="md" color="gray.600">
//                   {item.description}
//                 </Text>
//                 <Text fontSize="lg" color="teal.500">
//                   Inquiry Price: ${item.inquiryPrice}
//                 </Text>
//                 <Text fontSize="lg" color="teal.500">
//                   Hourly Rate: ${item.hourlyRate}
//                 </Text>
//                 <Center>
//                   <Button
//                     size="sm"
//                     colorScheme="teal"
//                     onClick={() => handleDetailsClick(index)}
//                     mr={1}
//                   >
//                     Details
//                   </Button>
//                   <TaskModal data={handyData} index={index} token={token} />
//                 </Center>
//                 <Collapse
//                   in={isOpenArray[index]}
//                   transition={{ exit: { delay: 0 }, enter: { duration: 0 } }}
//                 >
//                   <Box
//                     p="20px"
//                     mt="4"
//                     bg="teal.500"
//                     rounded="md"
//                     shadow="md"
//                     color="white"
//                   >
//                     <Text fontSize="lg" fontWeight="bold">
//                       Years of Experience: {item.yearsOfExperience}
//                     </Text>
//                     <Text fontSize="lg">Languages: {item.languages}</Text>
//                     <Text fontSize="lg">Phone number: 0{item.phoneNumber}</Text>
//                   </Box>
//                 </Collapse>
//               </CardBody>
//               <CardFooter>
//                 <Center>
//                   <Flex alignItems="center">
//                     {Array(5)
//                       .fill("")
//                       .map((_, i) => (
//                         <StarIcon
//                           key={i}
//                           color={i < item.rating ? "yellow.500" : "gray.300"}
//                           boxSize={6}
//                           ml={4} // Moved stars slightly to the right
//                         />
//                       ))}
//                   </Flex>
//                 </Center>
//               </CardFooter>
//             </Stack>
//           </Flex>
//         </Card>
//       ));

//       setTimeout(() => {
//         setTableData(data);
//         setLoading(false);
//       }, 2000);
//     }
//   }, [handyData, isOpenArray]);

//   const handleDetailsClick = (index) => {
//     setIsOpenArray((prevIsOpenArray) => {
//       const newIsOpenArray = [...prevIsOpenArray];
//       newIsOpenArray[index] = !newIsOpenArray[index];
//       return newIsOpenArray;
//     });
//   };

//   return (
//     <Box>
//       <Text fontSize="4xl">Choose your handyman</Text>
//       {loading ? (
//         <Box className="loading-animation" textAlign="center">
//           <Spinner size="xl" color="blue.500" />
//           <Text>Loading...</Text>
//         </Box>
//       ) : (
//         <div>{tableData}</div>
//       )}
//     </Box>
//   );
// }

// export default Handymen;




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
  Center,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import TaskModal from "./TaskModal";

function Handymen({ handyData, token }) {
  const [loading, setLoading] = useState(true);
  const [selectedHandyman, setSelectedHandyman] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (handyData) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [handyData]);

  const handleDetailsClick = (handyman) => {
    setSelectedHandyman(handyman);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedHandyman(null);
    setIsModalOpen(false);
  };

  return (
    <Box>
      {loading ? (
        <Box
          className="loading-animation"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="rgba(255, 255, 255, 0.8)"
        >
          <Spinner size="xl" color="teal.500" />
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Loading...
          </Text>
        </Box>
      ) : (
        <>
          <Text fontSize="4xl" textAlign="center" my={4} fontWeight="bold">
            Choose your handyman
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={8}>
            {handyData.map((item, index) => (
              <Box key={item.id} w="100%" mb={6} px={2}>
                <Card
                  border="1px solid #e0e0e0"
                  height="220px"
                  width="370px"
                  borderRadius="lg"
                  overflow="hidden"
                  margin="30px"
                  boxShadow="md"
                  padding={"10px"}
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.02)" }}
                >
                  <Flex direction={{ base: "column", sm: "row" }}>
                    <Image
                      maxW={{ base: "100%", sm: "200px" }}
                      maxH="200px"
                      objectFit="cover"
                      src={item.profilePicUrl}
                      alt={"Handyman"}
                      width="130px"
                      height="200px"
                    />
                    <Stack ml={2} spacing={2}>
                      <CardBody>
                        <Heading size="md" paddingBottom={"8px"}>
                          {item.firstName} {item.lastName}
                        </Heading>
                        {/* <Text fontSize="md" color="gray.600" paddingBottom={"5px"}>
                          {item.description}
                        </Text> */}
                        <Text fontSize="lg" color="teal.500" paddingBottom={"5px"}>
                          Inquiry Price: ${item.inquiryPrice}
                        </Text>
                        <Text fontSize="lg" color="teal.500" paddingBottom={"10px"}>
                          Hourly Rate: ${item.hourlyRate}
                        </Text>
                        <CardFooter>
                          <Center>
                            <Flex alignItems="flex-start" mt={-15} paddingBottom={"5px"}>
                              <Box ml="auto" />
                              <Box ml={12}>
                                {Array(5)
                                  .fill("")
                                  .map((_, i) => (
                                    <StarIcon
                                      key={i}
                                      color={i < item.rating ? "yellow.500" : "gray.300"}
                                      boxSize={4}
                                    />
                                  ))}
                              </Box>
                            </Flex>
                          </Center>
                        </CardFooter>
                        <Center>
                          <Flex alignItems="center">
                            <Button
                              size="sm"
                              colorScheme="teal"
                              onClick={() => handleDetailsClick(item)}
                              mr={2}
                              ml={5}
                            >
                              Details
                            </Button>
                            <TaskModal data={handyData} index={index} token={token} />
                          </Flex>
                        </Center>
                      </CardBody>

                    </Stack>
                  </Flex>
                </Card>
              </Box>
            ))}
          </SimpleGrid>
        </>
      )}
<Modal isOpen={isModalOpen} onClose={closeModal}>
  <ModalOverlay />
  <ModalContent
    borderRadius="lg"
    bg="white"
    color="teal.900"
    maxW="480px"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
  >
    <ModalHeader
      fontSize="2xl"
      fontWeight="bold"
      bg="teal.500"
      color="white"
      p={4}
    >
      Handyman Details
    </ModalHeader>
    <ModalCloseButton
      color="teal.500"
      top="0.5rem"
      right="0.5rem"
      _hover={{ color: "teal.600" }}
    />
    {selectedHandyman && (
      <ModalBody p={6}>
        <Box textAlign="center">
          <Image
            src={selectedHandyman.profilePicUrl}
            alt="Handyman"
            borderRadius="full"
            boxSize="150px"
            mx="auto"
            mb={4}
          />
          <Center flexDirection="column">
            <Text fontSize="xl" fontWeight="bold" textAlign="left">
              {selectedHandyman.firstName} {selectedHandyman.lastName}
            </Text>
            <Text fontSize="lg" color="teal.500" mt={4} textAlign="left">
              {selectedHandyman.description}
            </Text>
            <Text fontSize="lg" color="teal.500" mt={4} textAlign="left">
              <strong>Inquiry Price:</strong> ${selectedHandyman.inquiryPrice}
            </Text>
            <Text fontSize="lg" color="teal.500" mt={2} textAlign="left">
              <strong>Hourly Rate:</strong> ${selectedHandyman.hourlyRate}
            </Text>
            <Text fontSize="lg" color="teal.500" mt={2} textAlign="left">
              <strong>Years of Experience:</strong> {selectedHandyman.yearsOfExperience} years
            </Text>
            <Text fontSize="lg" color="teal.500" mt={2} textAlign="left">
              <strong>Languages:</strong> {selectedHandyman.languages}
            </Text>
            <Text fontSize="lg" color="teal.500" mt={2} textAlign="left">
              <strong>Phone number:</strong> 0{selectedHandyman.phoneNumber}
            </Text>
          </Center>
        </Box>
      </ModalBody>
    )}
    <ModalFooter justifyContent="center">
      <Button
        colorScheme="teal"
        onClick={closeModal}
        fontSize="lg"
        fontWeight="bold"
        px="40px"
        py="3"
      >
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>







    </Box>
  );
}

export default Handymen;


