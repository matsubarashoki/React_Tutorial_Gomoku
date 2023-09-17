// usesateとuseReducerのサンプル


import { useState,useReducer } from "react";

const Example = () => {
  const [state, setState] = useState(0)
  const [rstate, dispatch] = useReducer((prev, {type, step}) => {
    switch(type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです")
    }
    // if (action === '+'){
    //   return ++prev;
    // } else if (action === '-'){
    //   return --prev;
    // } else{
    //   return;
    // }
  },0)
  const CountUp = () => {
    setState(prev => ++prev)
  }
  const RcountUp = () =>{
    dispatch({type: "+", step:2});
  }

  const RcountDown = () =>{
    dispatch({type: "-", step:3});
  }
  return (
    <>
      <div>
        <h1>State</h1>
        <h2>{state}</h2>
        <button onClick={CountUp}>CountUp</button>
      </div>
      <div>
        <h1>Reducer</h1>
        <h2>{rstate}</h2>
        <button onClick={RcountUp}>CountUp</button>
        <button onClick={RcountDown}>CountDown</button>
      </div>
    </>
  )
}

export default Example;