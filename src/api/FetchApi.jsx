import { useState, useEffect } from "react";

const url = 'https://jsonplaceholder.org/users';

const FetchApi = () => {

    const [apiData, setApiData] = useState([]);

    fetch(url)
    .then((response)=>response.json())
    // .then((data)=>setApiData(data))
    .catch((error)=> console.log(error))

    return (
        <ul>
        {apiData.map((currData)=>{
            return <li key={currData.id}>{currData.firstname}</li>
        })}
        </ul>
    )
}

export default FetchApi