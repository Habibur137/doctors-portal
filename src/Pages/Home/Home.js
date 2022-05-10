import React from "react";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Care from "./Care";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner />
      <Info />
      <Services />
      <Care />
      <Appointment />
    </div>
  );
};

export default Home;
