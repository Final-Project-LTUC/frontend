import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useReducer } from 'react'
import { LoginContext } from '../hooks/Context/LoginProvider';
import formReducer,{initialState} from '../hooks/Reducers/FormReducer';
function Form({submitAction,userType}) {
  console.log(submitAction,userType)
  const [formData,dispatch]=useReducer(formReducer,initialState);
    const loginContext=useContext(LoginContext);
    function handleSubmit(e){
        e.preventDefault();                                                                                                                                  
        submitAction==='signup'?loginContext.signup(formData,userType):loginContext.login(formData.username,formData.password,userType);
    }
  return (
    <Flex direction='column' w={'50%'}>
<FormControl>
  <FormLabel>Email address</FormLabel>
  <Input 
  value={formData.email}
  onChange={(e)=>dispatch({type:'CHANGE_EMAIL',payload:e.target.value})}
  type='email' />
</FormControl> 
<FormControl>
  <FormLabel>Username</FormLabel>
  <Input 
    onChange={(e)=>dispatch({type:'CHANGE_USERNAME',payload:e.target.value})}
  type='text' />

</FormControl> 
<FormControl>
  <FormLabel>Full Name</FormLabel>
  <Input
    onChange={(e)=>dispatch({type:'CHANGE_NAME',payload:e.target.value})}
  type='text' />
</FormControl> 
<FormControl>
  <FormLabel>Password</FormLabel>
  <Input
    onChange={(e)=>dispatch({type:'CHANGE_PASSWORD',payload:e.target.value})}
  type='password' />
</FormControl> 
<Button
            onClick={(e)=>handleSubmit(e)}
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            {submitAction==='signup'?'Signup':'Signin'}
          </Button>
    </Flex>
 )
}

export default Form