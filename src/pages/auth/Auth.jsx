import React, { useContext, useEffect, useReducer, useState } from "react";
import { Flex, Img, Text ,  useToast} from "@chakra-ui/react";
import "./auth.scss";
import Form from "../../Components/SignupSingin/Form";
import UserType from "../../Components/SignupSingin/UserType";
import ExpertiesButtons from "../../Components/SignupSingin/ExpertiesButtons";
import ImageUpload from "../../Components/SignupSingin/ImageUpload";
import formReducer, { initialState } from "../../hooks/Reducers/FormReducer";
import MoreInfo from "../../Components/SignupSingin/MoreInfo";
import cookie from "react-cookies";
import { LoginContext } from "../../hooks/Context/LoginProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const pages = ["userType", "form", "experties", "moreInfo", "profilePic"];
function Auth({ submitAction }) {
  const [userType, setUerType] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(pages[pageNum]);
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [selectedImg, setSelectedImg] = useState(false);
  const [token, setToken] = useState(cookie.load("auth"));
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const toast=useToast();
  async function handleSubmit() {
    try {
      const newFormData = {
        ...formData,
        languages: formData.languages.join(","),
      };
      
      delete newFormData.password;
      console.log(newFormData,"sharp shooter mistake")
      const moreInfo = await loginContext.updateData(newFormData, token);
      const imageUpload = await uploadImage(token); 
      toast({
        title: `All Done`,
        description: "Your Information have been added",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      navigate('/')
    } catch (e) {
      toast({
        title: `Something Went Wrong`,
        description: e.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setPageNum(0);
    }
  }
  const uploadImage = async (token) => {
    console.log(token,"token taken")
    if (selectedImg) {
      const formData = new FormData();
      formData.append("image", selectedImg);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_DATABASE_URL}/uploadImg`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          console.log("Image uploaded successfully");
        } else {
          console.error("Image upload failed");
        }
      } catch (error) {
        console.error("Error while uploading the image:", error);
      }
    }
  };
  useEffect(() => {
    dispatch({ type: "CHANGE_IMAGE", payload: selectedImg });
  }, [selectedImg]);
  useEffect(() => {
    const currentPage = pages[pageNum];
    setCurrentPage(currentPage);
    setToken(cookie.load("auth"));
  }, [pageNum]);
  return (
    <Flex w={"100%"} h={"100vh"} flexDirection={"column"}>
   
        <UserType
          currentPage={currentPage}
          setPageNum={setPageNum} 
          submitAction={submitAction}
          setUerType={setUerType}
          setCurrentPage={setCurrentPage}
        />
    
      {currentPage === pages[1] ? (
        <Form
          userType={userType}
          formData={formData}
          dispatch={dispatch}
          currentPage={currentPage}
          setPageNum={setPageNum}
          submitAction={submitAction}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
      {currentPage === pages[2] ? (
        <ExpertiesButtons
          dispatch={dispatch}
          formData={formData}
          currentPage={currentPage}
          setPageNum={setPageNum}
        />
      ) : null}
      {/* {currentPage===pages[2]||currentPage===pageNum[3]||currentPage===pageNum[4]?<Text fontSize={"5xl"}>Now Let's Finish up your profile</Text>:null} */}
      {currentPage === pages[3] ? (
        <MoreInfo
          setPageNum={setPageNum}
          dispatch={dispatch}
          currentPage={currentPage}
          formData={formData}
          userType={userType}
        />
      ) : null}
      {currentPage === pages[4] ? (
        <ImageUpload
          handleSubmit={handleSubmit}
          currentPage={currentPage}
          setSelectedImg={setSelectedImg}
          selectedImg={selectedImg}
        />
      ) : null}
    </Flex>
  );
}
export default Auth;
