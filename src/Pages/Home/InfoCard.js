import React from "react";

const InfoCard = ({ img, title, bgClass, desc }) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Movie" className="ml-6" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-white">{title}</h2>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
