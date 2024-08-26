import React from "react";
import styled from "styled-components";

const nations = [
  {
    title: "France",
    population: "200",
    id: "1",
    loc: "europe",
  },
  {
    title: "Italy",
    population: "300",
    id: "2",
    loc: "europe",
  },
  {
    title: "England",
    population: "400",
    id: "3",
    loc: "europe",
  },
  {
    title: "America",
    population: "500",
    id: "4",
    loc: "north-america",
  },
  {
    title: "Korea",
    population: "600",
    id: "5",
    loc: "asia",
  },
];

const Item = styled.div`
  margin: 60px auto;
  max-width: 500px;

  ul {
    list-style: none;
    padding: 20px;
  }
  li {
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    padding-left: 20px;
    margin-top: 20px;
  }
`;

export default function NationList() {
  return (
    <Item>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>{nation.title}</h3>
              <p>{nation.population}</p>
            </li>
          );
        })}
      </ul>
    </Item>
  );
}
