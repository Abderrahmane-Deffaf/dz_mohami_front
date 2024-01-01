import { MapPin, Phone } from "lucide-react";
import Stars from "../Components/reusable/Stars";
import CostumLink from "../Components/reusable/CostumLink";
import CastumButton from "./reusable/CastumButton";


const SearchCard = ({ name, image,location, categories, numberOfStarts }) => {
    return (

        <div className="card px-6 py-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-sm mx-auto ">
                <div className="flex">
                    <img className="h-150 w-112  object-cover rounded-lg mr-3" src={image} alt="avocat-profile" />
                    <div className="information">
                        <h1 className="text-base font-bold mb-0">{name}</h1>
                        <p className="flex items-center text-yellow-400 font-bold">
                            <Stars numberOfStarts={numberOfStarts} />{numberOfStarts}</p> 
                            <h3 className="font-bold mt-4 text-base">Categories:</h3>
                        <p className="  text-gray-700  text-xs mb-12">{categories}</p>
                        <div className="flex">
                            {<MapPin size={16} />}
                            <p className="text-gray-500 text-xs mb-8 flex"> {location}</p>
                        </div>
                      

                    </div>
                    
                </div> 
                <div className="buttons flex space-x-3 justify-end">
                        <CastumButton  nom="Visiter le profile" textColor="blue" borderColor="blue"/>
                        <CostumLink dist={"/"} text={" (630) 984-7629"} icon={<Phone/>}/>
                        <CastumButton  nom="Réservez une heure" textColor="black" borderColor="black"/>
                </div>


            </div>
        </div>


    );
}
export default SearchCard;