"use client";

import Heading from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import ApiList from "@/components/ui/api-list";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store."
        />
      </div>
      <Separator />
      <DataTable searchKey="products" data={data} columns={columns} />
      <Heading title={`API`} description="API calls for orders" />
      <Separator />
      <ApiList entityName="orders" entityIdName="orderId" />
    </>
  );
};
export default OrderClient;
