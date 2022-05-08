import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialButtons from "../../Components/SocialButtons/SocialButtons";
import Spinner from "../../Components/Spinner/Spinner";
import auth from "../../firebase.init";

const Register = () => {
  const [errorText, setErrorText] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegister = (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setErrorText("Password did not match");
      return;
    } else {
      createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate("/");
          reset();
        })
        .catch();
    }
  };

  useEffect(() => {
    if (error) {
      setErrorText(error.message);
    }
  }, [error]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="bg-[#19092c] py-24 my-10">
        <h2 className="text-4xl font-bold capitalize text-slate-100 text-center">
          please Register
        </h2>
      </div>
      <div className="container p-5  mx-auto">
        <form
          className="w-full  lg:w-2/3 mx-auto flex justify-start items-center flex-col gap-6 mt-20 mb-10 p-5"
          onSubmit={handleSubmit(handleRegister)}
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
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("confirmPassword", { required: true })}
            className="w-full lg:w-2/3 h-12 p-2 border-[#5c2d91] border-2 rounded-lg text-gray-500 placeholder:text-gray-400 text-lg "
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.type === "required" && (
            <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-20px]">
              Please enter confirm password
            </p>
          )}
          <p className="text-red-300 font-medium  capitalize w-[66%] mt-[-10px]">
            {errorText}
          </p>
          <input
            type="submit"
            value="Register"
            className="text-semibold capitalize bg-[#5c2d91] hover:bg-white px-8 py-3 rounded-lg shadow-lg text-lg text-white hover:text-[#5c2d91] border-2 border-[#5c2d91] w-[66%] mt-14 cursor-pointer"
          />
          <p className="w-[64%] text-lg font-medium text-gray-500 capitalize">
            already have an account?{" "}
            <Link to="/login" className="text-[#5c2d91] font-bold mx-3">
              Login
            </Link>
          </p>
        </form>
        <SocialButtons />
      </div>
    </>
  );
};

export default Register;
