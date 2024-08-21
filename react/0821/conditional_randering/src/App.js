import { useState } from "react";
import SimpleRouter from "./SimpleRouter";

function App() {
  const [userType, setUserType] = useState("guest");
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    const roles = ["guest", "user", "admin"];
    const randomRol = roles[Math.floor(Math.random() * 4)];
    setUserType(randomRol);
    setIsLoading(false);
  }, 2000);

  return (
    <>
      <h1>사용자 대시보드</h1>
      <SimpleRouter userType={userType} isLoading={isLoading} />
    </>
  );
}
export default App;
