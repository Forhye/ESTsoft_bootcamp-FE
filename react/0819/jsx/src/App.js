import { useState } from "react";

function App() {
  const [like, setLike] = useState(0);

  function clickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  // 위의 코드와 같다
  // setLike(like ? "" : "Like");

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  );
}

export default App;
