import { format } from "date-fns";
import React from "react";
import AvailableTreatment from "./AvailableTreatment";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h3 className="text-center text-white font-semibold text-2xl pt-8">
        Available Appointment on {format(date, "PP")}
      </h3>
      {/* all services come from av-treatment */}
      <AvailableTreatment />
    </div>
  );
};

export default AvailableAppointment;
