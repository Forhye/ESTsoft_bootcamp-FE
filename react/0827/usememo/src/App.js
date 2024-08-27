import { useState, useMemo } from "react";

function payLoad() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  // let result = useMemo(() => {
  //   return payLoad();
  // }, []);
  // 의존 배열이 없으면 useMemo를 사용하기 전처럼 카운트가 늦게 뜸

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  const result = useMemo(() => {
    return payLoad();
  }, [countTwo]);

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default App;
