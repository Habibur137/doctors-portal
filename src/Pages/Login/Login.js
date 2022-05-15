import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // react form hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // react firebase hook also email verification
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, sLoading, sError] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (gUser || user) {
    navigate(from, { replace: true });
  }
  if (gError || error || sError) {
  }

  // handle login
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          {/* login form ================================================== */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              value="Login"
            />
          </form>
          <p
          // onClick={async () => {
          //   await sendPasswordResetEmail(email);
          //   alert("Sent email");
          // }}
          >
            <small>Forgot Password</small>
          </p>
          <p>
            <small>
              Need an account: <Link to="/register">Sign Up</Link>
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
