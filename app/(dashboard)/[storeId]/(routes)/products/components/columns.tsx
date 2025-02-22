"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  createdAt: string;
  isArchived: boolean;
  isFeatured: boolean;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "isArchived",
    header: "Archived",
  },

  {
    accessorKey: "isFeatured",
    header: "Featured",
  },

  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "size",
    header: "Size",
  },

  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <span>{row.original.color}</span>
        <div
          style={{ backgroundColor: row.original.color }}
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
