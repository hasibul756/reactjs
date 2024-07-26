import { useState,useEffect } from "react";

const TodoDate = () => {

    const [date,setDate] = useState(new Date());

    useEffect(()=>{

        const getDate = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(getDate);

    },[]);


    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

  return (
    <header>
        <h1>Todo List</h1>
        <p>{`${formattedDate} - ${formattedTime}`}</p>
    </header>
  )
}

export default TodoDate