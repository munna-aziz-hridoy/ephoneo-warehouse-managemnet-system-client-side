import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBenifits from "./HomeBenifits/HomeBenifits";
import HomeInventory from "./HomeInventory/HomeInventory";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeInventory />
      <HomeBenifits />
    </>
  );
};

export default Home;
