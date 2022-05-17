import React from "react";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Register = () => {
  // react form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);

  if (loading || gLoading || updating) {
    return (
      <div class="flex items-center justify-center ">
        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  if (token) {
    navigate("/appointment");
  }
  let signError;
  if (error || gError || updateError) {
    signError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  // handle login
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          {/* login form ================================================== */}
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password here"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password must be 6 char or long",
                  },
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">
                  {errors.password?.type === "required" &&
                    errors.password.message}
                  {errors.password?.type === "pattern" &&
                    errors.password.message}
                </span>
              </label>
            </div>
            {signError}
            <input
              type="submit"
              className="cursor-pointer mt-3 w-full max-w-xs bg-primary py-2 text-white font-bold rounded"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              Already have an account:{" "}
              <Link className="text-primary" to="/login">
                Sign Up
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          {/* google login button  */}
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
