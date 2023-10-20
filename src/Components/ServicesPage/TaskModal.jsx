import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../hooks/Context/LoginProvider";

function TaskModal({ data, index, token }) {
  
  const { loginData, socket } = useContext(LoginContext);
  console.log("tokeeeeeeeeen", token);

  const { onClose, isOpen, onOpen } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
      titleRef.current?.focus();
    }
  }, [isOpen]);

  const handleSave = (token) => {
    setIsSaveClicked(true);
    onClose();

    if (!title || !description) {
      toast({
        title: "Fields Required",
        description: "Both title and description are required.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const handymanId = data[index].id;
    const clientId = loginData.user.id;
    const requestData = {
      title,
      description,
      clientId,
      handymanId,
      taskStatus: "incoming",
      dateOfReq: Date.now(),
    };
    // socket.connect()

    socket.emit("pickHandyman", {
      handyData: requestData,
      senderId: clientId,
      reciverId: handymanId,
    });

    axios
      .post(`${process.env.REACT_APP_DATABASE_URL}/tasks`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Post request successful:", response.data);
        toast({
          title: `${loginData.user.username}`,
          description: "Your request has been successfully sent",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error in post request:", error);
        toast({
          title: `Something Went Wrong`,
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <>
       <Button
        onClick={onOpen}
        colorScheme="gray.100" // Set the color scheme to "gray"
        variant="outline" // Use the "outline" variant
        size="sm"
        borderRadius="lg"
        fontSize="sm"
        fontWeight="bold"
        backgroundColor="gray.200"
        _hover={{
          bg: "teal.400",
          color: "White",
        }}
      >
        Ask for a Task
      </Button>

      <Modal
        initialFocusRef={titleRef}
        finalFocusRef={descriptionRef}
        isOpen={isOpen}
        onClose={() => {
          setTitle("");
          setDescription("");
          onClose();
        }}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="lg"
          boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
          bg="white"
          color="teal.900"
          maxW="480px"
        >
          <ModalHeader
            fontSize="3xl"
            fontWeight="bold"
            bg="teal.500"
            color="white"
            p={4}
            textAlign="center"
          >
            Start a Task
          </ModalHeader>
          <ModalCloseButton color="teal.500" _hover={{ color: "teal.600" }} />
          <ModalBody p={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={titleRef}
                placeholder="Tell me what I can help you with..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fontSize="lg"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                ref={descriptionRef}
                placeholder="Please explain the problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fontSize="lg"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button
              colorScheme="teal"
              fontSize="lg"
              fontWeight="bold"
              px="8"
              py="4"
              onClick={() => handleSave(token)}
              isDisabled={!title || !description}
              _hover={{
                bg: "teal.600",
              }}
            >
              Save
            </Button>
            <Button
              onClick={onClose}
              fontSize="lg"
              fontWeight="bold"
              px="8"
              py="4"
              variant="outline"
              _hover={{
                bg: "transparent",
                color: "teal.600",
              }}
              ml={"5px"}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TaskModal;













