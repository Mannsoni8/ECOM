import React, { useContext } from "react";
import {
  RiMapPinLine,
  RiQuestionLine,
  RiUserLine,
  RiHeartLine,
  RiShoppingBagLine,
  RiSearchLine,
} from "@remixicon/react";
import { ProductContext } from "../context/ProductContext";
const Nav = () => {
  const { category, setCategory, setIsCartOpen } = useContext(ProductContext);

  return (
    <header className="w-full shadow-sm ">
      <nav className="border-b bg-amber-200">
        <div className="max-w-\[1400px\] mx-auto h-20 flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl tracking-[6px] font-light">ECOM</h1>
          </div>

          <ul className="hidden lg:flex items-center gap-10 text-[15px] uppercase font-medium">
            <li
              onClick={() => setCategory("all")}
              className={`cursor-pointer transition ${
                category === "all"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              All
            </li>

            <li
              onClick={() => setCategory("women's clothing")}
              className={`cursor-pointer transition ${
                category === "women's clothing"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Women
            </li>

            <li
              onClick={() => setCategory("men's clothing")}
              className={`cursor-pointer transition ${
                category === "men's clothing"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Men
            </li>

            <li
              onClick={() => setCategory("kid's clothing")}
              className={`cursor-pointer transition ${
                category === "kid's clothing"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              Kid
            </li>
          </ul>

          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center border rounded-full px-4 h-12 w-[320px]">
              <input
                type="text"
                placeholder="Search for items, brands..."
                className="flex-1 outline-none text-sm"
              />

              <RiSearchLine size={20} />
            </div>

            <RiUserLine
              size={23}
              className="cursor-pointer hover:text-gray-500"
            />

            <RiHeartLine
              size={23}
              className="cursor-pointer hover:text-gray-500"
            />

            <div
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer"
            >
              <RiShoppingBagLine size={23} className="hover:text-gray-500" />

              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
