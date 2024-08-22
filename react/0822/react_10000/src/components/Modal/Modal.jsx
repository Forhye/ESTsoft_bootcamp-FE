import React, { useEffect, useRef, useState } from "react";
import licat from "../../images-law/licat.png";
import "./Modal.css";

export default function Modal({ modalShow, modalClose }) {
  // 돔 요소에 리액트가 접근하고 싶을 때
  const dialogRef = useRef();

  // 컴포넌트가 마운트 된 후에 실행
  useEffect(() => {
    if (modalShow) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [modalShow]);

  return (
    <dialog id="modal" ref={dialogRef}>
      <form className="modal-wrap" method="dialog">
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="라이캣의 응원" />
        <button className="btn-close" onClick={modalClose}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
        <p>(그냥 닫기 버튼입니다.)</p>
      </form>
    </dialog>
  );
}
