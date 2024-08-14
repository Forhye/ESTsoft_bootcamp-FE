import "./App2.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

const items = list.map((item) => {
  return (
    // 고유한 키를 넣어줘야 한다
    <li key={item.no} className={item.visited ? "active" : null}>
      {item.area}
    </li>
  );
});

function TripList() {
  return <ul className="list-area">{items}</ul>;
}

function App2() {
  // let liStyle = { border: "1px solid #fff" };
  return <TripList />;
}

export default App2;
