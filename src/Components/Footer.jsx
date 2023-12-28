import React from "react";
import { Link } from "react-router-dom";
import logo_white_big from "./../assets/logo_white_big.svg";
import CostumLink from "./reusable/CostumLink";

const Footer = () => {
  return (
    <div className=" bg-gray  w-full ">
      <div className="text-white max-w-[1170px] py-7 flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={logo_white_big} alt="logo dz mohami" />
        </Link>
        <div className="flex flex-col gap-6 ">
          <p className=" max-w-[26ch] font-bold text-3xl ">
            Des avocats expérimentés sont prêts à aider.
          </p>
          <CostumLink text={"Trouver un avocat"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
