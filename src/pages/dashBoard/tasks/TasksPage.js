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
        {  taskStatus: "current" },
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
    </TableContainer>
  );
}

export default TasksPage;
