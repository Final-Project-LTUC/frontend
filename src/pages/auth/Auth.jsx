import React from 'react'
import { Box, Container, Image, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import handymanSignUp from  '../../assets/handymanSignUp.jpeg'
import './auth.scss';
import Form from '../../Components/SignupSingin/Form';
function Auth({submitAction,userType}) {
  return (
       <Flex  w='100%' h='calc(100vh - 100px)' alignItems='center' justifyContent='space-between'  >
        <Flex w={'55%'} height='90vh' justifyContent='center' alignItems='center'>
          <Form submitAction={submitAction} userType={userType}/>
        </Flex>
        <Box w={'45%'} maxH='80vh' bg={'#23fr41'}>
        <Image   boxSize='55%' borderRadius='20px' objectFit='cover'  src={handymanSignUp} alt='Dan Abramov' />
        </Box>
       </Flex>
  )
}

export default Auth