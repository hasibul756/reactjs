import { useState } from "react"

function UseState() {
  const [count,setCount] = useState(0);
  
  function decData () {
    setCount((count)=>count-1);
  }
  function incData () {
    setCount((count)=>count+1);
  }
  return (
    <>
    <button onClick={decData}>-</button>
    <span>{count}</span>
    <button onClick={incData}>+</button>
    </>
  )
}

export default UseState