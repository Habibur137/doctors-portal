import React from "react";

const Service = ({ name, img, desc }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-2xl hover:bg-white transition-all duration-500 hover:text-slate-500">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
