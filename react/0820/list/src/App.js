function App() {
  return <Hello name="licat" />;
}

function Hello(props) {
  const name = props.name;
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {/* map을 통해서 index 즉, key 값을 넣어주면 고유한 key값이 아니게 되므로
      단순히 에러를 제거하기 위한 미봉책일 뿐 권장X */}
      {nums.map((item, index) => (
        <h1 key={index}>
          안녕, {name} {item}호
        </h1>
      ))}
    </div>
  );
}

export default App;
