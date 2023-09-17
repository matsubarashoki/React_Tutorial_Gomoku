import { MyContext } from "./UseContextSample"
import { useContext } from "react"

const OtherChild = () => {
  const [,setSampleInt] = useContext(MyContext);
  const add = () => {
    setSampleInt(prev => ++prev)
  }
  return (
    <>
      <h2>OtherChildコンポーネンツ</h2>
      <button onClick={add}>+</button>
    </>
  )
}

export default OtherChild