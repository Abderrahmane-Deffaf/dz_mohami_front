import React from "react";
import Profile from "./Profile";
import { Home, LogOut } from "lucide-react";
import { Button } from "../ui/button";

const AdminSideBar = () => {

  return (
    <div className="text-white  px-4 py-16 flex flex-col justify-between items-center bg-blue basis-[20%] sticky top-0  h-screen ">
      <Profile image={null} text={"Profile Avocat"} fb={"image d'avocat"} />
      <div className="w-full font-bold space-y-2">
        <p
          className="flex w-full gap-2 px-2 py-1 bg-midBlue "
        >
          <Home />
          Home
        </p>
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

export default AdminSideBar;
