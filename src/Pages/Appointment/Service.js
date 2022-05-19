import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-primary text-primary-content">
      <div className="card-body text-center">
        <h2 className="text-xl  text-slate-200">{name}</h2>
        <p>{slots?.length ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots?.length} {slots?.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            htmlFor="booking"
            className="btn btn-sm"
            disabled={slots?.length === 0}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
