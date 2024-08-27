import Cart from "./contexts/Cart";
import { CartProvider } from "./contexts/CartContext";
import ProductList from "./contexts/ProductList";
import React from "react";

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Context 실습 장바구니</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
export default App;
