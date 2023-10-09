import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "./profile.css"
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    StackDivider,
    Stack,
    Heading,
    Center,
    Icon,
  } from "@chakra-ui/react";
import axios from "axios";


function Profile({token}) {
   console.log(token)
   async function gettingProfile(token) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get('http://localhost:5000/dashboard', {
        headers: headers,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Failed to fetch data');
        return null;
      }
    } catch (error) {
      console.error('An error occurred:', error);
      return null;
    }
  }
  const [oldData, setOldData] = useState(null);
  useEffect(() => {
    // Fetch profile data and update the state
    async function fetchData() {
      const profileData = await gettingProfile(token);
      setOldData(profileData);
    }

    fetchData();
  }, [token]);
  console.log(oldData)




  return (
    <Card className="profileanime" width={"45%"} >
        <Flex >

      <CardHeader>
        <Heading size="md">Your Profile</Heading>
      </CardHeader>
        </Flex>

      <CardBody>
        <Flex>
          {/* Left side with a 4:8 ratio */}
          <Box style= {{ textAlign: 'left', borderRadius: '4%' }}
            flex="fill"
            bg="dark.900" // Yellowish background color
            p="4" // Add padding to the left side
          >
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  userName
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.username?oldData.username:"username"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  first Name
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.firstName?oldData.firstName:"loading..."}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  last Name
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.lastName?oldData.lastName:"loading..."}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  age
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.age?oldData.age:"age"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                email
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.email?oldData.email:"loading"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                languages
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.languages?oldData.languages:"loading..."}
                </Text>
              </Box>
              
              <Box>
                <Heading size="xs" textTransform="uppercase">
                phone Number
                </Heading>
                <Text pt="2" fontSize="sm">
                  0062{oldData&&oldData.phoneNumber?oldData.phoneNumber:"loading..."}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                created At
                </Heading>
                <Text pt="2" fontSize="sm">
                  {oldData&&oldData.createdAt?oldData.createdAt:"loading..."}
                </Text>
              </Box>
              
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Hourly rate
                </Heading>
                <Text pt="2" fontSize="sm">
                {oldData&&oldData.hourlyRate?oldData.hourlyRate:"hourlyRate"} JOD
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                 inquiry Price
                </Heading>
                <Text pt="2" fontSize="sm">
                {oldData&&oldData.inquiryPrice?oldData.inquiryPrice:"loading..."} JOD
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                 Biography
                </Heading>
                <Text pt="2" fontSize="sm">
                {oldData&&oldData.description?oldData.description:"description"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                 Rating
                </Heading>
                <Text pt="2" fontSize="sm">
                {oldData&&oldData.rating?oldData.rating:"rating"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                 Singed in as
                </Heading>
                <Text pt="2" fontSize="sm">
                {oldData&&oldData.role?oldData.role:"role"}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  experties
                </Heading>
                <Text pt="2" fontSize="sm">
                  experties from the back end can be updated
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Right side */}
          <Box flex="8">
            {/* Content for the right side */}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Profile;
