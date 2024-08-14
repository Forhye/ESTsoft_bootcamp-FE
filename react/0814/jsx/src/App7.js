import { Hello, Time } from "./App7_export";

function App7() {
  function Resume(props) {
    return (
      <div style={{ border: "1ps solid #000" }}>
        <h1>{props.name} 자기소개서</h1>
        <h2>{props.hello}</h2>
        <p>취미 : {props.hobby}</p>
        <p>좋아하는 음식 : {props.food}</p>
        <p>좋아하는 색 : {props.color}</p>
      </div>
    );
  }

  //   function Resume(props) {
  //     return(
  //         <div style={{border:"solid 1px", width:"500px"}}>
  //             <h1>{props.name} 자기소개서</h1>
  //             <h1>{props.hello}</h1>
  //             <h2>취미 : {props.hobby}</h2>
  //             <h2>좋아하는 음식 : {props.food}</h2>
  //             <h2>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h2>
  //         </div>
  //     )
  // }
  // export default Resume;

  return (
    <div>
      <Hello name="개리" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}

export default App7;
