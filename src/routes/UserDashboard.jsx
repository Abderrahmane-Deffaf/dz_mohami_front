import { getUser } from "@/Fetches/global";
import UserInformations from "../Components/UserInformations";
import UserReviews from "../Components/UserReviews";
import { useContext } from "react";
import Loader from "@/components/reusable/Loader";
import { authContext } from "./AuthContext";
import { useQuery } from "@tanstack/react-query";

const UserDashboard = () => {
  const { user } = useContext(authContext);
  console.log("user", user);

  const { data, isLoading } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      return getUser(user, "/auth/me");
    },
  });
  console.log("user", data);

  return (
    <div className="p-10">
      <h2>Bonjour {isLoading ? <Loader /> : `${data?.nom} ${data?.prenom}`}</h2>
      <UserInformations
        nom={data?.nom}
        prenom={data?.prenom}
        email={data?.email}
      />
      <h3>Reviews</h3>
      <UserReviews />
      <h3>Bookings</h3>
    </div>
  );
};

export default UserDashboard;
