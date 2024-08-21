import styled from "styled-components";

const StyledProps = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: ${(props) =>
      props.size === "large" ? "scale(1.5)" : "scale(1.1)"};
  }
  background-color: ${(props) => {
    switch (props.color) {
      case "danger":
        return "tomato";
      case "success":
        return "darkolivegreen";
      case "fail":
        return "gray";
      default:
        return " black";
    }
  }};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

const StyledPropsBtn = () => {
  return (
    <>
      <StyledProps color="danger" size="large" fullWidth>
        버튼입니다
      </StyledProps>
      <StyledProps color="success">버튼입니다</StyledProps>
      <StyledProps color="fail" size="large" fullWidth>
        버튼입니다
      </StyledProps>
    </>
  );
};

export default StyledPropsBtn;
