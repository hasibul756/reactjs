import { useEffect, useState } from "react";

const DocumentTitle = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('Initial Render');
        
        document.title = `Count ${count}`;
    },[count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}

export default DocumentTitle