import { useState } from "react";

function App() {
  const [message, setMessage] = useState();

  const handleOnMouseEnter = () => {
    setMessage("안녕하세요");
  };
  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요");
  };
  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      hello world
      <p>{message}</p>
    </div>
  );
}
export default App;
