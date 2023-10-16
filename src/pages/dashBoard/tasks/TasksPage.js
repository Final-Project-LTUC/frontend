import React, { useContext, useEffect, useState } from "react";
import Tasks from "../../../Components/tasks/Tasks";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { LoginContext } from "../../../hooks/Context/LoginProvider";

function TasksPage({ profileData }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [payment, setPayment] = useState("");
  const [schdualedAt, setSchdualedAt] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  console.log(profileData, "ggggggggggg");
  const { loginData, socket } = useContext(LoginContext);

  useEffect(() => {
    if (isModalOpen) {
      setPayment("");
      setSchdualedAt("");
      titleRef.current?.focus();
    }
  }, [isModalOpen]);

  // const handymanId = profileData.id;
  // const clientId = tasks.clientId;
  // const requestData = {
   
  //   taskStatus: "current",
  // };
  // socket.connect();

  // socket.emit("pickHandyman", {
  //   handyData: requestData,
  //   senderId: handymanId,
  //   reciverId: clientId,
  // });

  // const handyData = {

  // }
  //   handyData.payment = 20  // payload here should be for each client and should be dynamic
  //   handyData.schdualedAt = dateOfReq.getTime()+ 2000;
  //   const temp = reciverId;
  //   reciverId = senderId;
  //   senderId = temp;

  //   socket.emit('schedualeAndpayment', payload) //step 2

  const encodedId = encodeURIComponent(profileData.id);
  console.log("uuid decorder", encodedId);
  console.log(profileData, "SSSSSsssssssssssss");

  console.log(tasks, "rrrrrrrrrrrrrrrrr");
  const getTasks = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${profileData.token}`,
      };
      const response = await axios.get(
        `${`${process.env.REACT_APP_DATABASE_URL}`}/handytasks/${encodedId}`,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        setTasks(response.data);
        return response.data;
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return error;
    }
  };
  const setCurrentTask = async (task) => {
    try {
      const headers = {
        Authorization: `Bearer ${profileData.token}`,
      };

      const setCurrent = await axios.patch(
        `${process.env.REACT_APP_DATABASE_URL}/tasks`,
        { taskStatus: "current" },
        {
          headers: headers,
        }
      );
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <TableContainer my={"8"} w={"80%"}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th fontSize={"2xl"}>Image</Th>
              <Th fontSize={"2xl"}>Title</Th>
              <Th fontSize={"2xl"}>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((e, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <img
                      alt={e.title}
                      src={e.imageUrl}
                      width={60}
                      height={60}
                      style={{ borderRadius: "10px" }}
                    />
                  </Td>
                  <Td>{e.title}</Td>
                  <Td>
                    {e.description?.length > 200
                      ? e?.description.slice(0, 200).concat("...")
                      : e?.description}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        setCurrentTask(e);
                        const newTasks = tasks.filter(
                          (task) => e.id !== task.id
                        );
                        setTasks(newTasks);
                        handleModalOpen();
                      }}
                    >
                      Take Now
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take the task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Payment</FormLabel>
              <Input
                ref={initialRef}
                placeholder={"tell me what I can help you with..."}
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Schdualed At</FormLabel>
              <Input
                ref={initialRef}
                placeholder={"tell me what I can help you with..."}
                value={schdualedAt}
                onChange={(e) => setSchdualedAt(e.target.value)}
                required
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
              Close
            </Button>
            <Button colorScheme="teal">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TasksPage;
