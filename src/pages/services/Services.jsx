import {Heading, Flex, Box, Text, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import {handymanExperties} from '../../assets/constants'
import './services.scss';
import {imageStyle, serviceCard,descriptionStyle,solidButtonStyle, ghostButtonSyle} from './styles';
import { motion } from 'framer-motion';
const ServiecesCard=({service,index})=>{
const {imgUrl,name,description}=service;


const MotionFlex=motion(Flex);
return (
<MotionFlex sss
sx={serviceCard}
initial={{x:`${index%2===0?'50%':'-50%'}`,opacity:0}}
whileInView={{ x: 0,opacity:1,y:0 }}
transition={{
  type: "ease", 
  duration:.8,
  damping:20
}}
//update now can you seeeeeeeeeeeeeeeeeeeeeeeeeeeeee lieth
>
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
      <Flex w={'95%'} h={'100%'} flexDirection={'column'} justifyContent={'space-around'} gap={'40px'} mt={'2em'}>
      {
        handymanExperties.map((service,index)=>{
          return (
            <ServiecesCard key={service.name} index={index} service={service} />
          );
        })
      }
      </Flex>
 
    </Flex>
  );
}

export default Services;
