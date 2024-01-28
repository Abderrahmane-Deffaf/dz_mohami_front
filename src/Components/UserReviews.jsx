import { useContext } from "react";

import AvocatList from "./AvocatList";
import { authContext } from "@/routes/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getUserReviews } from "@/Fetches/userDashboard";
import Loader from "./reusable/Loader";
const UserReviews = () => {
  const { user } = useContext(authContext);
  const { data, isLoading } = useQuery({
    queryKey: ["user-reviews"],
    queryFn: async () => {
      return getUserReviews(user);
    },
  });
  console.log("user-reviews", data);
  return (
    <div className="border border-black p-4 rounded mt-5">
      {isLoading ? <Loader /> : null}
      {/* <AvocatList /> */}
    </div>
  );
};

export default UserReviews;
