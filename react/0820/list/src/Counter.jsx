import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 화살표 함수는 호이스팅이 일어나지 않는다.
  // 표현식이기 때문에
  // const라는 상수에 할당되어진 함수여서 호이스팅이 일어나지 않는다.
  // 화살표함수는 프로토타입이 없다
  // 예상 가능한 변수로 동작하기 때문에 유지보수에 좋다?
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}
