import React from "react";
import TrustUs from "./TrustUs";
import HomeServices from "./homeServices/HomeServices";
import HomeCatalog from "./HomeCatalog";
import HomeBlog from "./bolg/HomeBlog";
import HowWeWork from "../home/howWeWork/HowWeWork";
import Hero from "./homeHero/Hero";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <TrustUs />
      <HowWeWork />
      <HomeServices />
      <HomeCatalog />
      <HomeBlog />
    </div>
  );
}
