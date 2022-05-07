import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import axios from "axios";

const SocialButtons = () => {
  const [errorText, setErrorText] = useState("");

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGitHub, loadinGitHub, errorGitHub] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    const createToken = async () => {
      const { data } = await axios.post(
        "https://agile-ridge-94363.herokuapp.com/getToken",
        {
          email: userGoogle.user.email,
        }
      );
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
    };

    if (userGoogle?.user?.email) {
      createToken();
    }
  }, [userGoogle]);

  useEffect(() => {
    const createToken = async () => {
      const { data } = await axios.post(
        "https://agile-ridge-94363.herokuapp.com/getToken",
        {
          email: userFacebook.user.email,
        }
      );

      localStorage.setItem("accessToken", data.accessToken);
    };

    if (userFacebook?.user?.email) {
      createToken();
    }
  }, [userFacebook]);
  useEffect(() => {
    const createToken = async () => {
      const { data } = await axios.post(
        "https://agile-ridge-94363.herokuapp.com/getToken",
        {
          email: userGitHub.user.email,
        }
      );

      localStorage.setItem("accessToken", data.accessToken);
    };

    if (userGitHub?.user?.email) {
      createToken();
    }
  }, [userGitHub]);

  useEffect(() => {
    if (errorGoogle) {
      setErrorText(errorGoogle.message);
    }
    if (errorGitHub) {
      setErrorText(errorGitHub.message);
    }
    if (errorFacebook) {
      setErrorText(errorFacebook.message);
    }
  }, [errorFacebook, errorGitHub, errorGoogle]);

  return (
    <div className="mb-28">
      <div className="w-full flex justify-center items-center  gap-7">
        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]"
        >
          <FontAwesomeIcon icon={faGoogle} className="text-3xl" />
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]"
        >
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="flex justify-center items-center text-semibold w-[70px] h-[60px] capitalize hover:bg-[#5c2d91] bg-white  rounded-lg shadow-lg text-lg hover:text-white text-[#5c2d91] border-2 border-[#5c2d91]"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
        </button>
      </div>
      <p className="my-5 text-center text-red-300 text-sm font-medium capitalize">
        {errorText}
      </p>
    </div>
  );
};

export default SocialButtons;
