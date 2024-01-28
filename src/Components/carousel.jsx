import React, { useState, useEffect } from "react";
import avocat1 from "../assets/avocat/avocat1.png";
import Card from "../Components/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../Components/ui/carousel";

const CarouselComponent = () => {
    const [topRatedLawyers, setTopRatedLawyers] = useState([]);
    const [limite] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/rating/top-rated?$limit=" + limite);
                const data = await response.json();
                setTopRatedLawyers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Carousel>
            <CarouselContent>
                {topRatedLawyers.map((lawyer) => (
                    <CarouselItem key={lawyer.id}>
                        <Card
                            name={lawyer.name}
                            image={avocat1} 
                            location={lawyer.location}
                            categories={lawyer.categories.join(", ")}
                            numberOfStarts={lawyer.rating}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselComponent;
