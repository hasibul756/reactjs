import React, { useState } from 'react';

function Multiform() {
    const [data, setData] = useState({ name: '', email: '', password: '' });

    function getData(e) {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    function submitData(e) {
        e.preventDefault();
        console.log(data);
        setData({ name: '', email: '', password: '' });
    }

    return (
        <form onSubmit={submitData}>
            <input type="text" name="name" value={data.name} onChange={getData} />
            <input type="email" name="email" value={data.email} onChange={getData} />
            <input type="password" name="password" value={data.password} onChange={getData} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Multiform;
