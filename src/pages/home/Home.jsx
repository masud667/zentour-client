import React from "react";
import Banner from "./Shared/Banner";
import FeaturedPackages from "./Shared/FeaturedPackages";
import ZenExperiences from "./Shared/ZenExperiences";
import MindfulRetreats from "./Shared/MindfulRetreats";
import TravelInspirationGallery from "../../Components/TravelInspirationGallery";
import SeasonalDeals from "../../Components/SeasonalDeals";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPackages></FeaturedPackages>
      <ZenExperiences></ZenExperiences>
      <MindfulRetreats></MindfulRetreats>
      <TravelInspirationGallery></TravelInspirationGallery>
      <SeasonalDeals></SeasonalDeals>
    </div>
  );
};

export default Home;
