import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import google from "@/assets/icons/google.svg";
import { Button } from "../ui/button";

const GoogleButton = () => {
  /* async function handleClick() {
    try {
      const res = await fetch(url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  } */
  const location = useLocation();

  useEffect(() => {
    let token = location?.search;
    if (token) {
      token = token.replace("?token=", "");

      if (token) {
        console.log(token);

        // getting the info and redirecting the user
        // then store the user token
      }
    }
  }, [location]);

  console.log(location?.search);

  return (
    <div>
      <Link
        to={
          "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=973975745540-bjlvhrvn1qusqq785l1i3cklkab9gp4f.apps.googleusercontent.com&redirect_uri=http://localhost:8000/auth/redirect&scope=openid%20profile%20email&access_type=offline"
        }
        className="flex gap-2 items-center rounded-lg  px-8 py-2 w-fit bg-white "
      >
        <img
          className=" w-[2rem] aspect-square"
          src={google}
          alt="google icon"
        />
        <span className=" font-bold text-nowrap ">
          Se connecter avec Google
        </span>
      </Link>
    </div>
  );
};

export default GoogleButton;
