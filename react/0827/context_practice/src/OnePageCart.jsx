import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// 커스텀 훅
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  // 카트의 상태를 관리
  const [cart, setCart] = useState([]);

  console.log(cart);

  //카트에 상품 추가하기
  const addToCart = (product) => {
    setCart((prevCart) => {
      // 카트에 상품이 이미 존재하는지 확인
      const isExist = prevCart.find((item) => item.id === product.id);

      // 상품이 이미 존재하는 경우
      if (isExist) {
        return prevCart.map((item) => {
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      }

      // 상품이 카트에 처음 들어가는 경우
      return [...prevCart, { ...product, count: 1 }];
    });
  };

  // 카트의 상품 제거하기
  const removeCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => {
        return productId !== item.id;
        // === 삭제하려고 하는 요소만 반환
        // !== 삭제하려고 하는 요소만 빼고 나머지 배열을 반환
      });
    });
  };

  // 카트의 상품 갯수 구하기
  const getTotalCount = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCart, getTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

const Header = () => {
  const { getTotalCount } = useCart();
  return (
    <header>
      <h1>장바구니</h1>
      <p>장바구니에 있는 상품 갯수 : {getTotalCount()}</p>
    </header>
  );
};

const ProductList = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
    { id: 4, name: "에어팟", price: 300 },
  ];
  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              {item.name} : ￦{item.price}
              <button onClick={() => addToCart(item)}>
                장바구니에 추가하기
              </button>
              {/* onClick은 eventListner => 너 실행해 가 아니라 너 불러올꺼야 
              onClick은 함수가 필요한데 addToCart(item)은 값이다.
              함수로 등록하기 위해서 익명함수를 넣어줘야 안전
              익명함수 없으면 값을 실행한것으로 아무일도 일어나지 않음*/}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const MyCart = () => {
  const { cart, removeCart } = useCart();

  return (
    <>
      <h2>담은 리스트</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - 수량 : {item.count}
              <button onClick={() => removeCart(item.id)}>삭제하기</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <MyCart />
    </CartProvider>
  );
};

export default App;
