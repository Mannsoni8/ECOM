import Nav from "./components/Nav";
import Content from "./components/Content";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import Cart from "./components/Cart";

const App = () => {
  let { isCartOpen } = useContext(ProductContext);
  return (
    <div className="bg-cyan-900">
      <Nav />

      {isCartOpen ? (
        <div>
          <Cart />
        </div>
      ) : (
        <div>
          <Content />
        </div>
      )}
    </div>
  );
};

export default App;
