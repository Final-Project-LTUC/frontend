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
import React, { useState, useEffect } from "react";
import FilterSidebar from "../../../Components/ServicesPage/FilterSideBar";
import axios from "axios";
import Handymen from "../../../Components/ServicesPage/Handymen";
import ServicesHero from "../../../Components/ServicesPage/ServicesHero/index";
import categories from "./constant"
import cookie from 'react-cookies';

import categories from "./constant";
import cookie from "react-cookies";

function Services() {

 

  const [handyData, setHandyData] = useState(null); // Initialize handyData state
  const [expertydata, setExpertyData] = useState(null); // Initialize handyData state
  const [newDatacat, setNewData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [submit,setSubmit] = useState("")
  const [inquiryPrice, setInquiryPrice] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const token1 = cookie.load("auth");
   console.log(selectedLocation,"old location ")
  async function getData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen`);
      setHandyData(response.data);
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
   
  }
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function findMatchingIds(apiResponse, arrayOfObjects) {
    const apiIds = apiResponse.map((item) => item.HandymanId);
    const matchingObjects = arrayOfObjects.filter((obj) => apiIds.includes(obj.id));
    return matchingObjects;
  }

  function findCity(location, arrayOfObjects) {
    console.log('city and object',location,arrayOfObjects)
 
      if (!location) {
        return arrayOfObjects; 
      }
    
      const matchingObjects = arrayOfObjects.filter((obj) => obj.city === location);
      return matchingObjects;
    }
    function filterInquiryUnderMaxPrice(maxPrice, arrOfObjects) {
      console.log("function")

      return arrOfObjects.filter(item => item.inquiryPrice <= maxPrice);
    }
    function filterHourlyUnderMaxPrice(maxPrice, arrOfObjects) {
      console.log("function")

      return arrOfObjects.filter(item => item.hourlyRate <= maxPrice);
    }

      // Function to update inquiryPrice state
  const updateInquiryPrice = (maxPrice) => {
    setInquiryPrice(maxPrice);
  };

  // Function to update hourlyRate state
  const updateHourlyRate = (maxPrice) => {
    setHourlyRate(maxPrice);
  };
    const handleSubmit = () => {
      setSubmit(true)
     };
  const handleLocationChange = (location) => {
    console.log(location,"locationssssssssssss")
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
      
      console.log(selectedLocation,'set location cosnoile')

        let filteredData = handyData;
    
        
        if (selectedLocation) {
          filteredData = findCity(selectedLocation, filteredData);
          
        }
        
        if (selectedCategory) {
          const expertyID = await getDataExperty(selectedCategory);
          filteredData = findMatchingIds(expertyID, filteredData);
        }
        if (inquiryPrice) {
          filteredData = filterInquiryUnderMaxPrice(inquiryPrice, filteredData);
        }
    
        if (hourlyRate) {
          filteredData = filterHourlyUnderMaxPrice(hourlyRate, filteredData);
        }
    
        setNewData(filteredData);
        setSubmit(false);
      }
    
      fetchData();
    }, [submit, selectedLocation, selectedCategory, inquiryPrice, hourlyRate]);
  // useEffect(() => {
  //   console.log(newDatacat)
  
  // }, [selectedLocation]);
      const data = await getData();
      setHandyData(data);
      const expertyID = await getDataExperty(selectedCategory);
      console.log("handydata  ", expertyID);
      if (expertyID) {
        const newData = await findMatchingIds(expertyID, handyData)
        setNewData(newData)
      }
    }
    fetchData(); 
  }, [selectedCategory]);
  return (
    <Box p={4} bgColor="white.100" width={"100%"} height={"100%"}>
      <Flex justifyContent="flex-start" flexDirection="row">
        <Box p={4} bgColor="white.100" width={"30%"} height={220}>
          <FilterSidebar
            selectedLocation={selectedLocation}
            selectedCategory={selectedCategory}
            submit = {submit}
            newInquiry = {inquiryPrice}
            newHourlyRate = {hourlyRate}
            onLocationChange={handleLocationChange}
            onCategoryChange={handleCategoryChange}
            onSubmit = {handleSubmit}
            onMaxInquiryPrice ={updateInquiryPrice}
            onMaxHourlyRate = {updateHourlyRate}
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


// import {
//   Box,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   VStack,
//   Select,
//   Flex,
// } from "@chakra-ui/react";
// import React, { useState, useEffect } from "react";
// import FilterSidebar from "../../../Components/ServicesPage/FilterSideBar";
// import axios from "axios";
// import Handymen from "../../../Components/ServicesPage/Handymen";
// import ServicesHero from "../../../Components/ServicesPage/ServicesHero/index";
// import categories from "./constant";
// import cookie from 'react-cookies';

// let token1 = cookie.load('auth');
// console.log(token1);

// function Services() {
//   const [handyData, setHandyData] = useState(null);
//   const [newData, setNewData] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   async function getData() {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   async function getDataExperty(id) {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_DATABASE_URL}/handymen/genre/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   function findMatchingIds(apiResponse, arrayOfObjects) {
//     const apiIds = apiResponse.map((item) => item.HandymanId);
//     const matchingObjects = arrayOfObjects.filter((obj) => apiIds.includes(obj.id));
//     return matchingObjects;
//   }

//   const handleLocationChange = (location) => {
//     setSelectedLocation(location);
//   };

//   const handleCategoryChange = (categoryName) => {
//     setSelectedCategory(categoryName);

//     const selectedCategoryObject = categories.find((category) => category.name === categoryName);

//     if (selectedCategoryObject) {
//       setSelectedCategory(selectedCategoryObject.id);
//     } else {
//       setSelectedCategory(""); // Handle the case where the category is not found
//     }
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getData();
//       setHandyData(data);

//       if (selectedCategory) {
//         const expertyID = await getDataExperty(selectedCategory);
//         if (expertyID) {
//           const newData = await findMatchingIds(expertyID, handyData);
//           setNewData(newData);
//         }
//       }
//     }

//     fetchData();
//   }, [selectedCategory]);

//   return (
//     <Box p={4} bgColor="white.100" width={"100%"} height={"100%"}>
//       <Flex justifyContent="flex-start" flexDirection="row">
//         <Box p={4} bgColor="white.100" width={"30%"} height={"100vh"}>
//           <FilterSidebar
//             selectedLocation={selectedLocation}
//             selectedCategory={selectedCategory}
//             onLocationChange={handleLocationChange}
//             onCategoryChange={handleCategoryChange}
//           />
//         </Box>
//         <Box>
//           <Handymen handyData={newData || handyData} token={token1} />
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default Services;

