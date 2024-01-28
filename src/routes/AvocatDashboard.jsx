import { useQuery } from "@tanstack/react-query";
import { getAvocatBookings } from "@/Fetches/avocatDashboard";
import Loader from "@/components/reusable/Loader";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useContext } from "react";
import { authContext } from "./AuthContext";

const AvocatDashboard = () => {
  const { user } = useContext(authContext);

  console.log(user);

  const { data, isLoading } = useQuery({
    queryKey: ["listOfMeetings"],
    queryFn: async () => {
      return getAvocatBookings(user);
    },
  });
  console.log(data);

  return (
    <div className="basis-[80%] space-y-[5rem] p-8 ">
      <h1 className="text-center">La liste des rendez vous</h1>
      {isLoading ? (
        <Loader />
      ) : (
        data && (
          <div className="flex flex-col gap-4">
            {data?.map((Element, index) => (
              <div
                className="flex items-center justify-between bg-white px-3 py-2 shadow rounded-lg"
                key={index}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <span className="font-semibold ">
                      {Element.userName} {Element.userPrenom}
                    </span>
                    <span>{Element.date}</span>
                  </div>
                  <div>
                    <p className="font-semibold">Description</p>
                    <p>{Element.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex flex-col ">
                      <span className=" font-semibold">Téléphone</span>
                      <a href={`tel:${Element.phoneNumber}`}>
                        {Element.phoneNumber}
                      </a>
                    </div>
                    <div className="flex flex-col ">
                      <span className=" font-semibold">Date</span>
                      <div className="flex gap-2">
                        <span>{moment(Element.date).format("dddd")}</span>
                        <span>
                          {Element.end} {Element.start}
                        </span>
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
        )
      )}
      {!data && <p className=" text-red">There is an error</p>}
    </div>
  );
};

export default AvocatDashboard;
