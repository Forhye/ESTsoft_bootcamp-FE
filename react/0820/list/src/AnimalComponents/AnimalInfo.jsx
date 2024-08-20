import React from "react";

export default function AnimalInfo({ data }) {
  return data.map((item) => (
    <li key={item.id}>
      {item.name}는 {item.species}입니다. 그리고 {item.age}살 입니다.
    </li>
  ));
}
