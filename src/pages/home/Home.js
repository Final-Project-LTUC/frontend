import React from "react";
import TrustUs from "./TrustUs";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import HomeCatalog from "./HomeCatalog";
import HomeBlog from "./HomeBlog";
import HowWeWork from "./HowWeWork";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustUs />
      <HowWeWork />
      <HomeServices />
      <HomeCatalog />
      <HomeBlog />
    </div>
  );
}
