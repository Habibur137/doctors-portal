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
      <input type="checkbox" id="booking" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-4 text-center">{name}</h3>
          <form
            onSubmit={bookTreatment}
            className="grid grid-cols-1 gap-4 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              name="date"
              readOnly
              class="input  bg-white w-full max-w-xs"
            />
            <select
              name="slot"
              class="select select-bordered bg-white w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              value={name}
              readOnly
              class="input input-bordered input-primary bg-white w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered input-primary bg-white w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone"
              class="input input-bordered input-primary bg-white w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="input input-bordered input-primary bg-primary text-white font-bold w-full max-w-xs"
            />
          </form>
          <div class="modal-action">
            <label
              for="booking"
              class="btn btn-sm btn-circle absolute right-2 top-2"
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
