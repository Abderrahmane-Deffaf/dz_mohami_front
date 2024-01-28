import SideBar from "@/components/reusable/SideBar";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "./AuthContext";
import Loader from "@/components/reusable/Loader";
import { getUser } from "@/Fetches/global";

const AvocatDashboardRoot = () => {
  const { user } = useContext(authContext);
  console.log(user);

  const { data, isLoading } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      return getUser(user, "/auth/me");
    },
  });
  console.log(isLoading);

  console.log(data);

  return (
    <div className="flex bg-lightGray w-full ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar
            prenom={data?.prenom || null}
            nom={data?.nom || null}
            imageUrl={data?.imageUrl}
          />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default AvocatDashboardRoot;
