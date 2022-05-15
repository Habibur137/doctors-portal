import React from "react";

const Treatment = ({ treatment, setService }) => {
  const { name, slots } = treatment;
  return (
    <div className="card lg:max-w-lg bg-primary text-primary-content">
      <div className="card-body text-center">
        <h2 className="text-xl  text-slate-200">{name}</h2>
        <p>{slots.length ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setService(treatment)}
            htmlFor="booking"
            className="btn btn-sm"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
