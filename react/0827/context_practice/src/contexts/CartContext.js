import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 장바구니에 추가하기
  const addCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // 장바구니에서 삭제하기
  const removeCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // 장바구니에 담긴 상품의 금액
  const calcTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  // 장바구니에 담긴 상품의 갯수
  const totalCart = () => {
    return cart.reduce((sum, item) => sum + item.quantity);
  };

  return (
    <CartContext.Provider
      value={{ cart, addCart, removeCart, calcTotal, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
