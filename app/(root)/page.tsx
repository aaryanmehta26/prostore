import React from "react";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

const HomePage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="New Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
