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
  // console.log("tokeeeeeeeeen", token);

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
      <Button onClick={onOpen}>Open Modal</Button>

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
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder={"tell me what I can help you with..."}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                ref={initialRef}
                placeholder={"please explain the problem"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleSave(token)}
              isDisabled={!title || !description}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TaskModal;
