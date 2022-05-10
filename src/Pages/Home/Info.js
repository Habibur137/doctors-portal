import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16">
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-primary "
        title="Opening Hours"
        img={clock}
      />
      <InfoCard bgClass="bg-neutral" title="Opening Hours" img={marker} />
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-primary "
        title="Opening Hours"
        img={phone}
      />
    </div>
  );
};

export default Info;
