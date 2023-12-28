import React from 'react'
import { Link } from 'react-router-dom';
import logo_text from './../assets/logo_text.svg' ; 
import { User } from "lucide-react";


const NavBar = () => {
  return (
    <div className=" bg-white ">
      <div className=" max-w-[1170px] py-7 flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={logo_text} alt="logo dz mohami" />
        </Link>
        <div className="flex gap-6 ">
          <Link
            className=" text-midBlue relative font-bold after:block after:content-[''] after:h-[400%] after:-top-[150%] after:w-[1px] after:bg-gray after:-right-3 after:absolute"
            to="/avocat-register"
          >
            Développez votre cabinet
          </Link>
          <Link className=" flex gap-2" to="/login">
            <User />
            <span className=" text-gray font-bold ">Se connecter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar