import React from "react";
import {
  RiMapPinLine,
  RiQuestionLine,
  RiUserLine,
  RiHeartLine,
  RiShoppingBagLine,
  RiSearchLine,
} from "@remixicon/react";
const Nav = () => {
  return (
    <header className="w-full shadow-sm">
      <nav className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto h-20 flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl tracking-[6px] font-light">ECOM</h1>
          </div>

          <ul className="hidden lg:flex items-center gap-10 text-[15px] uppercase font-medium">
            <li className="cursor-pointer hover:text-gray-500">New In</li>

            <li className="cursor-pointer hover:text-gray-500">Women</li>

            <li className="cursor-pointer hover:text-gray-500">Men</li>

            <li className="cursor-pointer hover:text-gray-500">Shoes</li>

            <li className="cursor-pointer hover:text-gray-500">Accessories</li>

            <li className="cursor-pointer hover:text-gray-500">Sale</li>
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

            <div className="relative cursor-pointer">
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
