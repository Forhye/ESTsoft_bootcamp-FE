import React from "react";
import { UserInfo } from "../contexts/UserInfo";

export default function Hello() {
  return (
    <UserInfo.Consumer>
      {(value) => {
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>;
      }}
    </UserInfo.Consumer>
  );
}
