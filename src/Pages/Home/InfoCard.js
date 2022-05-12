import React from "react";

const InfoCard = ({ img, title, bgClass, desc }) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt="Movie" className="ml-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
