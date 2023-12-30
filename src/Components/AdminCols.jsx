
//import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
/* export type Payment = {
  id: number
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
} */

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
        <div>
          {
            row.original.categories.map((Element, index)=> (
              <span key={index}>{Element}</span>
            ))
          }
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
  },
];
