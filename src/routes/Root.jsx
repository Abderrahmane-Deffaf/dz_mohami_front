/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Root = () => {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
