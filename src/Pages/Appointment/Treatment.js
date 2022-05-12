import React from "react";

const Treatment = ({ treatment, setService }) => {
  const { name, slots } = treatment;
  return (
    <div class="card lg:max-w-lg bg-primary text-primary-content">
      <div class="card-body text-center">
        <h2 class="text-xl  text-slate-200">{name}</h2>
        <p>{slots.length ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div class="card-actions justify-center">
          <label
            onClick={() => setService(treatment)}
            for="booking"
            class="btn btn-sm"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
