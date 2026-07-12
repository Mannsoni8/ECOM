import React from "react";
import { RiHeartLine, RiStarFill, RiShoppingBagLine } from "@remixicon/react";
const ProductCard = ({ product }) => {
  return (
    <div className="group w-70 bg-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border">
      <div className="relative bg-gray-500 h-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-105 duration-300"
        />

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
          <RiHeartLine size={20} />
        </button>
        <span className="absolute left-4 top-4 bg-black text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <RiStarFill className="text-yellow-500" />

          <span className="font-medium">{product.rating.rate}</span>

          <span className="text-gray-400">({product.rating.count})</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <h2 className="text-2xl font-bold">${product.price}</h2>

          <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800">
            <RiShoppingBagLine size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
