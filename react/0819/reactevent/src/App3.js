import { useState } from "react";
import Login from "./components/login";

const user = {
  idUser: "jaehyun@weniv.com",
  pwUser: 1234,
};

function App3() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (id === "") {
      alert("아이디를 입력하지 않았습니다.");
    }
    if (pw === "") {
      alert("패스워드를 입력하지 않았습니다.");
    }
    // alert(`id : ${id}, pw : ${pw}`);
  };

  const handleLoginInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPw(e.target.value);
  };

  return (
    <>
      <Login />
    </>
  );
}

export default App3;
