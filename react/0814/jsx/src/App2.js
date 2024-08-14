function App2() {
  const list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  const area = list.map(function (obj) {
    return obj.area;
  });

  const visited = list.map(function (obj) {
    if (obj.visited === true) {
      obj.style = { backgroundColor: "royalBlue" };
    }
    return obj.visited;
  });

  // let liStyle = { border: "1px solid #fff" };
  return (
    <div>
      <ul style={{ listStyle: "none", border: "1px solid #fff" }}>
        <li>
          {area[0]} {visited}
        </li>
        <li>
          {area[1]} {visited}
        </li>
        <li>
          {area[2]} {visited}
        </li>
        <li>
          {area[3]} {visited}
        </li>
      </ul>
    </div>
  );
}

export default App2;
