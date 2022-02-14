import { useState } from "react";
import "./App.css";
import Logg from "./components/Logg";
import Menu from "./components/Menu";
import Timer from "./components/Timer";

function App() {
  const [timer, setTimer] = useState(0);

  return (
    <div className="app">
      <Timer />
      <Menu />
      <Logg />
    </div>
  );
}

export default App;
