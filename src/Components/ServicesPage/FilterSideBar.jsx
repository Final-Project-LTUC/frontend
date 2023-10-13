import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Select,
} from "@chakra-ui/react";
import "./sidbar.scss"
import { useState } from "react";

function FilterSidebar({
  selectedLocation,
  selectedCategory,
  onLocationChange,
  onCategoryChange,
}) {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const locations = ["Downtown", "Suburb", "Beachfront", "Countryside"];
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

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  return (
    <Box p={4} bgColor="white.100">
      <VStack spacing={4}>
        <Box width="100%" bgColor="gray.300" rounded={"5%"}>
          <strong>Location</strong>

          <Select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            size="sm"
         
            style={{ backgroundColor: "white", color: "black" }}
            className="custom-select"
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Select>
        </Box>
        <Box width="100%" bgColor="gray.300" rounded={"5%"}>
          <strong>Category</strong>
          <Select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            size="sm"
            style={{ backgroundColor: "white", color: "black"}}
            menuProps={{ style: { maxHeight: '30' } }} // Adjust the 'maxHeight' as needed
          >
            
            <option value="" >Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category} >
                {category}
              </option>
            ))}
          </Select>
        </Box>
        <Box width="100%">
          <strong>Price Range</strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={priceRange}
            onChange={(range) => handlePriceRangeChange(range)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box display="flex" justifyContent="space-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default FilterSidebar;
