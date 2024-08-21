import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Admin = () => <div>관리자화면</div>;
const User = () => <div>일반 유저 화면</div>;
const Guest = () => <div>게스트 화면</div>;

export default function SimpleRouter({ userType, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  switch (userType) {
    case "admin":
      return <Admin />;
    case "user":
      return <User />;
    case "guest":
      return <Guest />;
    default:
      return "error";
  }
}
