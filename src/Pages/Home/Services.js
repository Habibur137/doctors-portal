import React from "react";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import fluoride from "../../assets/images/fluoride.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      name: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      name: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
    {
      name: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
  ];
  return (
    <div className="md:my-12 lg:my-12">
      <div className="text-center">
        <h5 className="text-primary">Our Services</h5>
        <h3 className="text-3xl text-white mb-6">Services We Provide</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
