import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
    accessorKey: "lname",
    header: "Prénom",
  },
  {
    accessorKey: "phone",
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
        <spna
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
        </spna>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
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
              <Button variant="action">
                {row.original.status == "pending" ||
                row.original.status == "refused" ? (
                  <>Accepté</>
                ) : row.original.status == "accepted" ? (
                  <>Bloqué</>
                ) : row.original.status == "blocked" ? (
                  <>Débloquer</>
                ) : null}
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="action">
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
