import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useContext } from "react";
import { adminState } from "@/routes/AdminDashboard";
import {
  acceptAvocat,
  blockAvocat,
  deblockAvocat,
  deleteAvocat,
  refuserAvocat,
} from "@/Fetches/adminDashboard";
import { useToast } from "./ui/use-toast";
/* 
"result": [
    {
      "id": 429,
      "avocatId": 429,
      "nom": "deffaf",
      "prenom": "abderrahmane",
      "email": "admin@admin.com",
      "createdAt": "2024-01-28T10:16:52",
      "address": "FQ9Q+7J Beni Maouche, Algérie",
      "wilaya": "béjaïa",
      "phoneNumber": "0556043325",
      "facebookUrl": "facebook.com",
      "description": "hello",
      "categories": [
        "DROIT ADMINISTRATIF",
        "DROIT AFFAIRES"
      ],
      "rate": 0,
      "imageUrl": "http://localhost:8000/avocat/image/429.png"
    }
  ]
*/
export const amdinColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Prénom",
  },
  {
    accessorKey: "phoneNumber",
    header: "Téléphone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "wilaya",
    header: "Wilaya",
  },
  {
    accessorKey: "isBlocked",
    header: "Bloqué",
    cell: ({ row }) => {
      return <>{row.original.isBlocked ? "True" : "false"}</>;
    },
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ row }) => {
      return (
        <div className="flex flex-wrap gap-1">
          {row.original.categories.map((Element, index) => (
            <span className="p-1 rounded-lg border border-blue " key={index}>
              {Element}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span
          className={` uppercase  rounded-lg p-1 ${
            row.original.status == "pending"
              ? "bg-midGray "
              : row.original.status == "accepted"
                ? "bg-green text-white"
                : row.original.status == "refused"
                  ? "bg-yellow text-white "
                  : "bg-red text-white"
          }`}
        >
          {row.original.status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { toast } = useToast();
      const { setUpdateDashboard } = useContext(adminState);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="table" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Button
                onClick={async () => {
                  // define the action
                  if (
                    row.original.status == "pending" ||
                    row.original.status == "refused"
                  ) {
                    // accepting action
                    try {
                      const res = await acceptAvocat(row.original.id);
                      console.log(res);
                      if (res?.detail) {
                        toast({
                          description: res?.detail,
                        });
                        setUpdateDashboard(Date.now());
                      }
                    } catch (e) {
                      toast({
                        description: "error",
                        variant: "destructive",
                      });
                    }
                  } else if (
                    row.original.status == "accepted" &&
                    !row.original.isBlocked
                  ) {
                    //block action
                    try {
                      const res = await blockAvocat(row.original.id);
                      console.log("bock", res);

                      if (res?.detail) {
                        toast({
                          description: res?.detail,
                        });
                        setUpdateDashboard(Date.now());
                      }
                    } catch (e) {
                      toast({
                        description: "error",
                        variant: "destructive",
                      });
                    }
                  } else if (row.original.isBlocked) {
                    // debloquer action
                    try {
                      const res = await deblockAvocat(row.original.id);
                      console.log("bock", res);

                      if (res?.detail) {
                        toast({
                          description: res?.detail,
                        });
                        setUpdateDashboard(Date.now());
                      }
                    } catch (e) {
                      toast({
                        description: "error",
                        variant: "destructive",
                      });
                    }
                  }
                }}
                variant="action"
              >
                {row.original.status == "pending" ||
                row.original.status == "refused" ? (
                  <>Accepté</>
                ) : row.original.status == "accepted" &&
                  !row.original.isBlocked ? (
                  <>Bloqué</>
                ) : row.original.isBlocked ? (
                  <>Débloquer</>
                ) : null}
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={async () => {
                  // define the action
                  if (row.original.status == "pending") {
                    // refuser action
                    try {
                      const res = await refuserAvocat(row.original.id);
                      console.log(res);
                      if (res?.detail) {
                        toast({
                          description: res?.detail,
                        });
                        setUpdateDashboard(Date.now());
                      }
                    } catch (e) {
                      toast({
                        description: "error",
                        variant: "destructive",
                      });
                    }
                  } else {
                    //supprimer action
                    try {
                      const res = await deleteAvocat(row.original.id);
                      console.log("bock", res);

                      if (res?.detail) {
                        toast({
                          description: res?.detail,
                        });
                        setUpdateDashboard(Date.now());
                      }
                    } catch (e) {
                      toast({
                        description: "error",
                        variant: "destructive",
                      });
                    }
                  }
                }}
                variant="action"
              >
                {row.original.status == "pending" ? (
                  <>Refuser</>
                ) : (
                  <>Supprimer</>
                )}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
