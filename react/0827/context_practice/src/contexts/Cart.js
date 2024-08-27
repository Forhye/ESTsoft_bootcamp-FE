import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeCart, calcTotal } = useCart();

  return (
    <div>
      <h2>장바구니</h2>
      <p>총 상품 개수 : {}</p>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - 수량 : {item.quantity}
                <button onClick={() => removeCart(item.id)}>삭제</button>
              </li>
            ))}
          </ul>
          <h3>총 금액 : ${calcTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
