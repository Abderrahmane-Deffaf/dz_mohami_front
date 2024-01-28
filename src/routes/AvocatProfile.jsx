import React from "react";
import AvocatProfileCard from "../Components/AvocatProfileCard";
import avocat1 from "../assets/avocat/avocat1.png";

import CastumButton from "../Components/reusable/CastumButton";
import Comment from "../Components/Comment";
import { Link } from "react-router-dom";
import AddComment from '../Components/AddComment'
import DialogCloseButton from '../Components/reusable/Dialog'

// import { FormControl, FormField, FormItem, FormLabel } from "../Components/ui/form";
// import { Checkbox } from "../Components/ui/checkbox";

const AvocatProfile = () => {
  // const DaysOfWorkList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi"];
  return (
    <div className='p-16'>
      <AvocatProfileCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5" desc="Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
      <div>
        <div className=" mt-10 mb-5">
          <h3>Les commentaire</h3>
          {/* if user not connected  */}
          <DialogCloseButton />
          {/* if user connected */}
          <AddComment />
        </div>
      </div>
    </div>
  );
};

export default AvocatProfile;
