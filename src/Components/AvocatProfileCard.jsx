import { MapPin, Phone } from "lucide-react";
import Stars from "../Components/reusable/Stars";
import CostumLink from "../Components/reusable/CostumLink";
import DialogBookerAvocat from '../Components/reusable/BookerAvocat'
import map from "../assets/map.png";



const AvocatProfileCard = ({ name, image, location, categories, numberOfStarts, desc }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full mx-auto">
            <div className="card flex  justify-between" >
                <div>
                    <div className="flex">
                        <img className="h-150 w-112  object-cover rounded-lg mr-3" src={image} alt="avocat-profile" />
                        <div className="information">
                            <h1 className="text-base font-bold mb-0">{name}</h1>
                            <p className="flex items-center text-yellow-400 font-bold">
                                <Stars numberOfStarts={numberOfStarts} />{numberOfStarts}</p>
                            <h3 className="font-bold mt-4 text-base"><u>Categories:</u></h3>
                            <p className="  text-gray-700  text-xs mb-12">{categories}</p>
                            <div className="flex">
                                {<MapPin size={16} />}
                                <p className="text-gray-500 text-xs mb-8 flex"> {location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons flex space-x-3 mt-5">
                        <CostumLink dist={"/"} text={" (630) 984-7629"} icon={<Phone />} />
                        <DialogBookerAvocat />
                    </div>
                </div>
                <div className="img">
                    <img src={map} alt="user-loocation" />
                </div>

            </div>
            <div className="description border border-black p-4 rounded mt-5">
                <h2 className="font-bold text-lg mb-3 "><u>Description:</u></h2>
                <p className="text-gray-700 text-xs mb-12">{desc}.</p>
          
            </div>
        </div>




    );
}
export default AvocatProfileCard;