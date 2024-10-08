import { useEffect, useState } from 'react';

const Api = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  useEffect(()=>{
    // fetch(url)
    // .then((response)=>{
    //     if(!response.ok) {
    //         throw new Error('Failed to fetch Data');
    //     }
    //     return response.json();
    // })
    // .then((data)=> {
    //     setData(data)
    //     console.log(data);
    // })
    // .catch((error) => console.log('Error',error))

    const Async = async () => {
        try{
            let response = await fetch(url)
            let result = await response.json()
            setData(result)
        } catch(error) {
            console.log('Error',error);  
        }
    }

    Async()


  },[])

  return (
    <>
    {data.map((user)=>(
        <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.address.city}</p>
            <p>{user.company.name}</p>
        </div>
    ))}
    </>
  );
};

export default Api;