import { getAdminData } from "@/Fetches/adminDashboard";
import { amdinColumns } from "@/components/AdminCols";
import AdminFilter from "@/components/AdminFilter";
import AdminSideBar from "@/components/reusable/AdminSideBar";
import { DataTable } from "@/components/reusable/DataTable";
import Loader from "@/components/reusable/Loader";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import { getUser } from "@/Fetches/global";

export const adminState = createContext();

const AdminDashboard = () => {
  const [updateDashboard, setUpdateDashboard] = useState("sdfdsf");
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    name: "",
    wilaya: "",
    categories: "",
    status: "",
    isBlocked: "",
    page: page,
    limit: 5,
  });

  useEffect(() => {
    const newFilters = { ...filters, page: page };
    console.log("newFilters", newFilters);
    setFilters(newFilters);
  }, [page]);

  const { user } = useContext(authContext);

  const { data, isLoading } = useQuery({
    queryKey: ["adminData", updateDashboard, filters],
    queryFn: async () => {
      return getAdminData(user, filters);
    },
  });

  const { data: infos, isLoading: infosLoading } = useQuery({
    queryKey: ["admin-info"],
    queryFn: async () => {
      return getUser(user, "/auth/me");
    },
  });

  console.log(data);

  return (
    <adminState.Provider
      value={{ updateDashboard, setUpdateDashboard, filters, setFilters }}
    >
      <div className="flex  bg-lightGray w-full ">
        {infosLoading ? (
          <Loader />
        ) : (
          <AdminSideBar nom={infos?.nom} prenom={infos?.prenom} />
        )}
        <div className="flex basis-[80%] flex-col gap-[5rem] p-6">
          <AdminFilter />
          {isLoading ? (
            <Loader />
          ) : (
            <DataTable
              columns={amdinColumns}
              data={Array.isArray(data?.result) ? data?.result : []}
              pageCount={Math.ceil((data?.count || 0) / 5)}
              pageSize={5}
              setPage={(page) => setPage(page)}
              pageIndex={page}
            />
          )}
        </div>
      </div>
    </adminState.Provider>
  );
};

export default AdminDashboard;
