import React from 'react'
import { Box, Container, Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import handymanSignUp from  '../../assets/handymanSignUp.jpeg'
import './auth.scss';
import Form from '../../Components/Form';
function Auth({submitAction,userType}) {
  return (
       <Flex w='100%' h='100vh' alignItems='center' justifyContent='space-between' >
        <Flex w={'40%'} height='80vh' justifyContent='center' alignItems='center'  >
          <Form submitAction={submitAction} userType={userType}/>
        </Flex>
        <Box w={'50%'} maxH='80vh' bg={'#23fr41'}>
        <Image   boxSize='55%' borderRadius='20px' objectFit='cover'  src={handymanSignUp} alt='Dan Abramov' />
        </Box>
       </Flex>
  )
}

export default Auth