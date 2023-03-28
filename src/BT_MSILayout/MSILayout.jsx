import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import LaptopList from "./LaptopList";
import Navbar from "./Navbar";
import PhoneList from "./PhoneList";

function MSILayout() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Banner />
      <PhoneList />
      <LaptopList />
      <Footer />
    </div>
  );
}

export default MSILayout;
