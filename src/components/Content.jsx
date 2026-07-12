import React from "react";
import ProductCardGrid from "./ProductCardGrid";

const Content = ({ selectedCategory }) => {
  return (
    <div className="h-[calc(100vh-82px)] overflow-y-auto">
      <ProductCardGrid selectedCategory={selectedCategory} />
    </div>
  );
};

export default Content;
