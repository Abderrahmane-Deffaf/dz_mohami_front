import React from "react";
import { Link } from "react-router-dom";
import logo_text from "./../assets/logo_text.svg";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" bg-white ">
      <div className=" max-w-[1170px] py-4 overflow-hidden flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={logo_text} alt="logo dz mohami" />
        </Link>
        <div className="flex gap-6 ">
          <Link
            className=" text-midBlue relative font-bold after:block after:content-[''] after:h-[300%] after:-top-[100%] after:w-[1px] after:bg-gray after:-right-3 after:absolute"
            to="/avocat-register"
          >
            {t("home.signup")}
          </Link>
          <Link className=" flex gap-2" to="/login">
            <User />
            <span className=" text-gray font-bold ">{t("home.signin")}</span>
          </Link>
          <Button
            variant="link"
            onClick={() => {
              if (i18n.language == "ar") {
                i18n.changeLanguage("fr");
              } else {
                i18n.changeLanguage("ar");
              }
            }}
          >
            {i18n.language == "ar" ? "francais" : "arabe"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
