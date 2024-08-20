import React from "react";
import AnimalInfo from "./AnimalInfo";

export default function ViewArea({ data }) {
  return (
    <ul>
      <AnimalInfo data={data} />
    </ul>
  );
}
