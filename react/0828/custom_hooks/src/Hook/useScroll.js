import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [isBottom, setIsBottom] = useState(false);

  // 문서 전체의 높이
  //   console.log(document.documentElement.offsetHeight);

  // 화면의 뷰포트
  //   console.log(window.innerHeight);

  // 스크롤이 된 수치 ( 상단에서 얼마나 스크롤이 됐는지 알려준다 )
  //   console.log(document.documentElement.scrollTop);

  // 마운트될때
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop + 20 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
};

export default useScroll;
