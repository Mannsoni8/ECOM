import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

const ProductCardGrid = () => {
  const { filteredProducts, loading } = useContext(ProductContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto mt-2 mb-2 p-15 bg-amber-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Latest Collection
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">New Arrivals</h2>

          <p className="text-gray-500 mt-2">
            Discover fresh styles curated just for you.
          </p>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCardGrid;
