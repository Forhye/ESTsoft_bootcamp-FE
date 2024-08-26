import Button from "./components/Button";
import Card from "./components/Card";
import NationList from "./components/NationList";

const countryList = [
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

function App() {
  return (
    <>
      <h1>나라 목록</h1>
      <NationList />
      <Card country={countryList[1].title} people={countryList[1].population} />
      <Card country={countryList[2].title} people={countryList[2].population} />
      <Button text={"전체 목록"} />
      <Button text={"유럽 목록"} />
    </>
  );
}
export default App;
