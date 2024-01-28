
import React from 'react';
import AvocatProfileCard from '../Components/AvocatProfileCard'
import avocat1 from "../assets/avocat/avocat1.png";
import Comment from '../Components/Comment';
import { Link } from "react-router-dom";
import AddComment from '../Components/AddComment'





// import { FormControl, FormField, FormItem, FormLabel } from "../Components/ui/form";
// import { Checkbox } from "../Components/ui/checkbox";


const AvocatProfile = () => {
  // const DaysOfWorkList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi"];
  return (
    <div className='p-16'>
      <AvocatProfileCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5" desc="Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
      <div>
        <div className="mt-10 mb-5">
          <h3>Les commentaire</h3>
          <AddComment />
        </div>
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Comment numberOfStarts="4" name="Ranim Benkerri" publicationDate="19 Janvier 2023" comment="Coby Boswell is an awesome lawyer! Very professional and dedicated to protecting the rights and best interests of a child. I felt much better with Coby as my lawyer. I was never stressed about the case because Coby was verywell prepared." />
        <Link
          className=" flex justify-center text-blue "
          to=""
        >
          View more reviews
        </Link>
      </div>

    </div>
  )
}

export default AvocatProfile

// link vesrion


// import React from "react";
// import AvocatProfileCard from "../Components/AvocatProfileCard";
// import avocat1 from "../assets/avocat/avocat1.png";

// import CastumButton from "../Components/reusable/CastumButton";
// import Comment from "../Components/Comment";
// import { Link } from "react-router-dom";
// import AddComment from '../Components/AddComment'
// import DialogCloseButton from '../Components/reusable/Dialog'

// // import { FormControl, FormField, FormItem, FormLabel } from "../Components/ui/form";
// // import { Checkbox } from "../Components/ui/checkbox";

// const AvocatProfile = () => {
//   // const DaysOfWorkList = ["dimanche", "lundi", "mardi", "mercredi", "jeudi"];
//   const [avocatProfile, setAvocat] = React.useState({});

//   React.useEffect(() => {
//     const fetchAvocat = async () => {
//       const response = await fetch(
//         "http://localhost:8000/admin/avocats/ALL?page_num=1&page_size=1"
//       );
//       const data = await response.json();
//       console.log(data)
//       if (Array.isArray(data)) {
//         setAvocats(data);
//       } else {
//         // Handle the case when data is not an array
//         console.error("API did not return an array:", data);
//       }

//     };
//     fetchAvocat();
//   }, []);
//   return (
//     <div className='p-16'>
//       {avocatProfile.map((avocat) => (
//         <AvocatProfileCard
//           key={avocat.id}
//           name={avocat.name}
//           image={avocat1}
//           location={avocat.location}
//           categories={avocat.categories}
//           numberOfStarts={avocat.numberOfStarts}
//           desc={avocat.desc}
//         />))}
//       <AvocatProfileCard name={"Brandie Luis"} image={avocat1} location={"batna, Algerie"} categories={"lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum"} numberOfStarts="4.5" desc="Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />

//       <div>
//         <div className=" mt-10 mb-5">
//           <h3>Les commentaire</h3>
//           {/* if user not connected  */}
//           <DialogCloseButton />
//           {/* if user connected */}
//           <AddComment />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvocatProfile;
