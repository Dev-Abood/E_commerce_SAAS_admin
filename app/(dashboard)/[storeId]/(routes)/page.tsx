import { getGraphRevenue } from "@/actions/get-graph-revenue";
import getProductsInStockCount from "@/actions/get-products-count";
import getSalesCount from "@/actions/get-sales-count";
import getTotalRevenue from "@/actions/get-total-revenue";
import Heading from "@/components/heading";
import Overview from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign, Package } from "lucide-react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const graphData = await getGraphRevenue(params.storeId);
  const salesCount = await getSalesCount();
  const productsInStockCount = await getProductsInStockCount();
  const totalRevenue = await getTotalRevenue();
  const store = await prismadb.stores.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="p-8 pt-6 space-y-4">
        <Heading title="Dashboard" description="Overview of your store" />
        <Separator />
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">
                Total revenue
              </CardTitle>
              <DollarSign size={20} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatter.format(totalRevenue)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">Sales</CardTitle>
              <CreditCard size={20} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{`+${salesCount}`}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold">
                Products In Stock
              </CardTitle>
              <Package size={20} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{productsInStockCount}</div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview data={graphData} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
