import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { LoginContext } from "../hooks/Context/LoginProvider";
import formReducer, {
  initialState,
  checkAllValidation,
} from "../hooks/Reducers/FormReducer";
import { handymanExperties } from "../assets/constants";
function Form({ submitAction, userType }) {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [disableButton, setDisabledButton] = useState(true);
  const loginContext = useContext(LoginContext);
  function handleSubmit(e) {
    e.preventDefault();
    submitAction === "signup"
      ? loginContext.signup(formData, userType)
      : loginContext.login(formData.username, formData.password, userType);
  }
  useEffect(() => {
    setDisabledButton(!checkAllValidation(formData));
  }, [formData]);
  return (
    <Flex direction="column" w={"90%"}>
      {submitAction === "signup" ? (
        <FormControl isInvalid={!formData.isValidEmail}>
          <FormLabel>Email address</FormLabel>
          <Input
            value={formData.email}
            onChange={(e) =>
              dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
            }
            type="email"
          />
          <FormErrorMessage>Kindly Enter A Valid Email</FormErrorMessage>
        </FormControl>
      ) : null}
      <FormControl isRequired={'true'} isInvalid={!formData.isValidUsername}>
        <FormLabel>Username</FormLabel>
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE_USERNAME", payload: e.target.value })
          }
          type="text"
        />
        <FormErrorMessage>This Username Is Invalid </FormErrorMessage>
      </FormControl>
      {submitAction === "signup" ? (
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            onChange={(e) =>
              dispatch({ type: "CHANGE_NAME", payload: e.target.value })
            }
            type="text"
          />
        </FormControl>
      ) : null}
      <FormControl isInvalid={!formData.isValidPassword}>
        <FormLabel>Password</FormLabel>
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value })
          }
          type="password"
        />
        <FormErrorMessage>
          Password Must Be At least 8 letters and contains at least on symbo @!
        </FormErrorMessage>
      </FormControl>
      {submitAction==='signup'&&userType==='handyman'?
      <Flex direction={'column'} alignItems={'center'} h={'280px'} justifyContent={'center'}>
      <Text fontSize='4xl'>Tell Us What You Are Good At</Text>
      <Flex w={'100%'} h={'200px'} wrap={'wrap'} justifyContent={'space-between'} alignItems={'flex-start'}>
      {handymanExperties.map(experty=>{
        return(
          <Button
           w={'180px'} colorScheme={formData.experties.includes(experty.name)?'whatsapp':'whatsapp'} variant={formData.experties.includes(experty.name)?'solid':'outline'} h={'40px'} key={experty.name}
           onClick={(e)=>dispatch({type:'CHANGE_EXPERTIES',payload:experty.name})}
           >{experty.name}</Button>
          )
        })}
      </Flex>
        </Flex>
      :null}
      <Button
        onClick={(e) => handleSubmit(e)}
        mt={4}
        colorScheme="teal"
        type="submit"
        isDisabled={disableButton}
      >
        {submitAction === "signup" ? "Signup" : "Signin"}
      </Button>
    </Flex>
  );
}

export default Form;
