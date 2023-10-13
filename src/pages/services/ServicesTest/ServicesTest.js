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
 function Services() {
  const [handyData, setHandyData] = useState(null); // Initialize handyData state


  async function getData (){
  try {
    const response = await axios.get('https://backend-n1je.onrender.com/handymen');
    return response.data

  } catch (error) {
        console.error("Error fetching data:", error);
    //     // Handle the error
    //   }
    // ...
  }
}


  const categories = [
    {
      id: 1,
      name: "Carpentry",
    },
    {
      id: 2,
      name: "Plumbing",
    },
    {
      id: 3,
      name: "Electrical Work",
    },
    {
      id: 4,
      name: "Painting",
    },
    {
      id: 5,
      name: "Tiling",
    },
    {
      id: 6,
      name: "Landscaping",
    },
    {
      id: 7,
      name: "Drywall Installation",
    },
    {
      id: 8,
      name: "Furniture Assembly",
    },
    {
      id: 9,
      name: "Roofing Repairs",
    },
    {
        id: 10,
        name: "Gutter Cleaning",
      
    },
    {
        id: 11,
        name: "General Repairs",
     
    },
    {
        id: 12,
        name: "Flooring Installation",

    },
    {
        id: 13,
        name: "Window Installation",
      
    },
    {
        id: 14,
        name: "Deck Repair",

    },
    {
        id: 15,
        name: "Fence Installation",

    },
    {
        id: 16,
        name: "Pressure Washing",

    },
    {
        id: 17,
        name: "Appliance Repair",

    },
    {
        id: 18,
        name: "HVAC Maintenance",

    },
    {
        id: 19,
        name: "Locksmith Services",

    },
    {
        id: 20,
        name: "Garage Door Repair",

    }
]
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
        setHandyData(data); // Set the handyData state with the fetched data
        console.log("handydata  ",handyData )
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

      <Handymen handyData ={handyData}/>
    </Box>
        </Flex>
    </Box>
  );
}

export default Services;
