import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  padding: 30px;
  background-color: royalblue;
`;

const ButtonStyle2 = styled(Button)`
  color: black;
  font-weight: 800;

  border: none;
  border-radius: 20px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonStyle3 = styled(Button)`
  background-color: lightgreen;
  border-radius: 50px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
`;

export { Button, ButtonStyle2, ButtonStyle3 };
