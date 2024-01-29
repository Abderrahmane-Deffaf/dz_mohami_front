import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "@/assets/icons/google.svg";
import { Button } from "../ui/button";
import axios from "axios";
import { base_url } from "@/lib/constants";
import { authContext } from "@/routes/AuthContext";
import { getUser } from "@/Fetches/global";

const GoogleButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, setType } = useContext(authContext);

  useEffect(() => {
    async function getInfos(token) {
      try {
        const infos = await getUser(token, "/auth/me");
        console.log(infos);
        if (infos?.role == "admin") {
          navigate("/admin-dashboard");
        } else if (infos?.role == "user") {
          setType("user");
          navigate("/user-dashboard");
        }
      } catch (e) {
        console.log(e);
      }
    }
    let token = location?.search;
    if (token) {
      token = token.replace("?token=", "");
      if (token) {
        console.log(token);
        setUser(token);
        const currentDate = new Date();

        // Calculate the expiration date (current date + 8 hours)
        const expirationDate = new Date(
          currentDate.getTime() + 8 * 60 * 60 * 1000
        );

        // Convert the expiration date to the UTC format required by cookies
        const expiresUTC = expirationDate.toUTCString();
        document.cookie = `token=${token}; expires=${expiresUTC}; path=/`;
        console.log("Cookie set:", document.cookie);
        getInfos(token);
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
