import React, { useState } from 'react';

function Multiform() {
    const initialState = {
        name: '',
        email: '',
        password: ''
    };

    const [data, setData] = useState(initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        setData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Multiform;
