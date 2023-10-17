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







// import {
//   Box,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   VStack,
//   Select,
// } from "@chakra-ui/react";
// import "./sidbar.scss"; // Make sure your SCSS file is correctly referenced
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
//     <Box p={4} bgColor="white.100" className="filter-sidebar"> {/* Add the className "filter-sidebar" here */}
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
//             style={{ backgroundColor: "white", color: "black" }}
//             menuProps={{ style: { maxHeight: '30' } }} // Adjust the 'maxHeight' as needed
//           >

//             <option value="" >{categories[selectedCategory - 1] ? categories[selectedCategory - 1] : "Select a catgory"}</option>
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Select,
} from "@chakra-ui/react";
import "./sidbar.scss"; // Make sure your SCSS file is correctly referenced
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
    <Box
      p={4}
      bgColor="white"
      className="filter-sidebar"
      borderRadius="md"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top="0"
    >
      <VStack spacing={4}>
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
            Price Range
          </strong>
          <Slider
            min={0}
            max={100}
            step={10}
            defaultValue={priceRange}
            onChange={(range) => handlePriceRangeChange(range)}
          >
            <SliderTrack bgColor="teal.500">
              <SliderFilledTrack bgColor="teal.300" />
            </SliderTrack>
            <SliderThumb bgColor="teal.500" size="8">
              <Box
                bg="white"
                w="16px"
                h="16px"
                borderRadius="50%"
                boxShadow="0 2px 3px rgba(0, 0, 0, 0.1)"
              />
            </SliderThumb>
          </Slider>
          <Box
            display="flex"
            justifyContent="space-between"
            color="teal.500"
            fontSize="lg"
            fontWeight="bold"
          >
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default FilterSidebar;



