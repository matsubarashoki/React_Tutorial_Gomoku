import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload} ) => {
  switch (type) {
    case "change": {
      const {name , value} = payload;
      return {...state , [name]: value};
    }
    case "add":{
      return { ...state,result: parseInt(state.a) + parseInt(state.b)}
    }
    case "minus":{
      return { ...state,result:state.a - state.b}
    }
    case "divide":{
      return { ...state,result:state.a / state.b}
    }
    case "multiply":{
      return { ...state,result:state.a * state.b}
    }
    default:{
      throw new Error("operator is invalid")
    }
  }


}
const Example2 = () => {

  const initState = {
    a:1,
    b:2,
    result:3
  }

  const [state, dispatch] = useReducer(reducer,initState);

  const ClickHandler = (e) => {
    dispatch({type:"change", payload:{ name: e.target.name, value: e.target.value}});
  }
  const Calc = (e) => {
    dispatch({type:e.target.value});
  }

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={ClickHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={ClickHandler}
        />
      </div>
      <select value={state.type} name="type" onChange={Calc}>
        {CALC_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <h3>結果{state.result}</h3>
    </>
  )
}

export default Example2