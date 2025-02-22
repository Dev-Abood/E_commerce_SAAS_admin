import prismadb from "@/lib/prismadb";

const getSalesCount = async (): Promise<number> => {
  const salesCount = await prismadb.order.count({
    where: {
      isPaid: true,
    },
  });

  return salesCount;
};

export default getSalesCount;
