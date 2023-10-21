import React, { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import {
    Box,
    Flex,
    Text,
    StackDivider,
    Stack,
    Heading,
  } from "@chakra-ui/react";
  import jwt_decode from 'jwt-decode';
const UpdateLink=({setShowNum})=><Link colorScheme="teal" onClick={()=>setShowNum(prev=>prev++)} fontSize={'lg'} fontWeight={'semibold'} textAlign={'center'} display={'block'} to={'/dashUpdate'}>Update</Link>
function Profile({profileData,token,showPage,setShowNum}) {
  return (
    <Card 
    position={`${showPage!=='profile'?'absolute':'relative'}`}
    transform={`translateX(${showPage!=='profile'?'200%':'0'})`}
    transition={'all .7s ease-in-out'}
    h={`'100vh'`}
    width={"75%"} >
        <Flex w={'100%'}>
      <CardHeader>
        <Heading size="xl">Your Profile</Heading>
      </CardHeader>
        </Flex>
      <CardBody h={'100vh'} w={'100%'}>
        <Flex w={'100%'}>
          <Box style= {{ textAlign: 'left', borderRadius: '4%' }}
           h={'100vh'}
           bg="dark.900" 
            p="4" 
            w={'100%'}
          >
            <Stack   divider={<StackDivider />} spacing="5">
              <Flex  w={'100%'}>
                <Box  w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  userName
                </Heading>
                <Text pt="2" fontSize='md'>
                  {profileData.username?profileData.username:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                email
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.email?profileData.email:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
              </Box>
              </Flex>
              <Flex w={'100%'}>
                <Box w={'100%'} >
                <Heading size="md" textTransform="uppercase">
                  first Name
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.firstName?profileData.firstName:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  Last Name
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.lastName?profileData.lastName:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
                </Box>
              </Flex>
              <Flex w={'100%'}>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  age
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.age?profileData.age:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                languages
                </Heading>
                
                <Text pt="2" fontSize="md">
                  {profileData.languages?profileData.languages:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
              </Box>
              </Flex>
              <Flex w='100%'>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                phone Number
                </Heading>
                <Text pt="2" fontSize="md">
                  00962 {profileData.phoneNumber?profileData.phoneNumber:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                 Rating
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.rating?profileData.rating:'0'}
                </Text>
              </Box>
              </Flex>
              {jwt_decode(token).role=='handyman'&&
              <Flex w={'100%'}>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  Hourly rate
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.hourlyRate?profileData.hourlyRate+' JOD':<UpdateLink setShowNum={setShowNum}/>} 
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                 inquiry Price
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.inquiryPrice?profileData.inquiryPrice+' JOD ':<UpdateLink setShowNum={setShowNum}/>}
                </Text>
              </Box>
              </Flex>}
              <Flex w={'100%'}>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                 Biography
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.description?profileData.description:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
              </Box>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                created At
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.createdAt?profileData.createdAt:<UpdateLink setShowNum={setShowNum}/>}
                </Text>
              </Box>
                </Flex>
                {jwt_decode(token).role==='handyman'&&
              <Box>
                <Heading size="md" textTransform="uppercase">
                  experties
                </Heading>
                <Text pt="2" fontSize="md">
                  experties from the back end can be updated
                </Text>
              </Box>}
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
