import React from "react";
import Profile from "./Profile";
import { Home, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const SideBar = ({ nom, imageUrl }) => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div className="text-white px-4 py-16 flex flex-col justify-between items-center bg-blue basis-[20%] sticky top-0  h-screen ">
      <Profile
        image={imageUrl ? imageUrl : null}
        text={nom ? nom : "profile"}
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
        className="px-2 hover:bg-midBlue rounded-none justify-start w-full py-1"
        variant="link"
      >
        <LogOut />
        Se déconnecter
      </Button>
    </div>
  );
};

export default SideBar;
