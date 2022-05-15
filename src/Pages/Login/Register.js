import React from "react";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  // react form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // react firebase hook also email verification
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, cUuser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  if (gUser || cUuser) {
    console.log(gUser, cUuser);
  }
  if (gError || cError) {
  }

  // handle login
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          {/* login form ================================================== */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* field for name ============================================= */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Name here"
                class="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label class="label">
                <span class="label-text-alt">
                  {errors.name?.type === "required" && errors.name.message}
                </span>
              </label>
            </div>
            {/* field for email ========================================== */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                <span class="label-text-alt">
                  {errors.email?.type === "required" && errors.email.message}
                  {errors.email?.type === "pattern" && errors.email.message}
                </span>
              </label>
            </div>
            {/* field for password =================================================== */}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password here"
                class="input input-bordered w-full max-w-xs"
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
              <label class="label">
                <span class="label-text-alt">
                  {errors.password?.type === "required" &&
                    errors.password.message}
                  {errors.password?.type === "pattern" &&
                    errors.password.message}
                </span>
              </label>
            </div>

            <input
              type="submit"
              className="cursor-pointer mt-3 w-full max-w-xs bg-primary py-2 text-white font-bold rounded"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              Already have an account: <Link to="/login">Sign Up</Link>
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
