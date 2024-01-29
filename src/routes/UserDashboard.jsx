import { getUser } from "@/Fetches/global";
import UserInformations from "../Components/UserInformations";
import UserReviews from "../Components/UserReviews";
import { useContext } from "react";
import Loader from "@/components/reusable/Loader";
import { authContext } from "./AuthContext";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="p-10 flex flex-col gap-4">
      <h2>Bonjour {isLoading ? <Loader /> : `${data?.nom} ${data?.prenom}`}</h2>
      <UserInformations
        nom={data?.nom}
        prenom={data?.prenom}
        email={data?.email}
      />
      <h3>Reviews</h3>
      <UserReviews />
      <h3>Bookings</h3>
      <Button
        className="px-2 hover:bg-midBlue  rounded-none justify-start w-fit py-1"
        variant="link"
        onClick={() => {
          navigate("/");
          document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }}
      >
        <LogOut />
        Se déconnecter
      </Button>
    </div>
  );
};

export default UserDashboard;
