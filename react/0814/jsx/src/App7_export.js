import React from "react";

function Hello(props) {
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 1호</h1>
      <h1>안녕, {props.name} 2호!</h1>
      <div className="newClass" />
    </div>
  );
}

function Time(props) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "red" }}>년 : {year}</h1>
      <h1>
        월/일 : {month}/{date}
      </h1>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export { Hello, Time }; //밖에서 사용할 수 있도록 해줍니다!
