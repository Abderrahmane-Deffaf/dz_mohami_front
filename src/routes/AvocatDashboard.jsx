import { useQuery } from "@tanstack/react-query";
// eslint-disable-next-line import/no-unresolved
import { getAvocatBookings } from "@/Fetches/avocatDashboard";
// eslint-disable-next-line import/no-unresolved
import Loader from "@/components/reusable/Loader";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
// eslint-disable-next-line import/no-unresolved
} from "@/components/ui/dropdown-menu";
// eslint-disable-next-line import/no-unresolved
import { Button } from "@/components/ui/button";

const AvocatDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["listOfMeetings"],
    queryFn: async () => {
      return getAvocatBookings();
    },
  });
  console.log(data);


  return (
    <div className="basis-[80%] space-y-[5rem] p-8 ">
      <h1 className="text-center">La liste des rendez vous</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4">
          {data?.map((Element, index) => (
            <div
              className="flex items-center justify-between bg-white px-3 py-2 shadow rounded-lg"
              key={index}
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="font-semibold ">{Element.user_name}</span>
                  <span>{Element.date}</span>
                </div>
                <div>
                  <p className="font-semibold">Description</p>
                  <p>{Element.description}</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col ">
                    <span className=" font-semibold">Téléphone</span>
                    <a href={`tel:${Element.phone_number}`}>
                      {Element.phone_number}
                    </a>
                  </div>
                  <div className="flex flex-col ">
                    <span className=" font-semibold">Date</span>
                    <div className="flex gap-2">
                      <span>{Element.date_of_booking}</span>
                      <span>{Element.hour_of_booking}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Button variant="action">C est fait</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button variant="action">Pas fait</Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvocatDashboard;
