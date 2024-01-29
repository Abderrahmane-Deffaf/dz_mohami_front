import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.jpg";
import Card from "../Components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/Components/ui/carousel";
const carousel = () => {
  return (
    <div dir="ltr">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"kamel missoum"}
              image={avatar}
              location={"alger, Algérie"}
              categories={
                "Droit administratif,Droit commercial, Droit de l'environnement, Droit de l'immobilier, Droit des assurances ..."
              }
              numberOfStarts="1"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"mekki mekki"}
              image={avatar}
              location={"alger, Algérie"}
              categories={
                "Droit commercial, Droit de l'environnement, Droit de l'immobilier, Droit des assurances, Droit familial ..."
              }
              numberOfStarts="2"
            />
          </CarouselItem>

          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"dif mohamed"}
              image={avatar}
              location={"djelfa"}
              categories={
                "Droit administratif,Droit commercial, Droit de l'environnement, Droit de l'immobilier, Droit des assurances ..."
              }
              numberOfStarts="3"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"dif mohamed"}
              image={avatar}
              location={"djelfa"}
              categories={
                "Droit administratif,Droit commercial, Droit de l'environnement, Droit de l'immobilier, Droit des assurances ..."
              }
              numberOfStarts="3"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"avocatalgerien avocatalgerien"}
              image={avatar}
              location={"batna"}
              categories={
                "Droit administratif,Droit commercial, Droit de l'environnement, Droit de l'immobilier, Droit des assurances ..."
              }
              numberOfStarts="2"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default carousel;

// LINK

// import React, { useState, useEffect } from "react";
// import avocat1 from "../assets/avocat/avocat1.png";
// import Card from "../Components/card";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselPrevious,
//     CarouselNext,
// } from "@/Components/ui/carousel";
// const carousel = () => {
//     const [Ratedavocats, setAvocats] = useState([]);
//     useEffect(() => {
//         const fetchAvocats = async () => {
//             const response = await fetch(
//                 "http://localhost:8000/rating/top-rated?limit=6"
//             );
//             const data = await response.json();
//             console.log(data)
//             if (Array.isArray(data)) {
//                 setAvocats(data);
//             } else {
//                 // Handle the case when data is not an array
//                 console.error("API did not return an array:", data);
//             }
//         };
//         fetchAvocats();
//     }, []);
//     return (
//         <div dir="ltr">
//             <Carousel>
//                 <CarouselContent>
//                     {Ratedavocats.map((avocat) => (
//                         <CarouselItem key={avocat.id}>
//                             <Card
//                                 name={avocat.name}
//                                 image={avocat1}
//                                 location={avocat.location}
//                                 categories={avocat.categories}
//                                 numberOfStarts={avocat.numberOfStarts}
//                                 desc={avocat.desc}
//                             />
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     );
// };
// export default carousel;
