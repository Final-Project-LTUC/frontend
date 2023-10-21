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
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { LoginContext } from "../../../hooks/Context/LoginProvider";
import "./table.scss";
import { useNavigate } from "react-router-dom";
import CurrentTask from "../../../Components/dashboard/currentTask/CurrentTask";
import Calander from "../../../Components/Calander";

function TasksPage({ profileData, getTasks, setTasks, tasks }) {
  const { loginData, socket } = useContext(LoginContext);

  const initialRef = React.useRef(null);
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [schdualedAt, setSchdualedAt] = useState("");
  const [currTask, setCurrTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [payload, setPayload] = useState("");
  const [toggleTask, toggleCurrentTask] = useState(false);
  socket.on("transaction", inquiryDateFun);
  console.log(schdualedAt, "schdualedAtttttttttttttttttttttt");

  function inquiryDateFun(payload) {
    let data = tasks.filter((item) => {
      if (item.id === payload.id) {
        return item;
      }
      return null;
    });
    setCurrTask(data[0]);
  }

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSchdualedAt("");
  };
  function currentTask() {
    toggleCurrentTask(true);
    setFilter("current");
  }

  useEffect(() => {
    getTasks();
  }, [filter, currTask]);

  socket.on("client-recived", (payload) => {
    setPayload(payload);
    payload.handyData.schdualedAt = schdualedAt;
    const uTasks = [...tasks, payload.handyData];
    setTasks(uTasks);
  });

  function setFilterToAll() {
    setFilter("all");
    toggleCurrentTask(false);
  }

  function setFilterToDone() {
    setFilter("done");
    toggleCurrentTask(false);
  }
  function setFilterToCancelled() {
    setFilter("canceled");
    toggleCurrentTask(false);
  }
  function setFilterToIncoming() {
    setFilter("incoming");
    toggleCurrentTask(false);
  }

  async function handleSave(schdualedAt) {
    const schadul = JSON.parse(schdualedAt);

    if (currTask) {
      try {
        const setCurrent = await axios.patch(
          ` ${process.env.REACT_APP_DATABASE_URL}/taskshandy/${currTask.id}`,

          { schdualedAt: schadul }
        );
        if (setCurrent.status === 200) {
          toggleCurrentTask(true);
          handleModalClose();
          //  payload.schdualedAt=schadul
          //  const temp = payload.reciverId;
          //  payload.reciverId = payload.senderId;
          //  payload.senderId = temp;
          socket.emit("schedualeAndpayment", setCurrent.data.task);

          return setCurrent.data;
        }
      } catch (error) {
        return error;
      }

      navigate("/");
    }
  }

  const setCurrentTask = async (data) => {
    setCurrTask(data);
  };

  return (
    <>
      <Table className="custom-table">
        <Flex mb={8} justifyContent={"space-around"} padding={10}>
          <Button
            colorScheme="teal"
            variant={filter === "incoming" ? "solid" : "outline"}
            onClick={setFilterToIncoming}
          >
            Incoming
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "current" ? "solid" : "outline"}
            onClick={() => currentTask()}
          >
            Current
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "done" ? "solid" : "outline"}
            onClick={setFilterToDone}
          >
            Done
          </Button>
          <Button
            colorScheme="teal"
            variant={filter === "canceled" ? "solid" : "outline"}
            onClick={setFilterToCancelled}
          >
            Cancelled
          </Button>
          {/* <Button
            colorScheme="teal"
            variant={filter === "all" ? "solid" : "outline"}
            onClick={setFilterToAll}
          >
            All
          </Button> */}
        </Flex>
        {toggleTask ? (
          <>
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
                            {task.description
                              ? task.description.length > 200
                                ? task.description.slice(0, 200).concat("...")
                                : task.description
                              : "-"}
                          </Td>
                          <Td>{task.createdAt}</Td>
                          <Td>{task.phoneNumber || "-"}</Td>
                          <Td>{task.city || "-"}</Td>
                          <Td>
                            {Number.isInteger(Number(profileData.id)) ||
                            filter === "done" ||
                            filter === "canceled" ? (
                              <Button
                                colorScheme="teal"
                                onClick={() => {
                                  setCurrentTask(task);
                                  handleModalOpen();
                                }}
                              >
                                preview
                              </Button>
                            ) : (
                              <Button
                                colorScheme="teal"
                                onClick={() => {
                                  setCurrentTask(task);
                                  handleModalOpen();
                                }}
                              >
                                Take Now
                              </Button>
                            )}
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
            { filter === "current" &&
              <CurrentTask
                task={currTask}
                filter={filter}
                tasks={tasks}
                setCurrTask={setCurrTask}
                onCurrentTask={currentTask}
              />
            }
          </>
        ) : (
          <>
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
                            {task.description
                              ? task.description.length > 200
                                ? task.description.slice(0, 200).concat("...")
                                : task.description
                              : "-"}
                          </Td>
                          <Td>{task.createdAt}</Td>
                          <Td>{task.phoneNumber || "-"}</Td>
                          <Td>{task.city || "-"}</Td>
                          <Td>
                            {Number.isInteger(Number(profileData.id)) ||
                            filter === "done" ||
                            filter === "canceled" ? (
                              <Button
                                colorScheme="teal"
                                onClick={() => {
                                  setCurrentTask(task);
                                  handleModalOpen();
                                }}
                              >
                                preview
                              </Button>
                            ) : (
                              <Button
                                colorScheme="teal"
                                onClick={() => {
                                  setCurrentTask(task);
                                  handleModalOpen();
                                }}
                              >
                                Take Now
                              </Button>
                            )}
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
          </>
        )}
      </Table>

      {Number.isInteger(Number(profileData.id)) ||
      filter === "done" ||
      filter === "canceled" ? (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
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
      ) : (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Take the task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <FormControl>
                <FormLabel>Schdualed At</FormLabel> */}
              <Calander setSchdualedAt={setSchdualedAt} />
              {/* <Input
                  ref={initialRef}
                  placeholder="Tell me what I can help you with..."
                  value={schdualedAt}
                  onChange={(e) => setSchdualedAt(e.target.value)}
                  required
                /> */}
              {/* </FormControl> */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
                Close
              </Button>
              <Button
                colorScheme="teal"
                onClick={() => handleSave(schdualedAt)}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default TasksPage;
