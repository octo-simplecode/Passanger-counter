import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [entries, setEntries] = useState("");

  const increment = () => setCount(count + 1);
  const save = () => {
    setEntries((prev) => `${prev}${count} - `);
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h1>People entered:</h1>
        <h2>{count}</h2>
        <button id="increment-btn" onClick={increment}>
          INCREMENT
        </button>
        <button id="save-btn" onClick={save}>
          SAVE
        </button>
        <p>Previous entries: {entries}</p>
      </div>
    </>
  );
};

export default App;
