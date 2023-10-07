import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import "./auth.scss";
import Form from "../../Components/SignupSingin/Form";
import UserType from "../../Components/SignupSingin/UserType";
import ExpertiesButtons from "../../Components/SignupSingin/ExpertiesButtons";
function Auth({ submitAction }) {
  const [userType, setUerType] = useState("");
  const [showPages,setShowPages]=useState({showSecondPage:false,showExpertiesPage:false});
  console.log(submitAction)
  return (
    <Flex w={"100%"} h={"100%"} flexDirection={"column"}>
      { showPages.showSecondPage||showPages.showExpertiesPage? (
        null
      ) :<UserType submitAction={submitAction} setUerType={setUerType} setShowPages={setShowPages} showPages={showPages}/>    }
      {showPages.showSecondPage&&<Form submitAction={submitAction} setShowPages={setShowPages} showPages={showPages} userType={userType}/>}
      {userType==='handyman'&&showPages.showExpertiesPage&&submitAction==='signup'?<ExpertiesButtons showPages={showPages} setShowPages={setShowPages}/>:null}
    </Flex>
  );
}

export default Auth;
