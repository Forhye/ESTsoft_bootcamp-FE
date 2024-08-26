import Button from "./components/Button";
import NationList from "./components/NationList";

function App() {
  function TestComponent() {
    return <div>Test Component</div>;
  }
  return (
    <>
      <h1>나라 목록</h1>
      <NationList />
      <Button text={"전체 목록"} />
      <Button text={"유럽 목록"} />
    </>
  );
}
export default App;
