import React, { useContext, useEffect, useState } from "react";
import {
  Button,
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
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Flex
} from "@chakra-ui/react";
import axios from "axios";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
import "./table.scss";

function TasksPage({profileData,getTasks,setTasks,tasks }) {
  const initialRef = React.useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [schdualedAt, setSchdualedAt] = useState("");
  const [currTask, setCurrTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { loginData, socket } = useContext(LoginContext);
  const [payload, setPayload] = useState("");

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSchdualedAt("");
  };


  useEffect(() => {
    getTasks();
  }, [filter]);

  socket.on("client-recived", (payload) => {
    setPayload(payload);
    payload.handyData.schdualedAt = schdualedAt;
    const uTasks = [...tasks, payload.handyData];
    setTasks(uTasks);
  });

  

  async function handleSave (schdualedAt){

    const schadul = JSON.parse(schdualedAt)
    console.log("set current schdualedAt:::::::::::::::::: ",schadul)
  
     if(currTask)  {
           console.log("set current schdualedAt:::::::::::::::::: ",schadul)
      try {
      const headers = {
        Authorization: `Bearer ${profileData.token}`,
      };
  
      const setCurrent = await axios.patch(
       ` ${process.env.REACT_APP_DATABASE_URL}/taskshandy/${currTask.id}`,
  
        { taskStatus: "current" , schdualedAt: schadul},
        {
          headers: headers,
        }
      );
      if (setCurrent.status === 200) {
       handleModalClose()
      //  payload.schdualedAt=schadul
      //  const temp = payload.reciverId;
      //  payload.reciverId = payload.senderId;
      //  payload.senderId = temp;
       console.log(setCurrent.data.task,"data changed here")
       socket.emit("schedualeAndpayment",setCurrent.data.task)
  
        return setCurrent.data;
      } } catch (error) {
        return error;
      }
  
  
  }}

  const setCurrentTask = async (data) => {
    console.log(data,"assssssssssssssssr")
    setCurrTask(data);
  };

  return (
    <>
      <Table className="custom-table">
        <Flex mb={8} justifyContent={"space-around"} padding={10}>
          <Button
            colorScheme="teal"
            variant={filter === "all" ? "solid" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "current" ? "solid" : "outline"}
            onClick={() => setFilter("current")}
          >
            Current
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "done" ? "solid" : "outline"}
            onClick={() => setFilter("done")}
          >
            Done
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "incoming" ? "solid" : "outline"}
            onClick={() => setFilter("incoming")}
          >
            Incoming
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "cancelled" ? "solid" : "outline"}
            onClick={() => setFilter("cancelled")}
          >
            Cancelled
          </Button>
        </Flex>
        <TableContainer
          className="custom-table-container"
          my={"8"}
          w={"100%"}
          overflowY={"auto"}
          maxH={"80vh"}
        >



<Table variant="simple">
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th>Created At</Th>
        <Th>Phone Number</Th>
        <Th>City</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody className="custom-tbody">
      {tasks.length > 0 ? (
        tasks
          .filter((task) => {
            if (filter === "all") {
              return true;
            }
            return task.taskStatus === filter;
          })
          .map((task, index) => (
            <Tr key={index}>
              <Td>
                <img
                  alt={task.title}
                  src={task.imageUrl}
                  width={60}
                  height={60}
                  style={{ borderRadius: "10px" }}
                />
              </Td>
              <Td>{task.title}</Td>
              <Td>
                {task.description ? (
                  task.description.length > 200
                    ? task.description.slice(0, 200).concat("...")
                    : task.description
                ) : (
                  "-"
                )}
              </Td>
              <Td>{task.createdAt}</Td>
              <Td>{task.phoneNumber || "-"}</Td>
              <Td>{task.city || "-"}</Td>
              <Td>
                {Number.isInteger(Number(profileData.id))?<Button
                  colorScheme="teal"
                  onClick={() => {
                    setCurrentTask(task);
                    handleModalOpen();
                  }}
                >
                  preview
                </Button>:<Button
                  colorScheme="teal"
                  onClick={() => {
                    setCurrentTask(task);
                    handleModalOpen();
                  }}
                >
                  Take Now
                </Button>}
              </Td>
            </Tr>
          ))
      ) : (
        <Tr>
          <Td colSpan={7} className="no-data">
            No tasks available.
          </Td>
        </Tr>
      )}
    </Tbody>
  </Table>
        </TableContainer>

      </Table>

      { Number.isInteger(Number(profileData.id))? <Modal isOpen={isModalOpen} onClose={handleModalClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Preview the task</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Text>{currTask.title}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Text>{currTask.description}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Date of Request</FormLabel>
        <Text>{currTask.dateOfReq}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Interval</FormLabel>
        <Text>{currTask.interval}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Task Status</FormLabel>
        <Text>{currTask.taskStatus}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Created At</FormLabel>
        <Text>{currTask.createdAt}</Text>
      </FormControl>
      <FormControl>
        <FormLabel>Updated At</FormLabel>
        <Text>{currTask.updatedAt}</Text>
      </FormControl>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
        Close
      </Button>
     
    </ModalFooter>
  </ModalContent>
</Modal>
:<Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Take the task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Schdualed At</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Tell me what I can help you with..."
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
            <Button colorScheme="teal" onClick={() => handleSave(schdualedAt)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>}
      
    </>
  );
}

export default TasksPage;
