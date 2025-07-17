import React from "react";
import MyBookings from "./MyBookings";
import Navbar from "../../Components/Navber/Navber";

const BookingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MyBookings></MyBookings>
    </div>
  );
};

export default BookingPage;
