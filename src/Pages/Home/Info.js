import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-primary"
        title="Opening Hours"
        img={clock}
        desc="Click the button to watch"
      />
      <InfoCard
        bgClass="bg-neutral"
        desc="Brooklyn, NY 10036, United States"
        title="Visit our location"
        img={marker}
      />
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-primary "
        title="Contact us now"
        img={phone}
        desc="+000 123 456789"
      />
    </div>
  );
};

export default Info;
