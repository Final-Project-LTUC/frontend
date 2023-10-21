import React, { useEffect, useState, useReducer, useContext } from "react";
import DashboardNavbar from "../../Components/dashboard/DashboardNavbar";
import axios from "axios";
import Profile from "../../Components/dashboard/Profile";
import UpdateForm from "./../../Components/dashboard/dashUpdate/UpdateForm";
import cookie from "react-cookies";
import { Flex, Box } from "@chakra-ui/react";
import formReducer, { initialState } from "../../hooks/Reducers/FormReducer";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import Tasks from "../../pages/dashBoard/tasks/TasksPage";
import jwt_decode from "jwt-decode";
import Loader from "../../Components/Loader/Loader";
import Earnings from "./earnings/Earnings";
import BellComponent from "../../Components/icons/BellComponent";
import Calander from "../../Components/Calander";
const pages = ["profile", "updateData", "tasks", "earnings"];
function Dashboard() {
  let token = cookie.load("auth");
  const validUser = jwt_decode(token);
  const [updatedData, setUpdatedData] = useReducer(formReducer, initialState);
  const [showNum, setShowNum] = useState(0);
  const [showPage, setShowPage] = useState(pages[showNum]);
  const [profileData, setProfileData] = useState({});
  const [loadded, setLoadded] = useState(false);
  const loginContext = useContext(LoginContext);
  const [tasks, setTasks] = useState([]);
  async function gettingProfile() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        `${`${process.env.REACT_APP_DATABASE_URL}`}/dashboard`,
        {
          headers: headers,
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error("Failed to fetch data");
        return null;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  }
  // async function getExperties(id){
  //   try {
  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //     };
  //     const response = await axios.get(`${`${process.env.REACT_APP_DATABASE_URL}`}/experties/all/${id}`, {
  //       headers: headers,
  //     });

  //     if (response.status === 200) {
  //       return response.data;
  //     } else {
  //       console.error('Failed to fetch data');
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     return null;
  //   }
  // }

  const getTasks = async () => {
    const encodedId = encodeURIComponent(profileData.id);
    try {
      const headers = {
        Authorization: `Bearer ${profileData.token}`,
      };

      let response;

      if (Number.isInteger(Number(profileData.id))) {
        response = await axios.get(
          `${process.env.REACT_APP_DATABASE_URL}/clienttasks/${profileData.id}`,
          {
            headers: headers,
          }
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_DATABASE_URL}/handytasks/${encodedId}`,
          {
            headers: headers,
          }
        );
      }

      if (response.status === 200) {
        setTasks(response.data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  async function handleUpdate() {
    const responseUpdated = await loginContext.updateData(
      { ...updatedData, languages: updatedData.languages.join(",") },
      token
    );
    setProfileData(responseUpdated);
  }
  useEffect(() => {
    async function fetchData() {
      const data = await gettingProfile();
      // const experties=await getExperties(data.id);
      // console.log(experties)
      setUpdatedData({ type: "CHANGE_ALL", payload: data });
      setProfileData(data);
      setLoadded(true);
    }
    fetchData();
    getTasks();
    setShowPage(pages[showNum]);
  }, [showNum]);
  return (
    <Flex w={"100%"} minH={"100vh"} h={"100vh"}>
      {console.log(showPage)}
      <DashboardNavbar
        token={validUser}
        setShowNum={setShowNum}
        profilePicUrl={profileData.profilePicUrl}

      />
      {loadded ? (
        <Flex w={"80%"} ml={"4"} mt={12}>
          <Profile
            token={token}
            showPage={showPage}
            setShowNum={setShowNum}
            profileData={profileData}
          />
          {showPage === "updateData" && (
            <UpdateForm
              token={validUser}
              handleUpdate={handleUpdate}
              updatedData={updatedData}
              setShowNum={setShowNum}
              setUpdatedData={setUpdatedData}
              profileData={profileData}
              showPage={showPage}
              setProfileData={setProfileData}
              
            />
          )}
          {showPage === "tasks" && (
            <Tasks
              getTasks={getTasks}
              showPage={showPage}
              setTasks={setTasks}
              tasks={tasks}
              profileData={profileData}
            />
          )}
        </Flex>
      ) : (
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          w={"50vw"}
          m={"auto"}
          height={"80vh"}
        >
          <Loader />
        </Flex>
      )}
      {/* <BellComponent
        style={{ position: "absolute", top: 500, right: 500, bg: "black" }}
      /> */}
      {/* <Earnings tasks={tasks}/> */}
      {/* <Calander/> */}
     
    </Flex>
  );
}
export default Dashboard;
