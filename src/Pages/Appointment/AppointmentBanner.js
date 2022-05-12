import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen" style={{ background: `url(${bg})` }}>
      <div class="hero-content flex-col lg:flex-row-reverse gap-12">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl h-72" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
