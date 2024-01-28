import React, { useState, useEffect } from "react";
import avocat1 from "../assets/avocat/avocat1.png";
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
              name={"Brandie Luis"}
              image={avocat1}
              location={"batns, Algerie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="4.5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Ranim Benkerri"}
              image={avocat1}
              location={"Setif, Algerie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="4.5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Abdrhman deffaf"}
              image={avocat1}
              location={"Setif, Algerie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="4.5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Ahmed Gouasmia"}
              image={avocat1}
              location={"17 october, Bba, Algereie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="4.5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Abdnour zermat"}
              image={avocat1}
              location={"17 october, Bba, Algereie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"chiheb hamaz"}
              image={avocat1}
              location={"Setif, Algerie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Brandie Luis"}
              image={avocat1}
              location={"17 october, Bba, Algereie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Ranim benkerri"}
              image={avocat1}
              location={"Setif, Algerie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="5"
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card
              name={"Brandie Luis"}
              image={avocat1}
              location={"17 october, Bba, Algereie"}
              categories={
                "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
              }
              numberOfStarts="5"
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
