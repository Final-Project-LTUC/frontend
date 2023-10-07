import { Button, Flex, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useReducer } from 'react'
import { handymanExperties } from "../../assets/constants";
import { redirect } from "react-router-dom";

import formReducer, {
    initialState,
  } from "../../hooks/Reducers/FormReducer";import axios from 'axios';
import { LoginContext } from '../../hooks/Context/LoginProvider';
;

function ExpertiesButtons({setShowPages,showPages}) {
    const [formData, dispatch] = useReducer(formReducer, initialState);
    const toast  = useToast();
    const loginContext = useContext(LoginContext);
    async function handleSubmit(){
      try {
        const response=await loginContext.updateData(formData, 'handyman');
        if(response.status===200){
          await loginContext.login(formData.username,formData.password,'handyman')
          setTimeout(()=>{
            redirect('/')
          },1500)
        }else {
          setShowPages({...showPages,showExpertiesPage:false,showSecondPage:true});
          throw new Error(response.response.data.message)
        }
      } catch (e) {
        toast({
          title: `Something Went Wrong`,
          description: e.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
      
    }
  return (
    <Flex direction={'column'} alignItems={'center'} h={'calc(100vh - 100px)'} justifyContent={'space-around'}>
        <Text fontSize={'5xl'}>Now Let's Finish up your profile </Text>
    <Text fontSize='3xl'>Tell Us What You Are Good At</Text>
    <Flex w={'100%'} h={'200px'} wrap={'wrap'} justifyContent={'flex-start'} gap={'30px'} alignItems={'flex-start'}>
    {handymanExperties.map(experty=>{
      return(
        <Button 
         w={'180px'} colorScheme={formData.experties.includes(experty.name)?'teal':'teal'} variant={formData.experties.includes(experty.name)?'solid':'outline'} h={'40px'} key={experty.name}
         onClick={(e)=>dispatch({type:'CHANGE_EXPERTIES',payload:experty.name})}
         >{experty.name}</Button>
        )
      })}
    </Flex>
    <Button w={'50%'}
    onClick={()=>handleSubmit()}
    colorScheme='teal'>Finish</Button>
      </Flex>
  )
}

export default ExpertiesButtons