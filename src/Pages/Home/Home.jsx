import React from "react";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBenifits from "./HomeBenifits/HomeBenifits";
import HomeInventory from "./HomeInventory/HomeInventory";
import useProducts from "../../hooks/useProducts";
import Spinner from "../../Components/Spinner/Spinner";

const Home = () => {
  const [products] = useProducts();
  console.log(products);

  return (
    <>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <HomeBanner />
          <HomeAbout />
          <HomeInventory />
          <HomeBenifits />
        </>
      )}
    </>
  );
};

export default Home;
