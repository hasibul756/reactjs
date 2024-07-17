import { useState } from "react";


const UseStateWithObject = () => {
    const [users,setUsers] = useState([{name:"Sahil",age:24},{name:"Hasibul", age:25}]);

    return (
        <>
        <ul>
            {users.map((currVal,index)=> (
                <li key={index}>{currVal.name}-{currVal.age}</li>
            ))}
        </ul>
        </>
    );
}

export default UseStateWithObject