import { MapPin, Star } from "lucide-react";
import avocat1 from "../assets/avocat1.png";


const card = ({ name, location, categories }) => {
    return (

        <div className="card">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm max-h-sm mx-auto">
                <div className="flex">
                    <img className="h-150 w-112  object-cover rounded-lg mr-3" src={avocat1} alt={avocat1} />
                    <div className="information">
                        <h1 className="text-base font-bold mb-0">{name}</h1>
                        <h2 className="text-yellow-400 font-bold mb-12 flex">
                            {<Star />}
                            {<Star />}
                            {<Star />}
                            {<Star />}
                            {<Star />} 4.5</h2>
                        <div className="flex">
                            {<MapPin size={16} />}
                            <p className="text-gray-500 text-xs mb-8 flex"> {location}</p>
                        </div>

                    </div>
                </div>
                <h3 className="font-bold mt-4 text-base">Categories:</h3>
                <p className="  text-gray-700  text-xs">{categories}</p>
                <h3 className="font-bold mt-4 text-base">Descriptions:</h3>
                <p className="text-gray-700 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex? Sit odit nemo voluptas dolore dolor, ratione labore? Sequinisi quos magni magnam iste Lorem ipsum dolor sit amet consectetur bradipisicing elit. Quasi, ex? Sit odit nemo voluptas dolore dolore.
                </p>
            </div>
        </div>


    );
}
export default card;