import InputComponent from "./Components/InputComponent";
import SomethingComponent from "./Components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useScroll from "./Hook/useScroll";
import ImageList from "./Components/ImageList";
import { useEffect, useRef, useState } from "react";
import Loading from "./Components/Loading";

function App() {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  //   const page = useRef(1);

  const isBottom = useScroll();

  useEffect(() => {
    if (isBottom) {
      console.log("다음 사진");
      setPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  // 우리가 직접 지정해준 값인 useRef의 값은 의존 배열에 사용할 수 없다
  useEffect(() => {
    fetchImage(page);
  }, [page]);

  //   앞으로 데이터가 변화할것이기 때문에 state로 관리해준다
  //   만약 절대불변의 데이터라면 굳이 state로 관리해줄 필요가 없다
  async function fetchImage(pageNum) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=5`
      );
      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      setImageList((prevImageList) => [...prevImageList, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error("통신 에러");
    }
  }

  //   useEffect(() => {
  //     fetchImage(page);
  //   }, []);

  return (
    <div>
      <InputComponent />
      <SomethingComponent />

      {isLoading && <Loading />}
      <ImageList imageList={imageList} />
    </div>
  );
}
export default App;
