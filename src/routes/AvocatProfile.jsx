import React from "react";
import AvocatProfileCard from "../Components/AvocatProfileCard";
import avocat1 from "../assets/avocat/avocat1.png";
import CastumButton from "../Components/reusable/CastumButton";
import Comment from "../Components/Comment";
import { Link } from "react-router-dom";

// import { FormControl, FormField, FormItem, FormLabel } from "../Components/ui/form";
// import { Checkbox } from "../Components/ui/checkbox";

const AvocatProfile = () => {
  // const DaysOfWorkList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi"];
  return (
    <div className="w-full mt-9">
      <div className=" max-w-[1170px] mx-auto">
        <AvocatProfileCard
          name={"Brandie Luis"}
          image={avocat1}
          location={"batna, Algerie"}
          categories={
            "lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"
          }
          numberOfStarts="4.5"
          desc="Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <div>
          <div className="mt-10 flex justify-between mb-5">
            <h3>Les commentaire</h3>
            <CastumButton
              nom="Écrire une critique"
              textColor="black"
              borderColor="black"
            />
          </div>
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Comment
            numberOfStarts="4"
            name="Ranim Benkerri"
            publicationDate="19 Janvier 2023"
            comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared."
          />
          <Link className=" flex justify-center text-blue " to="">
            View more reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvocatProfile;
