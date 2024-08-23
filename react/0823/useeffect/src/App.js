import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  // 첫 랜더링에서 알럿 창이 나오지 않게 하는 방법
  // 1. 새로운 상태감지를 만들고 기본 값을 flase로 주고, 첫 실행에서 ture값으로 바꿔준다
  // 2. 새로운 if문으로 count 가 0이 아니라면 useEffect를 실행

  useEffect(() => {
    if (count !== 0) {
      if (count % 2) {
        alert("홀수");
      } else {
        alert("짝수");
      }
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

function Time(props) {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  // console.log(`렌더링이 됩니다 ${today}`); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Time />
    </div>
  );
}

export default App;
