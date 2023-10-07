import React from "react";
import TrustUs from "./TrustUs";
import Hero from "./generalHero/Hero";
import HomeServices from "./HomeServices";
import HomeCatalog from "./HomeCatalog";
import HomeBlog from "./bolg/HomeBlog";
import HowWeWork from "./HowWeWork";
import Test from "./homeHero/Test";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <Test />
      <TrustUs />
      <HowWeWork />
      <HomeServices />
      <HomeCatalog />
      <HomeBlog />
    </div>
  );
}
