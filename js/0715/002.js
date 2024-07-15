// 콜백함수

// 함수 a를 대신 실행해주는 callback함수
// const a = () => {
//     console.log("오");
// }
// const callback = (fn) =>{
//     fn()
// }
// callback(a)

// 함수를 만들어주는 함수
const fnFactory = () => {
  return () => {
    console.log("오오");
  };
};

const callback = (fn) => {
  fn();
};

// callback(fnFactory())
// 같은 호출 ▼
const CreatedFunction = fnFactory();
callback(CreatedFunction);
