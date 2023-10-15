import React, { useEffect, useState } from "react";
import Tasks from "../../../Components/tasks/Tasks";
import {
  Button,
  Flex,
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

function TasksPage({ profileData }) {
  console.log(profileData);
  async function AddTask() {
    const taskBody = {
      handymanId: profileData.id,
      title: "do it now ",
      taskStatus: "incoming",
      description: "help me please fast",
    };
    const headers = {
      Authorization: `Bearer ${profileData.token}`,
    };

    const addTask = await axios.post(
      `${process.env.REACT_APP_DATABASE_URL}/tasks`,
      taskBody,
      {
        headers: headers,
      }
    );
  }
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${profileData.token}`,
      };
      const response = await axios.get(
        `${`${process.env.REACT_APP_DATABASE_URL}`}/handytasks/${
          profileData.id
        }`,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        setTasks(response.data);
        const currentTasks = response.data.filter(
          (e) => e.taskStatus === "incoming"
        );
        setTasks(currentTasks);
        return currentTasks;
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
        { ...task, taskStatus: "current" },
        {
          headers: headers,
        }
      );
      console.log(setCurrent);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <TableContainer
    my={'8'}
    w={"80%"}>
      <Table variant="striped" colorScheme="teal">
        <Thead >
          <Tr >
            <Th fontSize={'2xl'}>Image</Th>
            <Th fontSize={'2xl'}>Title</Th>
            <Th fontSize={'2xl'}>Description</Th>
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
                      const newTasks=tasks.filter(task=>e.id!==task.id)
                      setTasks(newTasks);
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
      <Button onClick={() => AddTask()}>Add Task</Button>
    </TableContainer>
  );
}

export default TasksPage;
