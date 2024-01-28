import { MapPin } from "lucide-react";
import Stars from "../Components/reusable/Stars";
import CostumLink from "../Components/reusable/CostumLink";


const card = ({ name, image, location, categories, numberOfStarts }) => {

    return (

        <div className="card cursor-pointer select-none">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm max-h-sm mx-auto">
                <div className="flex">
                    <img className="h-150 w-112  object-cover rounded-lg mr-3" src={image} alt="avocat-profile" />
                    <div className="information">
                        <h1 className="text-base font-bold mb-0">{name}</h1>
                        <p className="flex items-center text-yellow-400 font-bold mb-12">
                            <Stars numberOfStarts={numberOfStarts} />{numberOfStarts}</p>
                        <div className="flex">
                            {<MapPin size={16} />}
                            <p className="text-gray-500 text-xs mb-8 flex"> {location}</p>
                        </div>

                    </div>
                </div>
                <h3 className="font-bold mt-4 text-base">Categories:</h3>
                <p className="  text-gray-700  text-xs">{categories}</p>
                <h3 className="font-bold mt-4 text-base">Descriptions:</h3>
                <p className="text-gray-700 text-xs mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex? Sit odit nemo voluptas dolore dolor, ratione labore? Sequinisi quos magni magnam iste Lorem ipsum dolor sit amet consectetur bradipisicing elit. Quasi, ex? Sit odit nemo voluptas dolore dolore.
                </p>

                <CostumLink dist={"/avocat-profile/:avocatId"} text={"Visiter le profile"} className="align-center" />


            </div>

        </div>
    );
}
export default card;