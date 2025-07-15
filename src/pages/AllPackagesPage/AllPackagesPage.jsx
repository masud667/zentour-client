import React from "react";
import AllPackages from "./AllPackages";
import Navbar from "../../Components/Navber/Navber";
import { useLoaderData } from "react-router";

const AllPackagesPage = () => {
  const packages = useLoaderData()
  return (
   
    <div>
      <Navbar></Navbar>
      <AllPackages packages={packages}></AllPackages>
    </div>
  );
};

export default AllPackagesPage;
