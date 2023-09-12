import "./Square.css"

export default function Square({value,setValue}) {
  const ClickHandler = () => {
    setValue("X");
  }
  return (
      <button className="square" onClick={ClickHandler}>{value}</button>
  )
}