// React props (properties) facilitate data transfer from parent to child Components.Components
// Data flows unidirectionally, ensuring a clear direction of information in React applications.
// Props are immutable, meaning child components cannot modify the data received from parents.
// Child components access props through their function parameters.
// You can also pass JSX as props to another Component.


import testData from "../api/testData.json";

export default function UserData() {
    return (
        <div>
            <h2>User Data</h2>
            <UserList data={testData} />
        </div>
    );
}

const UserList = ({ data }) => {
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <p>Id: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
};
