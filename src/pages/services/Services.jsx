import {Heading, Flex, Box, Text, Button } from '@chakra-ui/react'
import React, { useEffect } from "react";
import {handymanExperties} from '../../assets/constants'
import './services.scss';
import {imageStyle, serviceCard,descriptionStyle,solidButtonStyle, ghostButtonSyle} from './styles';
import { motion } from 'framer-motion';
const ServiecesCard=({service})=>{
const {imgUrl,name,description}=service;
const MotionFlex=motion(Flex);
return (
<MotionFlex 
sx={serviceCard}>
  <Box sx={imageStyle} flexDirection={'column'} backgroundImage={`url(${imgUrl})`}></Box>
  <Flex sx={descriptionStyle}>
  <Heading>{name}</Heading>
  <Text>{description}</Text>
  <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
  <Button colorScheme='whatsapp' variant={'ghost'} sx={ghostButtonSyle} >20 Available Handymen </Button>
  <Button colorScheme='teal' sx={solidButtonStyle} >See All</Button>
  </Flex>
  </Flex>
</MotionFlex>
);
};
function Services() {
   useEffect(()=>{
    try {
      // const response=await axios.get('')
    } catch (e) {
      
    }
   },[]);
   
  return (
    <Flex w={'100%'} h={'100%'} flexDirection={'column'} alignItems={'flex-start'} gap={'50px'}>
      <Flex w={'90%'} h={'100%'} flexDirection={'column'} justifyContent={'space-around'} gap={'40px'} mt={'2em'}>
      {
        handymanExperties.map(service=>{
          return (
            <ServiecesCard key={service.name} service={service} />
          );
        })
      }
      </Flex>
 
    </Flex>
  );
}

export default Services;
