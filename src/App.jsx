import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleAdd () {
    setCount((count)=>count+1);
  }

  function handleSub () {
    if(count !== 0) {
      setCount((count)=>count-1);
    } else {
      alert(`Count cannot be less than ${count}`);
    }
  }

  return (
    <>
    <h1>Count Buttton {count}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleSub}>Sub</button>
    </>
  );
}

export default App