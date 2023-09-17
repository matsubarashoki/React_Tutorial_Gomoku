import Child from "./Child"
import OtherChild from "./OtherChild"
import { createContext,useState } from "react"

export const MyContext = createContext()

const UseContextSample = () => {
  const [sampleInt,setSampleInt] = useState(0)
  const value = "hello"
  return (
    <MyContext.Provider value={[sampleInt,setSampleInt]}>
      ----------------------------------------
      <div>
        <h1>親コンポーネンツ</h1>
        ==============================
        <Child/>
        ==============================
        <OtherChild />
      </div>
      ----------------------------------------
    </MyContext.Provider>
  )
}

export default UseContextSample