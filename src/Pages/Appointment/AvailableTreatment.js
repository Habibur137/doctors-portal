import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Treatment from "./Treatment";

const AvailableTreatment = ({ date }) => {
  const [treatment, setTreatment] = useState([]);
  const [service, setService] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      setTreatment(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 mdf:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {treatment.map((treatment) => (
          <Treatment
            treatment={treatment}
            key={treatment._id}
            setService={setService}
          />
        ))}
      </div>
      {treatment && <BookingModal {...service} date={date} />}
    </div>
  );
};

export default AvailableTreatment;
