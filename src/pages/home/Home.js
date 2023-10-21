import React, { useContext } from "react";
import TrustUs from "./TrustUs";
import HomeServices from "./homeServices/HomeServices";
import HomeCatalog from "./HomeCatalog";
import HomeBlog from "./bolg/HomeBlog";
import HowWeWork from "../home/howWeWork/HowWeWork";
import Hero from "./homeHero/Hero";
import { LoginContext } from "../../../src/hooks/Context/LoginProvider";

export default function Home() {
  const { loginData, socket } = useContext(LoginContext);
  socket.on("inquiryDate",(payload)=>{
    console.log("inquiryDate",payload)
  })

  return (
    <div className="home-container" >
      <Hero />
      <TrustUs />
      <HowWeWork />
      <HomeServices />
      <HomeCatalog  />
      {/* <HomeBlog /> */}
    </div>
  );
}
