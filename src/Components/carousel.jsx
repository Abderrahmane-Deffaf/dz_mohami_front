/* eslint-disable import/no-unresolved */

import React from "react";
import avocat1 from "../assets/avocat/avocat1.png";
import Card from "@/Components/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/Components/ui/carousel";
const carousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} image={avocat1} location={"batns, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ranim Benkerri"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Abdrhman deffaf"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ahmed Gouasmia"} image={avocat1} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Abdnour zermat"} image={avocat1} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"chiheb hamaz"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} image={avocat1} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Ranim benkerri"} image={avocat1} location={"Setif, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card name={"Brandie Luis"} image={avocat1} location={"17 october, Bba, Algereie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="5"/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}
export default carousel;