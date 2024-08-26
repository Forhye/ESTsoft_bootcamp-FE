import { useState, useRef } from "react";

export default function StopwatchFixed() {
  // 시작한 시간
  // const [startTime, setStartTime] = useState(null);
  const startTime = useRef(0);

  // 현재 시간 => 필요할때마다 쓰면돼서 따로 상태를 관리할 필요가 없음

  // 인터벌함수의 id
  const intervalId = useRef(null);

  // 경과 시간
  const [secondsPassed, setSecondsPassed] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    startTime.current = Date.now() - secondsPassed;

    intervalId.current = setInterval(() => {
      setSecondsPassed(Date.now() - startTime.current);
    }, 10);

    setIsRunning(true);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setSecondsPassed(0);
    setIsRunning(false);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
