import prismadb from "@/lib/prismadb";

const getTotalRevenue = async (): Promise<number> => {
  const orders = await prismadb.order.findMany({
    where: {
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  let totalRevenue = 0;

  orders.forEach((order) => {
    order.orderItems.forEach((item) => {
      totalRevenue += Number(item.product.price);
    });
  });

  return totalRevenue;
};

export default getTotalRevenue;
