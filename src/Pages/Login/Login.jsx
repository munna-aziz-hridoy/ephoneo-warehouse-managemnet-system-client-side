import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialButtons from "../../Components/SocialButtons/SocialButtons";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";

const Login = () => {
  const [loggedUserInfo, setLoggedUserInfo] = useState({});
  const [loggedUser, loggedUserLoading] = useAuthState(auth);
  const { email, password } = loggedUserInfo;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (email && password) {
      signInWithEmailAndPassword(email, password).then(() => {
        setLoggedUserInfo({});
      });
    }
  }, [email, password]);

  if (loading || loggedUserLoading) {
    return <Spinner />;
  }
  if (loggedUser) {
    navigate(from);
  }
  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          please login
        </h2>
      </div>
      <div className="container mx-auto">
        <form
          className="w-full  lg:w-2/3 mx-auto flex justify-start items-center flex-col gap-6 mt-20 mb-10"
          onSubmit={handleSubmit((data) => {
            setLoggedUserInfo(data);
            reset();
          })}
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
            className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] w-[66%] mt-14"
          />
          <p className="w-[64%] text-lg font-medium text-gray-500 capitalize">
            already have an account?{" "}
            <Link to="/register" className="text-[#5c2d91] font-bold mx-3">
              register
            </Link>
          </p>
        </form>
        <SocialButtons />
      </div>
    </>
  );
};

export default Login;
