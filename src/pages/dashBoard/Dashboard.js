import React,{useEffect,useState,useReducer,useContext} from 'react'
import DashboardNavbar from "../../Components/dashboard/DashboardNavbar";
import axios from 'axios';
import Profile from '../../Components/dashboard/Profile';
import UpdateForm from './../../Components/dashboard/dashUpdate/UpdateForm'
import TaskCard1 from '../../Components/dashboard/TaskCard1';
import cookie from 'react-cookies';
import { Flex } from '@chakra-ui/react';
import formReducer,{initialState} from '../../hooks/Reducers/FormReducer';
import {LoginContext} from '../../hooks/Context/LoginProvider';
import Tasks from '../../pages/dashBoard/tasks/TasksPage'
function Dashboard() {
  let token =cookie.load('auth');
  const [updatedData,setUpdatedData]=useReducer(formReducer,initialState); 
  const [profileData,setProfileData]=useState({});
  const [showUpdateForm,setShowUpdateForm]=useState(false);
  const [showTasks, setShowTasks]=useState(true);
  const loginContext = useContext(LoginContext);
  async function gettingProfile() {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(`${`${process.env.REACT_APP_DATABASE_URL}`}/dashboard`, {
        headers: headers,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Failed to fetch data');
        return null;
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
  async function handleUpdate(){
    console.log(updatedData);
    const responseUpdated=await loginContext.updateData(updatedData,token);
    console.log(responseUpdated);
  }
  useEffect(() => {
    async function fetchData() {
      const data = await gettingProfile();
      // const experties=await getExperties(data.id);
      // console.log(experties)
      setUpdatedData({type:'CHANGE_ALL',payload:data});
      setProfileData(data);
    }
    fetchData();
  }, []);
return(
  <Flex w={'100%'} minH={'100vh'} h={'100vh'}>
    <DashboardNavbar setShowTasks={setShowTasks} setShowUpdateForm={setShowUpdateForm} profilePicUrl={profileData.profilePicUrl}/>
    <Profile showTasks={showTasks} setShowUpdateForm={setShowUpdateForm}  showUpdateForm={showUpdateForm} profileData={profileData}/>
    {showUpdateForm&&<UpdateForm handleUpdate={handleUpdate} updatedData={updatedData} setUpdatedData={setUpdatedData} profileData={profileData} showUpdateForm={showUpdateForm} setProfileData={setProfileData} setShowUpdateForm={setShowUpdateForm}/>}
    {showTasks&&<Tasks profileData={profileData}/>}
  </Flex>
)

}
export default Dashboard;