import React from "react";
import Question from "./Question";
import styles from "./App.module.css";
import { createGlobalStyle } from "styled-components";
// import reset from "styled-components";
import Normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${Normalize}

li{
  list-style: none;
}


span{
  color: darkolivegreen;
  font-size: 2rem;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <span>글로벌 스타일 적용</span>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
