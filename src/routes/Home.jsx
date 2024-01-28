import image from "../assets/image.png";
import CostumLink from "../Components/reusable/CostumLink";
import React from "react";
import Carousel from "../Components/carousel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="flex items-center justify-between px-20 py-0">
        <div className="content">
          <h1 className="mb-10 text-custom-color">{t("home.title")}</h1>
          <p className="mb-16">{t("home.description")}</p>
          <CostumLink dist={"/search"} text={t("home.action")} />
        </div>
        <div>
          <img src={image} alt="illustration " />
        </div>
      </div>
      <div className="carousel p-20">
        <h3 className="text-center mb-20">{t("home.mostrated")}</h3>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
