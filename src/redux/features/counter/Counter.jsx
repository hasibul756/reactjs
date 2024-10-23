import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./CounterSlice"


const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>Counter: {count}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter