import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    // Function to send a password reset request to the backend
    const handleResetPassword = async () => {
        try {
            // Send a POST request to your backend with the user's email
            const response = await axios.post(
                "http://localhost:5000/forgot-password",
                {
                    email,
                }
            );

            // Check the response for success or error
            if (response.status === 200) {
                setEmailSent(true);
            } else {
                // Handle any error response from the backend
                console.error(
                    "Password reset request failed:",
                    response.data.message
                );
            }
        } catch (error) {
            // Handle any network or request errors
            console.error(
                "An error occurred while sending the request:",
                error
            );
        }
    };

    return (
        <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            height="80vh"
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
                    {"Reset Password"}
                </Heading>
                <FormControl mb="1em">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <Button
                    w="100%"
                    mt="1em"
                    colorScheme="teal"
                    onClick={handleResetPassword} // Trigger the password reset request
                >
                    Reset Password
                </Button>
                {emailSent && (
                    <Box mt="1em" color="green">
                        An email with instructions has been sent to your email
                        address.
                    </Box>
                )}
                <Box mt="1em" className="forgot-password-link">
                    {/* <Link to="/signin">Back to Sign In</Link> */}
                </Box>
            </Box>
        </Flex>
    );
}

export default ForgotPassword;
