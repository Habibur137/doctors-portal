import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(gUser || user);
  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  if (loading || gLoading) {
    return (
      <div class="flex items-center justify-center ">
        <div class="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  let signError;
  if (error || gError) {
    signError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  // handle login
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          {/* login form ================================================== */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              value="Login"
            />
          </form>
          <p
            // onClick={async () => {
            //   await sendPasswordResetEmail(email);
            //   alert("Sent email");
            // }}
            className="text-primary"
          >
            <small>Forgot Password</small>
          </p>
          <p>
            <small>
              Need an account:{" "}
              <Link className="text-primary" to="/register">
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

export default Login;
