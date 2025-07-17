import React from "react";
import Banner from "./Shared/Banner";
import FeaturedPackages from "./Shared/FeaturedPackages";
import ZenExperiences from "./Shared/ZenExperiences";
import MindfulRetreats from "./Shared/MindfulRetreats";

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <ZenExperiences></ZenExperiences>
      <MindfulRetreats></MindfulRetreats>
     
    </div>
  );
};

export default Home;
