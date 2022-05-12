import React from "react";
import Footer from "../Shared/Footer";
import Appointment from "./Appointment";
import Banner from "./Banner";
import Care from "./Care";
import Contact from "./Contact";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner />
      <Info />
      <Services />
      <Care />
      <Appointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
