"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColorColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <span>{row.original.value}</span>
        <div
          style={{ backgroundColor: row.original.value }}
          className="p-3 border rounded-full"
        ></div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
