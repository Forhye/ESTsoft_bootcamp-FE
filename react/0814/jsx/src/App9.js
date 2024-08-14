import ColorText from "./components/ColorText";
import React, { useState } from "react";

function App8() {
  // let like = 0;

  // 상태=변수
  // 0은 like 값의 초기 값
  // like를 변경할 수 있는 유일한 함수
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
  }

  return (
    <div>
      <ColorText color="tomato" />
      <ColorText color="darkolivegreen" />
      <ColorText color="royalblue" />
      <button onClick={clickLike}>button {like}</button>
      {/* <button>button {like}</button> */}
    </div>
  );
}

export default App8;
