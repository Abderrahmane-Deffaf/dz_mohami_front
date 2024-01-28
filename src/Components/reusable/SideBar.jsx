import React from "react";
import Profile from "./Profile";
import { Home, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import avatar from "@/assets/avatar.jpg";

const SideBar = ({ nom, prenom, imageUrl }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[pathname.split("/").length - 1];

  const navigate = useNavigate();
  return (
    <div className="text-white px-4 py-16 flex flex-col justify-between items-center bg-blue basis-[20%] sticky top-0  h-screen ">
      <Profile
        image={avatar}
        text={nom && prenom ? `${nom} ${prenom}` : "profile"}
        fb={"image d'avocat"}
      />
      <div className="w-full font-bold space-y-2">
        <Link
          className={`flex w-full gap-2 px-2 py-1 ${
            path == "home" && "bg-midBlue "
          } `}
          to={"home"}
        >
          <Home />
          Home
        </Link>
        <Link
          className={`flex w-full gap-2 px-2 py-1 ${
            path == "edit-profile" && "bg-midBlue "
          } `}
          to={"edit-profile"}
        >
          <User />
          Modifier el profile
        </Link>
      </div>
      <Button
        className="px-2 hover:bg-midBlue  rounded-none justify-start w-full py-1"
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

export default SideBar;
