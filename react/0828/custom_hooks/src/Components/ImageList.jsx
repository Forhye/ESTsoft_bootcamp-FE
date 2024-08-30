import React from "react";
import ImageItem from "./ImageItem";

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((imageInfo) => {
        return (
          <li key={imageInfo.id}>
            {/* 예외처리 : 이미지의 값이 없을 경우 랜더링을 하지 않음(아무것도 보여주지 않음) */}
            {imageInfo && <ImageItem imageInfo={imageInfo} />}
          </li>
        );
      })}
    </ul>
  );
}
