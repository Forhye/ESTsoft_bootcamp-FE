import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  const onItemClick = () => {
    props.moodEvent(props.mood);
  };

  const getBgc = () => {
    return props.isSelected ? "royalblue" : null;
  };

  return (
    <li>
      <button
        // style={{ backgroundColor: props.isSelected ? "royalblue" : null }}
        style={{ backgroundColor: getBgc() }}
        onClick={onItemClick}
      >
        기분이 : {props.mood}
      </button>
    </li>
  );
}
