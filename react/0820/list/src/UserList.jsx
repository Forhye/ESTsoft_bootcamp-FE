import React from "react";
import User from "./User";

export default function UserList({ data }) {
  return (
    <dl>
      {data.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </dl>
  );
}
