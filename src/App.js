import { useState } from "react";

import Cell from "./components/cell/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  const [go, setGo] = useState("circle");

  const [winnigMessage, setWinningMessage] = useState(null);
  const message = "it is now " + go + " 's go.";

  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells={cells}
          />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default App;
