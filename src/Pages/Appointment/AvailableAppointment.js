import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      setServices(data);
    };
    getData();
  }, []);
  return (
    <div className="lg:px-16">
      <h3 className="text-center text-white font-semibold text-2xl pt-8">
        Available Appointment on {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 mdf:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service) => (
          <Service
            service={service}
            key={service._id}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
