import React from "react";
import Banner from "./Shared/Banner";
import FeaturedPackages from "./Shared/FeaturedPackages";
import BdInfo from "./Shared/BdInfo";
import ZenExperiences from "./Shared/ZenExperiences";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <ZenExperiences></ZenExperiences>
      <BdInfo></BdInfo>
    </div>
  );
};

export default Home;
