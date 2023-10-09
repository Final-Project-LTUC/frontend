import { useState, useEffect } from 'react';
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';
import axios from 'axios';

async function gettingProfile(token) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get('http://localhost:5000/dashboard', {
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
async function updateProfile(token, input) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.put('http://localhost:5000/dashupdate', input, {
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


function UpdateForm({ token }) {
  const [oldData, setOldData] = useState(null);

  useEffect(() => {
    // Fetch profile data and update the state
    async function fetchData() {
      const profileData = await gettingProfile(token);
      setOldData(profileData);
    }

    fetchData();
  }, [token]);
  // console.log(oldData)


  const [formData, setFormData] = useState({
    
    phoneNumber: '',
    firstName: '',
  
    lastName: '',
    age: '',
   
    yearsOfExperience: "",
    hourlyRate: '',
    alt: '',
    inquiryPrice: '',
 
    rating: 5,
    description: '',
    languages: 'Arabic',
    role: 'handyman',
  });
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(token);
    console.log(formData);
    const result = await updateProfile(token, formData);
    
    console.log(result);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>firstName</FormLabel>
          <Input
            placeholder={oldData ? oldData.firstName : 'firstName'}
           
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last lastName</FormLabel>
          <Input
            placeholder={oldData ? oldData.lastName : 'lastName'}
           
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder={oldData && oldData.phoneNumber ? oldData.phoneNumber : 'phone'}
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>age</FormLabel>
          <Input
          placeholder={oldData && oldData.age  ? oldData.age : 'age'}
            type="int"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Years of experince</FormLabel>
          <Input
          placeholder={oldData && oldData.yearsOfExperience ? oldData.yearsOfExperience : 'Years of experince'}
            type="int"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            
          />
        </FormControl>
        <FormControl>
          <FormLabel>Hourly rate</FormLabel>
          <Input
          placeholder={oldData && oldData.hourlyRate ? oldData.hourlyRate : 'Hourly rate'}
            type="int"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>location</FormLabel>
          <Input
          placeholder={oldData ? "amman" : 'amman'}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Inquiry price</FormLabel>
          <Input
          placeholder={oldData && oldData.inquiryPrice ? oldData.inquiryPrice : 'inquiryPrice'}
            type="int"
            name="inquiryPrice"
            value={formData.inquiryPrice}
            onChange={handleChange}
            required
          />
          
        </FormControl>
        <FormControl>
          <FormLabel>Biography</FormLabel>
          <Input
          placeholder={oldData && oldData.description ? oldData.description : 'Biography'}
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

        </FormControl>
        <FormControl>
          <FormLabel>Languages</FormLabel>
          {/* Use the Select component for the language list */}
          <Select
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            required
          >
            {/* Define the language options */}
            <option value="Arabic">Arabic</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more languages as needed */}
          </Select>
        </FormControl>
  
  

          <div onClick={handleSubmit} >


        <ChakraLink as={ReactRouterLink} to="/dashboard" >
        
        <Button type="submit" colorScheme="teal" mt={4} >
          Update
        </Button>
        </ChakraLink>
          </div>
      </form>
    </Box>
  );
}
 export default  UpdateForm
