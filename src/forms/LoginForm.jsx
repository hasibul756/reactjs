import { useState } from "react"

const LoginForm = () => {
    const [data,getData] = useState({
        username: '',
        password: ''
    });

    const handleInput = (event) => {
        const {name,value} = event.target;
        getData((prevData)=>({...prevData, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" name="username" id="" value={data.username} onChange={handleInput} autoCapitalize="off" required/>
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" name="password" id="" value={data.password} onChange={handleInput} required/>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
  )
}

export default LoginForm