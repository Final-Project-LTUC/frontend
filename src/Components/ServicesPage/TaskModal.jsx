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
} from "@chakra-ui/react";
import axios from "axios";

import React, { useContext, useState } from "react";
import { LoginContext } from "../../hooks/Context/LoginProvider";

function TaskModal({ data, index, token }) {
  const { loginData, socket } = useContext(LoginContext);
  console.log("contexxxxttttttt", loginData.user.id);

  const { onClose, isOpen, onOpen } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const handleSave = (token) => {
    console.log("Save button clicked!");
    setIsSaveClicked(true); 
    onClose()

    
    const handymanId = data[index].id;
    console.log(handymanId);
    const clientId = loginData.user.id;

    const requestData = {
      title,
      description,
      clientId,
      handymanId,
    };
    
    socket.emit('pickHandyman', {
      handyData:requestData,
      senderId: clientId,
      reciverId:handymanId ,
    });

    axios
      .post(`${process.env.REACT_APP_DATABASE_URL}/tasks`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Post request successful:yyyyyyyyyy", response);
      })
      .catch((error) => {
        console.error("Error in post request:", error);
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
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
            <Button colorScheme="blue" mr={3} onClick={() => handleSave(token)}>
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
