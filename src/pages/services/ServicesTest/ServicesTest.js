import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react"; // Imported only necessary components
import FilterSidebar from "../../../Components/ServicesPage/FilterSideBar";
import axios from "axios";
import Handymen from "../../../Components/ServicesPage/Handymen";
import categories from "./constant";
import cookie from "react-cookies";

function Services() {
  const [handyData, setHandyData] = useState(null);
  const [newDatacat, setNewData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Load the token directly without using a global variable
  const token1 = cookie.load("auth");

  async function getData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen`);
      setHandyData(response.data); // Set the state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function getDataExperty(id) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen/genre/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function findMatchingIds(apiResponse, arrayOfObjects) {
    const apiIds = apiResponse.map((item) => item.HandymanId);
    const matchingObjects = arrayOfObjects.filter((obj) => apiIds.includes(obj.id));
    return matchingObjects;
  }

  function findCity(location, arrayOfObjects) {
    console.log('city and object',location,arrayOfObjects)
 
      if (!location) {
        return arrayOfObjects; // Return all data if no location is selected
      }
    
      const matchingObjects = arrayOfObjects.filter((obj) => obj.city === location);
      return matchingObjects;
    }


  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);

    const selectedCategoryObject = categories.find((category) => category.name === categoryName);
    if (selectedCategoryObject) {
      setSelectedCategory(selectedCategoryObject.id);
    } else {
      setSelectedCategory("");
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getData();
      const expertyID = await getDataExperty(selectedCategory);
      console.log(selectedLocation,'set location cosnoile')

      if (expertyID && selectedLocation) {
        const newData = findMatchingIds(expertyID, handyData);
        const handyInCity = findCity(selectedLocation, newData);
        setNewData(handyInCity);
      } else if (expertyID) {
        const newData = findMatchingIds(expertyID, handyData);
        setNewData(newData);
      } else if (selectedLocation) {
        const handyInCity = findCity(selectedLocation, handyData);
        setNewData(handyInCity);
      }
    }

    fetchData();
  }, [selectedCategory,selectedLocation]);

  return (
    <Box p={4} bgColor="white.100" width={"100%"} height={"100%"}>
      <Flex justifyContent="flex-start" flexDirection="row">
        <Box p={4} bgColor="white.100" width={"30%"} height={220}>
          <FilterSidebar
            selectedLocation={selectedLocation}
            selectedCategory={selectedCategory}
            onLocationChange={handleLocationChange}
            onCategoryChange={handleCategoryChange}
          />
        </Box>
        <Box>
          <Handymen handyData={newDatacat ? newDatacat : handyData} token={token1} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Services;
