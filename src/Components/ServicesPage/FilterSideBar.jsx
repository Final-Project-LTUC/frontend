import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import "./sidbar.scss"; // Make sure your SCSS file is correctly referenced
import { useState } from "react";

function FilterSidebar({
  selectedLocation,
  selectedCategory,
  newHourlyRate,
  newInquiry,
  submit,
  onMaxHourlyRate,
  onMaxInquiryPrice,
  onLocationChange,
  onCategoryChange,
  onSubmit,
}) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  // const [inuriryprice, setInquirericeRange] = useState([0, 100]);
  // console.log('priceRange',priceRange)
  const locations = ["Amman", "Irbid"];
  const categories = [
    "Carpentry",
    "Plumbing",
    "Electrical Work",
    "Painting",
    "Tiling",
    "Landscaping",
    "General Repairs",
    "Furniture Assembly",
    "Drywall Installation",
    "Roofing Repairs",
    "Gutter Cleaning",
    "General Repairs",
    "Flooring Installation",
    "Window Installation",
    "Deck Repair",
    "Fence Installation",
    "Pressure Washing",
    "Appliance Repair",
    "HVAC Maintenance",
    "Locksmith Services",
    "Garage Door Repair",
  ];

  // const handlePriceRangeChange = (range) => {
  //   setPriceRange(range);
  // };
  // const handleiriceRangeChange = (range) => {
  //   setInquirericeRange(range);
  // };

  return (
    <Box
      p={4}
      bgColor="white"
      className="filter-sidebar"
      borderRadius="md"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top="0"
    >
      <VStack spacing={4} style={{ marginBottom: '20px' }}>
        <Box
          width="100%"
          bgColor="gray.100"
          rounded="md"
          p={4}
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <strong style={{ fontSize: "1.2rem", color: "teal.500" }}>
            Location
          </strong>
          <Select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            size="sm"
            bgColor="white"
            color="black"
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          width="100%"
          bgColor="gray.100"
          rounded="md"
          p={4}
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <strong style={{ fontSize: "1.2rem", color: "teal.500" }}>
            Category
          </strong>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            size="sm"
            bgColor="white"
            color="black"
          >
            <option value="">
              {categories[selectedCategory - 1]
                ? categories[selectedCategory - 1]
                : "Select a category"}
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>
        <Box
          width="100%"
          bgColor="gray.100"
          rounded="md"
          p={4}
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <strong style={{ fontSize: "1.2rem", color: "teal.500" }}>
            Inquiry Price Range
          </strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={newInquiry}
            onChange={(range) => onMaxInquiryPrice(range)}
          >
            <SliderTrack bgColor="teal.500">
              <SliderFilledTrack bgColor="teal.300" />
            </SliderTrack>
            <SliderThumb bgColor="teal.500" size="8">
              <Box
                bg="white"
                w="16px"
                h="16px"
                borderRadius="30%"
                boxShadow="0 2px 3px rgba(0, 0, 0, 0.1)"
              />
            </SliderThumb>
          </Slider>
          <Box display="flex"    
          justifyContent="space-between"
          color="teal.500"
          fontSize="lg"
          fontWeight="bold" 
          >
            <Tooltip label={`$${newInquiry}`} placement="top">
              <span>${newInquiry}</span>
            </Tooltip>
         
          </Box>
        </Box>

        <Box  width="100%"
          bgColor="gray.100"
          rounded="md"
          p={4}
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)">
          <strong style={{ fontSize: "1.2rem", color: "teal.500" }}>
            Horuly Rate Price
          </strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={newHourlyRate}
            onChange={(range) => onMaxHourlyRate(range)}
          >
            <SliderTrack bgColor="teal.500">
              <SliderFilledTrack bgColor="teal.300" />
            </SliderTrack>
            <SliderThumb bgColor="teal.500" size="8">
              <Box
                bg="white"
                w="16px"
                h="16px"
                borderRadius="30%"
                boxShadow="0 2px 3px rgba(0, 0, 0, 0.1)"
              />
            </SliderThumb>
          </Slider>
          <Box display="flex"    
          justifyContent="space-between"
          color="teal.500"
          fontSize="lg"
          fontWeight="bold" 
          
          >
            <Tooltip label={`$${newHourlyRate}`} placement="top" >
              <span>${newHourlyRate}</span>
            </Tooltip>
         
          </Box>
        </Box>
        
     
      </VStack> 
        <Button colorScheme="teal" size="sm" onClick={onSubmit} paddingStart={"10px"}>
          Filter
        </Button>
    </Box>
  );
}

export default FilterSidebar;
