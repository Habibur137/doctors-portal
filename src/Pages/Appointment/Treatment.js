import React from "react";

const Treatment = ({ treatment }) => {
  const { name, slots } = treatment;
  return (
    <div class="card lg:max-w-lg bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{slots.length}</p>
        <div class="card-actions justify-end">
          <button class="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
