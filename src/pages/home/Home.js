import React from "react";
import TrustUs from "./TrustUs";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import HomeCatalog from "./HomeCatalog";
import HomeBlog from "./HomeBlog";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustUs />
      <HomeServices />
      <HomeCatalog />
      <HomeBlog />
    </div>
  );
}
