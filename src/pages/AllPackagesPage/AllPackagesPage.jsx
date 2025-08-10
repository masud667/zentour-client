import React from "react";
import AllPackages from "./AllPackages";
import Navbar from "../../Components/Navber/Navber";
import { useLoaderData } from "react-router";
import Header from "../../Components/Header";

const AllPackagesPage = () => {
  const packages = useLoaderData()
  return (
   
    <div>
     <Header></Header>
      <AllPackages packages={packages}></AllPackages>
    </div>
  );
};

export default AllPackagesPage;
