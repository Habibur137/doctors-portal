import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  // react form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // handle login
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>add doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* field for name ============================================= */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Name here"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {errors.name?.type === "required" && errors.name.message}
            </span>
          </label>
        </div>
        {/* field for email ========================================== */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email here"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "Please Provide A valid Email",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {errors.email?.type === "required" && errors.email.message}
              {errors.email?.type === "pattern" && errors.email.message}
            </span>
          </label>
        </div>
        {/* field for password =================================================== */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <input
            type="text"
            placeholder="speciality here"
            className="input input-bordered w-full max-w-xs"
            {...register("password", {
              required: {
                value: true,
                message: "speciality is required",
              },
            })}
          />
          <label className="label">
            <span className="label-text-alt">
              {errors.password?.type === "required" && errors.password.message}
              {errors.password?.type === "pattern" && errors.password.message}
            </span>
          </label>
        </div>

        <input
          type="submit"
          className="cursor-pointer mt-3 w-full max-w-xs bg-primary py-2 text-white font-bold rounded"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
