import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Select,
  Flex,
} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import FilterSidebar from "../../../Components/ServicesPage/FilterSideBar";
import axios from "axios"
import Handymen from "../../../Components/ServicesPage/Handymen"; 
import categories from "./constant"
import cookie from 'react-cookies';
  let token1 =cookie.load('auth'); 
 function Services() {
  const [handyData, setHandyData] = useState(null); // Initialize handyData state
  const [expertydata, setExpertyData] = useState(null); // Initialize handyData state
  const [newDatacat,setNewData] = useState(null);

  async function getData (){
  try {
    const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen`);
    return response.data

  } catch (error) {
        console.error("Error fetching data:", error);
    //     // Handle the error
    //   }
    // ...
  }
}
  async function getDataExperty (id){
  try {
    const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen/genre/${id}`);
    return response.data

  } catch (error) {
        console.error("Error fetching data:", error);
    //     // Handle the error
    //   }
    // ...
  }
}




const [selectedLocation, setSelectedLocation] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");

function findMatchingIds(apiResponse, arrayOfObjects) {
  // Extract all IDs from the API response
  const apiIds = apiResponse.map((item) => item.HandymanId);

  // Find matching objects in the array of objects
  const matchingObjects = arrayOfObjects.filter((obj) => apiIds.includes(obj.id));

  return matchingObjects;
}





const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);

    // Find the ID corresponding to the selected category name
    const selectedCategoryObject = categories.find((category) => category.name === categoryName);

    if (selectedCategoryObject) {
      setSelectedCategory(selectedCategoryObject.id);
    } else {
      // Handle the case where the category is not found
      setSelectedCategory(""); // You can set a default value or an error message as needed.
    }
  };

  console.log("usestate",selectedLocation,selectedCategory)
  useEffect( ()=>{
  
      
      async function fetchData() {
        const data = await getData();
        setHandyData(data);
        const expertyID = await getDataExperty(selectedCategory);
        console.log("handydata  ", expertyID);
    if(expertyID){
      const newData = await findMatchingIds(expertyID, handyData) 
      setNewData(newData)
    } 
       
       
      }
  
      fetchData(); // Call the fetchData function when the component mounts
   
  
   },[selectedCategory]);




  return (
    <Box p={4} bgColor="white.100" width={"100%"} height={"100%"}>
<Flex justifyContent="flex-start" flexDirection="row">
    <Box p={4} bgColor="white.100" width={"30%"} height={"220"}>


        <FilterSidebar
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
        onLocationChange={handleLocationChange}
        onCategoryChange={handleCategoryChange}
        />


    </Box>
    <Box>

      <Handymen handyData ={newDatacat?newDatacat:handyData} token={token1} />
    </Box>
        </Flex>
    </Box>
  );
}

export default Services;
