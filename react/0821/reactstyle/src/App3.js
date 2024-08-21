import React from "react";
import styled from "styled-components";
import { Button, ButtonStyle2, ButtonStyle3 } from "./Buttons";
import StyledPropsBtn from "./StyledPropsBtn";

const Button1 = styled.div`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  align-content: center;

  width: 150px;
  height: 80px;
  background-color: royalblue;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

const Button2 = styled(Button1)`
  color: black;
  font-weight: 800;
  border-radius: 20px;
`;

const Button3 = styled(Button2)`
  border-radius: 50px;
  background-color: greenyellow;
`;

function App3() {
  return (
    <>
      <StyledPropsBtn></StyledPropsBtn>
      <Button>버튼1</Button>
      <ButtonStyle2>버튼2</ButtonStyle2>
      <ButtonStyle3>버튼2</ButtonStyle3>

      <div>
        <Button1>버튼 1</Button1>
        <Button2>버튼 2</Button2>
        <Button3>버튼 3</Button3>
      </div>
    </>
  );
}

export default App3;
