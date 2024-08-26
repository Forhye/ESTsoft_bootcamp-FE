import React from "react";
import "./Card.css";

export default function Card({ country, people }) {
  return (
    <>
      <div className="card">
        <h2>{country}</h2>
        <p>{people}</p>
      </div>
    </>
  );
}
