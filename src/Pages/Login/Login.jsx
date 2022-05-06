import React from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import SocialButtons from "../../Components/SocialButtons/SocialButtons";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [loggedUser, loggedUserLoading] = useAuthState(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (userData) => {
    const { email, password } = userData;
    await signInWithEmailAndPassword(email, password);

    reset();

    const { data } = await axios.post(
      "https://agile-ridge-94363.herokuapp.com/getToken",
      {
        email,
      }
    );

    localStorage.setItem("accessToken", data.accessToken);
  };

  if (loading || loggedUserLoading) {
    return <Spinner />;
  }
  if (loggedUser) {
    navigate(from);
  }

  const handlePasswordReset = () => {
    const email = document.getElementById("email").value;

    if (email !== "") {
      sendPasswordResetEmail(email).then(() => {
        toast("Reset password email sent");
        document.getElementById("email").value = "";
      });
    } else {
      toast("Please enter a email");
    }
  };

  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          please login
        </h2>
      </div>
      <div className="container mx-auto">
        <form
          className="w-full  lg:w-2/3 mx-auto flex justify-start items-center flex-col gap-6 mt-20 mb-4"
          onSubmit={handleSubmit(handleLogin)}
        >
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Email"
          />
          {(<errors className="email"></errors>)?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter email
            </p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter password
            </p>
          )}
          {error && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              {error?.message}
            </p>
          )}
          <input
            type="submit"
            value="login"
            className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] w-[66%] mt-14 cursor-pointer"
          />
          <p className="w-[64%] text-lg font-medium text-gray-500 capitalize">
            already have an account?{" "}
            <Link to="/register" className="text-[#5c2d91] font-bold mx-3">
              register
            </Link>
          </p>
        </form>
        <p className="w-3/4 text-lg font-medium text-gray-500 capitalize text-center mb-14">
          forgot password?{" "}
          <button
            onClick={handlePasswordReset}
            to="/register"
            className="text-[#5c2d91] font-bold mx-3"
          >
            reset
          </button>
        </p>
        <SocialButtons />
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
