import React from "react";
import back from "../../assets/images/appointment.png";
const Contact = () => {
  return (
    <div style={{ background: `url(${back})` }} className="py-4">
      <div className="text-center mb-12">
        <h5 className="text-primary">Contact Us</h5>
        <h3 className="text-3xl text-white">Stay connected with us</h3>
      </div>
      <div className="w-72 mx-auto">
        <form className="flex flex-col gap-6">
          <input
            className="py-2 px-2 rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="py-2 px-2 rounded"
            type="text"
            name=""
            id=""
            placeholder="Subject"
          />
          <textarea
            className="py-2 px-2 rounded"
            name=""
            placeholder="Your Message"
            id=""
            cols="10"
            rows="3"
          ></textarea>
          <button
            className="btn btn-primary mx-auto text-white w-1/2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
