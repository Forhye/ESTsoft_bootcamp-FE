import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "노트북", price: 1000 },
  { id: 2, name: "스마트폰", price: 500 },
  { id: 3, name: "태블릿", price: 300 },
  { id: 4, name: "에어팟", price: 300 },
];

const ProductList = () => {
  const { addCart } = useCart();

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₩ {product.price}
            <button onClick={() => addCart(product)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
