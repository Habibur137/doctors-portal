import React, { useEffect, useState } from "react";
import Treatment from "./Treatment";

const AvailableTreatment = () => {
  const [treatment, setTreatment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      setTreatment(data);
    };
    getData();
  }, []);
  console.log(treatment);
  return (
    <div className="grid grid-cols-1 mdf:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {treatment.map((treatment) => (
        <Treatment treatment={treatment} key={treatment._id} />
      ))}
    </div>
  );
};

export default AvailableTreatment;
