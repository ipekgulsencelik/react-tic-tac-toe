import { useState } from "react";

import Cell from "./components/cell/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  console.log(cells);
  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} />
        ))}
      </div>
      <p></p>
    </div>
  );
};

export default App;
