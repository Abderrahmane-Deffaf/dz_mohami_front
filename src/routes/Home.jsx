/* eslint-disable import/no-unresolved */
import image from "../assets/image.png";
import CostumLink from "../Components/reusable/CostumLink";
import React from "react";  
// import Card from "../Components/card";
import Carousel from "../Components/carousel";


const Home = () => {
  return (
    <div className="container">
      
      <div className="flex items-center justify-between px-20 py-0" >
        <div className="content">
          <h1 className="mb-10 text-custom-color">Avocats expérimentés <br />sont prêts à aider.</h1>
          <p className="mb-16">Bienvenue chez Avvo, où lexpertise juridique <br /> rencontre le service exceptionnel.</p>
          <CostumLink dist={"/search"} text={"Trouver un avocat"} />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="carousel p-20">
         <h3 className="text-center mb-20">Avocats de premier plan près de chez vous.</h3>  
          <Carousel />
      </div>
     
      </div>
  )
}

export default Home