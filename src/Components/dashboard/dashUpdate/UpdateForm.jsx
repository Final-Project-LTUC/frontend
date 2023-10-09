import { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
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
  console.log(oldData)


  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    firstName: '',
    password: '',
    lastName: '',
    age: '',
    email: '',
    yearsOfExperience: 1,
    hourlyRate: '',
    alt: '',
    inquiryPrice: '',
    long: '',
    rating: 5,
    description: '',
    languages: 'Arabic',
    role: 'handyman',
  });
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the formData to your backend API for updating the model
    // You can use Axios or fetch for making API requests
    // Example: axios.put('/updateModel', formData);
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
          <FormLabel>Username</FormLabel>
          <Input
            placeholder={oldData ? oldData.username : 'username'}
           
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
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
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Years of experince</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Hourly rate</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>location</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Inquiry price</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          
        </FormControl>
        <FormControl>
          <FormLabel>Biography</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

        </FormControl>
        <FormControl>
          <FormLabel>Languages</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

        </FormControl>
  
  

        
        
        <Button type="submit" colorScheme="teal" mt={4}>
          Update
        </Button>
      </form>
    </Box>
  );
}
 export default  UpdateForm
