import React from "react";
import Banner from "./Shared/Banner";
import FeaturedPackages from "./Shared/FeaturedPackages";
import ZenExperiences from "./Shared/ZenExperiences";
import MindfulRetreats from "./Shared/MindfulRetreats";
import TravelInspirationGallery from "../../Components/TravelInspirationGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <ZenExperiences></ZenExperiences>
      <MindfulRetreats></MindfulRetreats>
     <TravelInspirationGallery></TravelInspirationGallery>


    </div>
  );
};

export default Home;
