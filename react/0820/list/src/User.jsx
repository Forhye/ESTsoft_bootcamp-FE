import React from "react";
import { useState } from "react";
import "./User.css";

export default function User({ user }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <dt onClick={handleClick}>{user.name}</dt>
      <dd className={isActive ? "active" : null}>
        <p>email : {user.email}</p>
        <p>job : {user.job}</p>
      </dd>
    </div>
  );
}
