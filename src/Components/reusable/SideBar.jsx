import React from 'react'
import Profile from './Profile'
import { Home, User, LogOut } from "lucide-react";
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const SideBar = () => {
  return (
    <div className="text-white bg-orange basis-[20%] sticky top-0  h-screen ">
      <Profile image={null} text={"Profile Avocat"} fb={"image d'avocat"} />
      <div>
        <Link className="flex gap-2 px-2 py-1 " to={"/"}>
          <Home />
          Home
        </Link>
        <Link className="flex gap-2 px-2 py-1 " to={"/"}>
          <User />
          Modifier el profile
        </Link>
      </div>
      <Button>
        <LogOut />
        Se déconnecter
      </Button>
    </div>
  );
}

export default SideBar