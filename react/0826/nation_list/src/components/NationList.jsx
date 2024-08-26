import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  const [nations, setNations] = useState([]);

  const [url, setUrl] = useState("http://localhost:3000/nations");

  // 컴포넌트가 마운트될때 데이터를 가져온다
  useEffect(() => {
    console.log("Fetching data...");

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNations(data))
      .catch((error) => console.error("Error"));
  }, [url]);

  // try catch 문법
  //   useEffect(() => {

  //     const fetchData = async () => {

  //         try {
  //             const response = await fetch('http://localhost:3000/nations');

  //             if (!response.ok) {
  //                 throw new Error();
  //             }

  //             const json = await response.json();

  //             setNations(json);
  //         } catch (err) {
  //             console.error('데이터를 가져오는데 문제가 발생했습니다!', err);
  //         }

  //     }

  //     fetchData();
  // }, []);

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
      <button
        onClick={() => {
          setUrl("http://localhost:3000/nations");
        }}
      >
        전체 목록
      </button>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/nations?loc=europe");
        }}
      >
        유럽 목록
      </button>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/nations?loc=asia");
        }}
      >
        아시아 목록
      </button>
    </Item>
  );
}
