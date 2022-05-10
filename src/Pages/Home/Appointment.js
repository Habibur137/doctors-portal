import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import back from "../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <div
      className={`lg:flex gap-8 items-center my-28 px-3`}
      style={{ background: `url(${back})` }}
    >
      <img
        className="flex-1 hidden lg:block lg:mt-[-100px]"
        src={doctor}
        alt=""
      />
      <div className="flex-1">
        <h3 className="text-primary mb-2">Appointment</h3>
        <h3 className="text-3xl text-white mb-3">Make an appointment Today</h3>
        <p className="text-slate-300 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Appointment;
