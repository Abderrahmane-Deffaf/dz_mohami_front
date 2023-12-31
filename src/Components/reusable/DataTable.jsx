import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
// eslint-disable-next-line import/no-unresolved
} from "@/components/ui/table";
// eslint-disable-next-line import/no-unresolved
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

/* will contain our <DataTable /> component */
// this could be a reusable component

/* interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageCount: number;
  setPage: any;
  pageIndex: number;
  pageSize: number;
  type: string; 
} */

export function DataTable({
  columns,
  data,
  pageCount,
  setPage,
  pageIndex,
  pageSize,
}) {
  /* const [{  pageSize }, setPagination] = useState<PaginationState>({
    pageSize: pageSizeNumber,
  }); */

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    pageCount: pageCount,
    onPaginationChange: () => {
      //setPagination(value);

      if (table.getCanNextPage()) {
        setPage(pageIndex + 1);
      } else if (table.getCanPreviousPage()) {
        setPage(pageIndex - 1);
      }
    },
  });

  
  return (
    <div>
      <div className="rounded-md bg-white shadow">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className=" bg-midGray " key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <Button
          size="sm"
          onClick={() => {
            //table.previousPage();
            setPage(pageIndex - 1);
          }}
          disabled={!table.getCanPreviousPage()}
          className="bg-midBlue"
        >
          Précédente
        </Button>
        <p className=" text-sm text-blue">
          Page {pageIndex + 1} sur {table.getPageCount()}
        </p>
        <Button
          size="sm"
          onClick={() => {
            //table.nextPage();

            setPage(pageIndex + 1);
          }}
          disabled={!table.getCanNextPage()}
          className="bg-midBlue"
        >
          Prochaine
        </Button>
      </div>
    </div>
  );
}
