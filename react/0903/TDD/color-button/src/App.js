import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [buttonColor, setButtonColor] = useState("tomato");
    const newColor = buttonColor === "tomato" ? "royalblue" : "tomato";

    return (
        <div className="App">
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newColor)}
            >
                helloooooooooooooow {newColor}
            </button>
        </div>
    );
}

export default App;
