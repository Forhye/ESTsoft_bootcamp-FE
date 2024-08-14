import "./App.css";

function App() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  // const time = today.getTime();
  const time = today.toLocaleTimeString();

  // const hour = today.getHours();
  // const min = today.getMinutes();
  // const sec = today.getSeconds();

  // 현업에서 사용, 시간을 24시간제, 12시간제 표현할때
  let hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();

  // 오전, 오후인지 판단
  const ampm = today.getHours() > 12 ? "오후" : "오전";

  // 분이 한자리 일때 앞에 0을 붙이지
  const minutes =
    today.getMinutes() > 10 ? today.getMinutes : "0" + today.getMinutes();

  return (
    <div style={{ background: "#000", color: "white" }}>
      <p className="red">년 : {year}</p>
      <p>
        월/일 : {month}/{day}
      </p>
      <p>시간 : {time}</p>
      <p>
        12시간제 : {ampm} {hour}시 {minutes}
      </p>
      {/* <h1>시간 : {hour}시 {min}분 {sec}초</h1> */}
    </div>
  );
}

export default App;
