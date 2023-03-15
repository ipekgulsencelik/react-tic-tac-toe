import style from "./style.module.scss";

const Cell = ({ id, Cell }) => {
  return <div className={`${style["square"]}`} id={id}></div>
};

export default Cell;
