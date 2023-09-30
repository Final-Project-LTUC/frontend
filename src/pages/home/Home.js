import React from "react";
import Navbar from "../Navbar/Navbar";
import TrustUs from "./TrustUs";
import Hero from "./Hero";
import HomeServices from "./HomeServices";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustUs />
      <HomeServices />
    </div>
  );
}
