import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import google from "@/assets/icons/google.svg";

const GoogleButton = () => {
  return (
    <div>
      <Link className="flex gap-2 items-center rounded-lg  px-8 py-2 w-fit bg-white ">
        <img className=" w-[2rem] aspect-square" src={google} alt="google icon" />
        <span className=" font-bold text-nowrap ">Se connecter avec Google</span>
      </Link>
    </div>
  );
};

export default GoogleButton;
