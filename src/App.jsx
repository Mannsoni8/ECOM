import React, { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  return (
    <div className="bg-cyan-900">
      <Nav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Content selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
