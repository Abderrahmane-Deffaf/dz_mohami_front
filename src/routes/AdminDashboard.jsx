// eslint-disable-next-line import/no-unresolved
import { getAdminData } from "@/Fetches/adminDashboard";
// eslint-disable-next-line import/no-unresolved
import { amdinColumns } from "@/components/AdminCols";
// eslint-disable-next-line import/no-unresolved
import AdminFilter from "@/components/AdminFilter";
// eslint-disable-next-line import/no-unresolved
import AdminSideBar from "@/components/reusable/AdminSideBar";
// eslint-disable-next-line import/no-unresolved
import { DataTable } from "@/components/reusable/DataTable";
// eslint-disable-next-line import/no-unresolved
import Loader from "@/components/reusable/Loader";
import { useQuery } from "@tanstack/react-query";

const AdminDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["adminData"],
    queryFn: async () => {
      return getAdminData();
    },
  });

  console.log(data);

  return (
    <div className="flex  bg-lightGray w-full ">
      <AdminSideBar />
      <div className="flex basis-[80%] flex-col gap-6 p-6">
        <AdminFilter />
        {isLoading ? (
          <Loader />
        ) : (
          <DataTable
            columns={amdinColumns}
            data={data}
            pageCount={1}
            pageSize={5}
            setPage={null}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
