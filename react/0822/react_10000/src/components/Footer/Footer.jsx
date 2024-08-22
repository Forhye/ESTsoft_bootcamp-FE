import React from "react";
import logo from "../../images-law/weniv.png";
import "./Footer.css";
import styled from "styled-components";

const ElFooter = styled.footer`
  padding-bottom: 70px;
  font-family: Noto Sans KR;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  background-color: #5b2386;
  color: #fff;
`;

export default function Footer() {
  return (
    <ElFooter>
      <footer className="cont-footer">
        <img src={logo} alt="weniv" className="img-footer" />
        <p className="txt-footer">
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
        </p>
        <p className="txt-footer">
          수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
        </p>
      </footer>
    </ElFooter>
  );
}
