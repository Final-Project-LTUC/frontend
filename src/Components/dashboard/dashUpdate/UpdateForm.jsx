import { useState, useEffect } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import categories from "../../../pages/services/ServicesTest/constant";

function UpdateForm({
  profileData,
  showUpdateForm,
  setShowUpdateForm,
  handleUpdate,
  updatedData,
  setUpdatedData,
}) {
  return (
    <Flex
      position={`${showUpdateForm ? "relative" : "absolute"}`}
      transform={`translateX(${showUpdateForm ? "0" : "-200%"})`}
      transition={'all .7s ease-in-out'}
      p={4}
      w={"75%"}
      h={"100vh"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex justifyContent={"space-between"} w={"100%"}>
        <FormControl w={"40%"}>
          <FormLabel>firstName</FormLabel>
          <Input
            placeholder={profileData.firstName || "firstName"}
            type="text"
            name="firstName"
            w={"100%"}
            value={updatedData.firstName}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_FIRSTNAME",
                payload: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl w={"40%"}>
          <FormLabel>Last lastName</FormLabel>
          <Input
            placeholder={profileData.lastName || "lastName"}
            type="text"
            name="lastName"
            value={updatedData.lastName}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_LASTNAME",
                payload: e.target.value,
              })
            }
          />
        </FormControl>
      </Flex>
      <Flex w={"100%"} justifyContent={"space-between"}>
        <FormControl w={"40%"}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder={profileData.phoneNumber || "phone Number"}
            type="tel"
            name="phoneNumber"
            value={updatedData.phoneNumber}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_NUMBER",
                payload: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl w={"40%"}>
          <FormLabel>Age</FormLabel>
          <Input
            placeholder={profileData.age || "Age"}
            type="int"
            name="age"
            value={updatedData.age}
            onChange={(e) =>
              setUpdatedData({ type: "CHANGE_AGE", payload: e.target.value })
            }

            // required
          />
        </FormControl>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <FormControl w={"40%"}>
          <FormLabel>Hourly rate</FormLabel>
          <Input
            placeholder={profileData.hourlyRate || "Hourly rate"}
            type="int"
            name="hourlyRate"
            value={updatedData.hourlyRate}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_HOURLYRATE",
                payload: e.target.value,
              })
            }
            // required
          />
        </FormControl>
        <FormControl w={"40%"}>
          <FormLabel>Inquiry price</FormLabel>
          <Input
            placeholder={profileData.inquiryPrice || "inquiryPrice"}
            type="int"
            name="inquiryPrice"
            value={updatedData.inquiryPrice}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_INQUIRY",
                payload: e.target.value,
              })
            }
            // required
          />
        </FormControl>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <FormControl w={"40%"}>
          <FormLabel>Biography</FormLabel>
          <Input
            placeholder={profileData.description || "Biography"}
            type="text"
            name="description"
            value={updatedData.description}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_DESCRIPTION",
                payload: e.target.value,
              })
            }
            // required
          />
        </FormControl>
        <FormControl w={"40%"}>
          <FormLabel>Years of experince</FormLabel>
          <Input
            placeholder={profileData.yearsOfExperience || "Years of experince"}
            type="int"
            name="yearsOfExperience"
            value={updatedData.yearsOfExperience}
            onChange={(e) =>
              setUpdatedData({
                type: "CHANGE_YearsOfExperience",
                payload: e.target.value,
              })
            }
          />
        </FormControl>
      </Flex>

      <Flex w={"100%"} justifyContent={"space-around"}>
        <Text fontSize={"xl"}>Spoken Languages</Text>
        <Button
          colorScheme="teal"
          variant={`${
            updatedData.languages?.includes("Arabic") ||
            profileData.languages.includes("ARABIC")
              ? "solid"
              : "outline"
          }`}
          onClick={(e) =>
            setUpdatedData({ type: "CHANGE_LANGUAGES", payload: "Arabic" })
          }
        >
          Arabic
        </Button>
        <Button
          colorScheme="teal"
          variant={`${
            updatedData.languages?.includes("English") ||
            profileData.languages.includes("English")
              ? "solid"
              : "outline"
          }`}
          onClick={(e) =>
            setUpdatedData({ type: "CHANGE_LANGUAGES", payload: "English" })
          }
        >
          English
        </Button>
        <Button
          colorScheme="teal"
          variant={`${
            updatedData.languages?.includes("French") ||
            profileData.languages.includes("French")
              ? "solid"
              : "outline"
          }`}
          onClick={(e) =>
            setUpdatedData({ type: "CHANGE_LANGUAGES", payload: "French" })
          }
        >
          French
        </Button>
      </Flex>








      {/* <Flex
        w={"100%"}
        wrap={"wrap"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        gap={"10px"}
      >
        {categories.map((experty) => {
          return (
            <Button
              w={"150px"}
              colorScheme={
                updatedData.experties.includes(experty.id) ||
                profileData.experties.includes(experty.id)
                  ? "teal"
                  : "teal"
              }
              variant={
                updatedData.experties.includes(experty.id) ||
                profileData.experties.includes(experty.id)
                  ? "solid"
                  : "outline"
              }
              h={"40px"}
              key={experty.id}
              onClick={() =>
                setProfileData({
                  type: "CHANGE_EXPERTIES",
                  payload: experty.id,
                })
              }
            >
              {experty.name}
            </Button>
          );
        })}
      </Flex> */}





      <div>
        <ChakraLink as={ReactRouterLink} to="/dashboard">
          <Button
            w={"180px"}
            onClick={() => {
              handleUpdate();
              setShowUpdateForm(false);
            }}
            colorScheme="teal"
            mt={4}
          >
            Update
          </Button>
        </ChakraLink>
      </div>
    </Flex>
  );
}
export default UpdateForm;









