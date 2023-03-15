import "./style.scss";

const Cell = ({ id, Cell, setCells, go }) => {
  const handleClick = (e) => {
    console.log(e.target);
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross");
      }
    }
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className="cell"></div>
    </div>
  );
};

export default Cell;
