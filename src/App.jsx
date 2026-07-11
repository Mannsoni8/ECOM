import React from "react";
import Nav from "./components/Nav";
import ProductCardGrid from "./components/ProductCardGrid";

const App = () => {
  return (
    <div className="bg-cyan-900">
      <Nav />
      <ProductCardGrid />
    </div>
  );
};

export default App;
