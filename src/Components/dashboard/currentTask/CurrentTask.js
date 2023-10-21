import React, { useContext, useEffect, useState } from "react";
import "./CurrentTask.scss";
import PaymentStepper from "./paymentStages/PaymentStepper";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
import axios from "axios";
import DetailsModale from "./DetailsModale";


function CurrentTask({
  onCurrentTask,
  paymentStatuses,
  task,
  filter,
  tasks,
  setCurrTask,
}) {

  const timestamp = task.schdualedAt; // we should make the timestamp a set state so the data stays
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");

  const formattedDate = `${year}/${month}/${day} ${hours}:00`;
  console.log(formattedDate);

  const paymentLabels = ["Payment 1", "Payment 2", "Payment 3"];
  const [taskKeys, settaskKeys] = useState([]);
  const [stage,setStage] = useState(0)

  const { loginData, socket } = useContext(LoginContext);

  async function handleSave() {
    if (task) {
      console.log(task, "task");
      try {
        const setCurrent = await axios.get(
          ` ${process.env.REACT_APP_DATABASE_URL}/task/${task.id}`
        );
        if (setCurrent.status === 200) {
          return setCurrent.data;
        }
      } catch (error) {
        return error;
      }
    }
  }
  
  socket.on("details",donePayload)
  function donePayload (payload){
    setCurrTask(payload)
  }
  paymentStatuses = true;
  
  function formatKey(key) {
    return key.replace(/([A-Z])/g, " $1").toUpperCase();
  }
  
  function arrivedOnTime() {
    socket.emit("arrived", task);
    
  }
  
  function doneWorking(){
    
    socket.emit('ontimeorless', task )
    

  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleSave();
      console.log(data, "kkkkkkkkkkkkkkkkkkkkkkkkk");
      if (data) {
        setCurrTask(data[0]);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <>
      <Center>
        <Box className="current-task-card">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Task Information
          </Text>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            {/* {data[0].map((key, index) => ( */}
            <GridItem colSpan={1}>
              <Box className="task-content">
                <VStack spacing={2}>
                  <Text className="task-title">Task Status: {task.taskStatus}</Text>
                  <Text>Client Name: {task.clientName}</Text>
                  <Text>Schdualed At: {formattedDate}</Text>

                </VStack>
              </Box>
            </GridItem>
            {/* ))} */}
          </Grid>
        </Box>

        <Flex justify="center" alignItems="center" mt={4}>
          <Box className={`circle-status ${arrivedOnTime ? "green" : "red"}`}>
            <Box className="circle"></Box>
          </Box>
        </Flex>
        <Flex direction="column" alignItems="center" mt={4}>
          <div className="button-container">
            <PaymentStepper indexs={stage} setIndex={setStage} arrivedOnTime={arrivedOnTime} doneWorking={doneWorking} socket = {socket} task = {task} />
            {/* Buttons */}
            {/* <Button
              className="task-button"
              bg="#007bff"
              color="#fff"
              border="2px"
              borderColor="#007bff"
              onClick={() => arrivedOnTime()}
            >
              Arrived
            </Button>
            <DetailsModale  socket = {socket} task = {task}/>
            <Button
              className="task-button"
              bg="#007bff"
              color="#fff"
              border="2px"
              borderColor="#007bff"
              onClick={()=> doneWorking()}
            >
             Done
            </Button>
          
            <Button
              className="task-button"
              bg="#007bff"
              color="#fff"
              border="2px"
              borderColor="#007bff"
            >
              Review of client
            </Button> */}
          </div>
        </Flex>
        <div className="payment-status">
          {/* Render payment statuses or labels as needed */}
        </div>
      </Center>
    </>
  );
}

export default CurrentTask;
