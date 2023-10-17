// import {
//   Box,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   VStack,
//   Select,
// } from "@chakra-ui/react";
// import "./sidbar.scss"
// import { useState } from "react";

// function FilterSidebar({
//   selectedLocation,
//   selectedCategory,
//   onLocationChange,
//   onCategoryChange,
// }) {
//   const [priceRange, setPriceRange] = useState([0, 100]);

//   const locations = ["Downtown", "Suburb", "Beachfront", "Countryside"];
//   const categories = [
//     "Carpentry",
//     "Plumbing",
//     "Electrical Work",
//     "Painting",
//     "Tiling",
//     "Landscaping",
//     "General Repairs",
//     "Furniture Assembly",
//     "Drywall Installation",
//     "Roofing Repairs",
//     "Gutter Cleaning",
//     "General Repairs",
//     "Flooring Installation",
//     "Window Installation",
//     "Deck Repair",
//     "Fence Installation",
//     "Pressure Washing",
//     "Appliance Repair",
//     "HVAC Maintenance",
//     "Locksmith Services",
//     "Garage Door Repair",
//   ];

//   const handlePriceRangeChange = (range) => {
//     setPriceRange(range);
//   };

//   return (
//     <Box p={4} bgColor="white.100">
//       <VStack spacing={4}>
//         <Box width="100%" bgColor="gray.300" rounded={"5%"}>
//           <strong>Location</strong>

//           <Select
//             value={selectedLocation}
//             onChange={(e) => onLocationChange(e.target.value)}
//             size="sm"

//             style={{ backgroundColor: "white", color: "black" }}
//             className="custom-select"
//           >
//             <option value="">Select a location</option>
//             {locations.map((location) => (
//               <option key={location} value={location}>
//                 {location}
//               </option>
//             ))}
//           </Select>
//         </Box>
//         <Box width="100%" bgColor="gray.300" rounded={"5%"}>
//           <strong>Category</strong>
//           <Select
//             value={selectedCategory}
//             onChange={(e) => onCategoryChange(e.target.value)}
//             size="sm"
//             style={{ backgroundColor: "white", color: "black"}}
//             menuProps={{ style: { maxHeight: '30' } }} // Adjust the 'maxHeight' as needed
//           >

//             <option value="" >{categories[selectedCategory-1]?categories[selectedCategory-1]:"Select a catgory"}</option>
//             {categories.map((category) => (
//               <option key={category} value={category} >
//                 {category}
//               </option>
//             ))}
//           </Select>
//         </Box>
//         <Box width="100%">
//           <strong>Price Range</strong>
//           <Slider
//             min={0}
//             max={100}
//             step={10}
//             defaultValue={priceRange}
//             onChange={(range) => handlePriceRangeChange(range)}
//           >
//             <SliderTrack>
//               <SliderFilledTrack />
//             </SliderTrack>
//             <SliderThumb />
//           </Slider>
//           <Box display="flex" justifyContent="space-between">
//             <span>${priceRange[0]}</span>
//             <span>${priceRange[1]}</span>
//           </Box>
//         </Box>
//       </VStack>
//     </Box>
//   );
// }

// export default FilterSidebar;

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
  const locations = ["amman", "irbid"];
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
    <Box p={4} bgColor="white.100" className="filter-sidebar">
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
            style={{ backgroundColor: "white", color: "black" }}
            menuProps={{ style: { maxHeight: "30" } }} // Adjust the 'maxHeight' as needed
          >
            <option value="">
              {categories[selectedCategory - 1]
                ? categories[selectedCategory - 1]
                : "Select a catgory"}
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </Box>
        <Box width="100%">
          <strong> Inquiry Price Range</strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={newInquiry}
            onChange={(range) => onMaxInquiryPrice(range)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box display="flex" justifyContent="space-between">
            <Tooltip label={`$${newInquiry}`} placement="top">
              <span>${newInquiry}</span>
            </Tooltip>
         
          </Box>
        </Box>

        <Box width="100%">
          <strong> Hourly Price Range</strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={newHourlyRate}
            onChange={(range) => onMaxHourlyRate(range)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box display="flex" justifyContent="space-between">
        
            <Tooltip label={`$${newHourlyRate}`} placement="top">
              <span>${newHourlyRate}</span>
            </Tooltip>
          </Box>
        </Box>

     
      </VStack> 
        <Button colorScheme="teal" size="sm" onClick={onSubmit}>
          Filter
        </Button>
    </Box>
  );
}

export default FilterSidebar;
