/* eslint-disable import/no-unresolved */

import React from "react";
import Card from "@/Components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/Components/ui/carousel";
const carousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} location={"batns, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ranim Benkerri"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Abdrhman deffaf"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ahmed Gouasmia"} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Abdnour zermat"} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"chiheb hamaz"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ranim benkerri"} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
export default carousel;
