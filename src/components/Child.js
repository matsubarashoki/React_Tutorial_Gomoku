import { MyContext } from "./UseContextSample"
import { useContext } from "react"

const Child = () => {
  const [sampleInt] = useContext(MyContext);
  return (
    <>
      <h2>子供コンポーネンツ</h2>
      <p>{sampleInt}</p>
    </>
  )
}

export default Child