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

  const [isModalOpen, setModalOpen] = useState(false);
  const [schdualedAt, setSchdualedAt] = useState("");
  const [currTask,setCurrTask]= useState("")
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSchdualedAt("");
    };
  const encodedId = encodeURIComponent(profileData.id);
  // console.log("uuid decorder",encodedId)
  // console.log(profileData,"SSSSSsssssssssssss")
  const [tasks, setTasks] = useState([]);
  const { loginData, socket } = useContext(LoginContext);
  const [payload,setPayload] = useState("")


  useEffect(() => {
    getTasks();
  }, []);
  socket.on('client-recived',(payload)=> {
  //  console.log(payload,"payload foooooooooor sockets")
  setPayload(payload)
  payload.handyData.schdualedAt=schdualedAt
   const uTasks =[...tasks,payload.handyData]
   console.log(uTasks,"socket tasks")
   setTasks(uTasks)
  })

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
      `${process.env.REACT_APP_DATABASE_URL}/taskshandy/${currTask.id}`,
      
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
  setCurrTask(data)
  // const encodedId = encodeURIComponent(data.id);
  // try {
  //   const headers = {
  //     Authorization: `Bearer ${profileData.token}`,
  //   };

  //   const setCurrent = await axios.patch(
  //     `${process.env.REACT_APP_DATABASE_URL}/taskshandy/${encodedId}`,
  //     { taskStatus: "current" },
  //     {
  //       headers: headers,
  //     }
  //   );
  //   if (setCurrent.status === 200) {


  //     return setCurrent.data;
  //   }
    
  // } catch (error) {
  //   return error;
  // }
};

  return (
    <>
      <TableContainer my={"8"} w={"80%"}   overflowY={"auto"}
    maxH={"60vh"}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th fontSize={"2xl"}>Image</Th>
              <Th fontSize={"2xl"}>Title</Th>
              <Th fontSize={"2xl"}>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.length > 0 && tasks.map((e, index) => {
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
                        // const newTasks = tasks.filter(
                        //   (task) => e.id !== task.id
                        // );
                        // setTasks(newTasks);
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
            <Button colorScheme="teal"onClick={()=>handleSave(schdualedAt)}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TasksPage;
