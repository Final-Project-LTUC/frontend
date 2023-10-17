import React from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import "./profile.css"
import {
    Box,
    Flex,
    Text,
    StackDivider,
    Stack,
    Heading,
  } from "@chakra-ui/react";
const UpdateLink=({setShowUpdateForm})=><Link colorScheme="teal" onClick={()=>setShowUpdateForm(true)} fontSize={'lg'} fontWeight={'semibold'} textAlign={'center'} display={'block'} to={'/dashUpdate'}>Update</Link>
function Profile({profileData,showUpdateForm,setShowUpdateForm,showTasks,token}) {
  return (
    <Card 
    position={`${showUpdateForm||showTasks?'absolute':'relative'}`}
    transform={`translateX(${showUpdateForm||showTasks?'-200%':'0'})`}
    className="profileanime"
    mt={'28'}
    h={`'100%'`}
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
                  {profileData.username?profileData.username:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                email
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.email?profileData.email:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
              </Box>
              </Flex>
              <Flex w={'100%'}>
                <Box w={'100%'} >
                <Heading size="md" textTransform="uppercase">
                  first Name
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.firstName?profileData.firstName:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  Last Name
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.lastName?profileData.lastName:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
                </Box>
              </Flex>
              <Flex w={'100%'}>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  age
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.age?profileData.age:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                languages
                </Heading>
                
                <Text pt="2" fontSize="md">
                  {profileData.languages?profileData.languages.slice(1):<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
              </Box>
              </Flex>
              <Flex w='100%'>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                phone Number
                </Heading>
                <Text pt="2" fontSize="md">
                  00962 {profileData.phoneNumber?profileData.phoneNumber:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
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
              {token.role=='handyman'&&
              <Flex w={'100%'}>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                  Hourly rate
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.hourlyRate?profileData.hourlyRate+' JOD':<UpdateLink setShowUpdateForm={setShowUpdateForm}/>} 
                </Text>
                </Box>
                <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                 inquiry Price
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.inquiryPrice?profileData.inquiryPrice+' JOD ':<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
              </Box>
              </Flex>}
              <Flex w={'100%'}>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                 Biography
                </Heading>
                <Text pt="2" fontSize="md">
                {profileData.description?profileData.description:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
              </Box>
              <Box w={'100%'}>
                <Heading size="md" textTransform="uppercase">
                created At
                </Heading>
                <Text pt="2" fontSize="md">
                  {profileData.createdAt?profileData.createdAt:<UpdateLink setShowUpdateForm={setShowUpdateForm}/>}
                </Text>
              </Box>
                </Flex>
                {token.role==='handyman'&&
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
