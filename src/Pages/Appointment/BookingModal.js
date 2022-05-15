import { format } from "date-fns";
import React from "react";

const BookingModal = ({ name, slots, date }) => {
  const bookTreatment = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const date = e.target.date.value;
    console.log(name, slot, date);
  };
  return (
    <div>
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4 text-center">{name}</h3>
          <form
            onSubmit={bookTreatment}
            className="grid grid-cols-1 gap-4 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP") || ""}
              name="date"
              readOnly
              className="input input-bordered w-full max-w-xs bg-white"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered bg-white w-full max-w-xs "
            >
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              value={name || ""}
              readOnly
              disabled
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full max-w-xs bg-white"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered input-primary bg-primary text-white font-bold w-full max-w-xs"
            />
          </form>
          <div className="modal-action">
            <label
              htmlFor="booking"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
