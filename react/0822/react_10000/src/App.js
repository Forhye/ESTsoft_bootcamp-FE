import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modalOpen = () => {
    setModalShow(true);
  };

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      <Modal modalClose={modalClose} modalShow={modalShow} />
    </div>
  );
}
export default App;
