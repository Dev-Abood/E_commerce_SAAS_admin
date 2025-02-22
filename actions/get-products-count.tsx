import prismadb from "@/lib/prismadb";

const getProductsInStockCount = async (): Promise<number> => {
  const salesCount = await prismadb.product.count({
    where: {
      isArchived: false,
    },
  });

  return salesCount;
};

export default getProductsInStockCount;
