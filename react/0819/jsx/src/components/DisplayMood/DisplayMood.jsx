import React from "react";

export default function DisplayMood({ mood }) {
  return (
    <div>
      <h2>기분이 {mood ? mood : "아직 선택하지 않았습니다."}</h2>
    </div>
  );
}
