// eslint-disable-next-line import/no-unresolved
import SideBar from "@/components/reusable/SideBar";
import { Outlet } from "react-router-dom";

const AvocatDashboardRoot = () => {
  return (
    <div className="flex w-full ">
      <SideBar/>
      <Outlet />
    </div>
  );
};

export default AvocatDashboardRoot;
