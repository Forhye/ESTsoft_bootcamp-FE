import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  //   useEffect(() => {
  //     if (value >= 1000) {
  //       setValue(300);
  //     }
  //   }, [value]);

  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  // 컴포넌트가 페인팅 되고 나서 실행되기 때문에 번쩍거리지 않음

  return (
    <div>
      <div
        style={{
          width: value,
          height: value,
          backgroundColor: "blue",
          transition: "1s all",
        }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
