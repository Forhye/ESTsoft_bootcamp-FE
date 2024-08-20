import React from "react";
import { useState } from "react";

const PetApp = () => {
  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);

  return (
    <>
      <PetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              species={pet.species}
              age={pet.age}
            />
          );
        })}
      </ul>
    </>
  );
};

const Pet = ({ name, species, age, id }) => {
  return (
    <li>
      {name}은 {species}입니다. 나이는 {age}입니다. {id}
    </li>
  );
};

const PetForm = ({ setPets }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets((prePets) => {
      return [...prePets, { name, species, age, id: Date.now() }];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요</legend>
        <label>
          이름
          <input
            type="text"
            placeholder="이름"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label>
          종류
          <input
            type="text"
            placeholder="종류"
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
            value={species}
          />
        </label>
        <label>
          나이
          <input
            type="number"
            placeholder="나이"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
        </label>
        <button>추가하기</button>
      </fieldset>
    </form>
  );
};

function App3() {
  return (
    <>
      <h1>애완동물 정보리스트</h1>
      <PetApp />
    </>
  );
}

export default App3;
