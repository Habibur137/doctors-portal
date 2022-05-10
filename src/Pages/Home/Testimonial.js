import React from "react";
import qoute from "../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary">Testimonial</h3>
          <h1 className="text-3xl text-white">What Our Patients Says</h1>
        </div>
        <img className="w-24 lg:w-48 h-20 lg:h-44" src={qoute} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center">
            <div class="avatar pl-8">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
            <div className="pl-6">
              <h3>William Jhonson</h3>
              <p>California</p>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center">
            <div class="avatar pl-8">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
            <div className="pl-6">
              <h3>William Jhonson</h3>
              <p>California</p>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center">
            <div class="avatar pl-8">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100">
                <img src="https://api.lorem.space/image/face?hash=3174" />
              </div>
            </div>
            <div className="pl-6">
              <h3>William Jhonson</h3>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
