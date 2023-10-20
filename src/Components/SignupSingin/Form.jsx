import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    InputGroup, // Add InputGroup import
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import { checkAllValidation } from "../../hooks/Reducers/FormReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./style.css";
function Form({
    submitAction,
    userType,
    currentPage,
    setPageNum,
    dispatch,
    formData,
}) {
    const [disableButton, setDisabledButton] = useState(true);
    const loginContext = useContext(LoginContext);
    const toast = useToast();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response =
                submitAction === "signup"
                    ? await loginContext.signup(formData, userType)
                    : await loginContext.login(
                          formData.username,
                          formData.password,
                          userType
                      );

            if (submitAction === "signup" && response.status === 200) {
                if (userType === "handymen") setPageNum((prev) => ++prev);
                else setPageNum((prev) => prev + 2);

                toast({
                    title: "Welcome To Skillify",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else if (submitAction === "signin" && response.status === 200) {
                toast({
                    title: `Welcome Back ${response.data.username}`,
                    description: "Have a wonderful day",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                navigate("/");
            } else {
                throw new Error(response.response.data.message);
            }
        } catch (e) {
            toast({
                title: `Something Went Wrong`,
                description: e.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    useEffect(() => {
        setDisabledButton(!checkAllValidation(formData));
    }, [formData]);

    return (
        <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Box
                w="100%"
                maxWidth="450px"
                p="1em"
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
            >
                <Heading as="h2" size="lg" textAlign="center" mb="1em">
                    {submitAction === "signup"
                        ? "Welcome To Skillify"
                        : "Welcome Back"}
                </Heading>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {submitAction === "signup" && (
                        <FormControl
                            isInvalid={!formData.isValidEmail}
                            mb="1em"
                        >
                            <FormLabel>Email address</FormLabel>
                            <Input
                                value={formData.email}
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_EMAIL",
                                        payload: e.target.value,
                                    })
                                }
                                type="email"
                            />
                            <FormErrorMessage>
                                Kindly Enter A Valid Email
                            </FormErrorMessage>
                        </FormControl>
                    )}
                    <FormControl
                        isRequired={true}
                        isInvalid={!formData.isValidUsername}
                        mb="1em"
                    >
                        <FormLabel>Username</FormLabel>
                        <Input
                            onChange={(e) =>
                                dispatch({
                                    type: "CHANGE_USERNAME",
                                    payload: e.target.value,
                                })
                            }
                            value={formData.username}
                            type="text"
                        />
                        <FormErrorMessage>
                            This Username Is Invalid
                        </FormErrorMessage>
                    </FormControl>
                    {submitAction === "signup" && (
                        <FormControl mb="1em">
                            <FormLabel>Full Name</FormLabel>
                            <Input
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_NAME",
                                        payload: e.target.value,
                                    })
                                }
                                value={formData.name}
                                type="text"
                            />
                        </FormControl>
                    )}
                    <FormControl isInvalid={!formData.isValidPassword} mb="1em">
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            {" "}
                            {/* Wrap Input and InputRightElement in InputGroup */}
                            <Input
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_PASSWORD",
                                        payload: e.target.value,
                                    })
                                }
                                type={showPassword ? "text" : "password"} // Toggle input type
                                value={formData.password}
                            />
                            <InputRightElement h={"full"}>
                                <Button
                                    variant={"ghost"}
                                    onClick={() =>
                                        setShowPassword(
                                            (showPassword) => !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <ViewIcon />
                                    ) : (
                                        <ViewOffIcon />
                                    )}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                            Password Must Be At least 8 letters and contains at
                            least one symbol @!
                        </FormErrorMessage>
                    </FormControl>
                    {submitAction === "signin" && (
                        <Link
                            to="/ForgotPassword"
                            className="forgot-password-link"
                            style={{ color: "blue" }}
                        >
                            Forgot Password ?
                        </Link>
                    )}

                    <Button
                        w="100%"
                        mt="1em"
                        colorScheme="teal"
                        type="submit"
                        isDisabled={disableButton}
                    >
                        {submitAction === "signup" ? "Signup" : "Signin"}
                    </Button>
                    {submitAction === "signin" && (
                        <Flex justify="center" mt="1em">
                            Don't have an account?{" "}
                            <Link to="/signup" className="signup-link">
                                Register
                            </Link>
                        </Flex>
                    )}
                </form>
            </Box>
        </Flex>
    );
}

export default Form;
