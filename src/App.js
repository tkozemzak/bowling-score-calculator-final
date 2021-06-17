import { useState } from "react";
import EnterScores from "./Components/EnterScores";
import Login from "./Components/Login";

import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      {!name ? <Login setName={setName} /> : <EnterScores name={name} />}
    </div>
  );
}

export default App;
