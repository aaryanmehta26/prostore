import React from "react";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  console.log("@@@@", latestProducts);
  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
