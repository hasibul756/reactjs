import testData from "../api/testData.json";

const Looping = () => {
    const maleUsers = testData.filter(({ gender,username }) => gender === "Male");
    const totalUsers = testData.length;
    const totalMaleUsers = maleUsers.length;

    const userCardStyle = {
        border: "1px solid #000",
        margin: "4px",
        padding: "4px",
        display: "inline-block",
        width: "24%",
        borderRadius : "8px"
    };

    return (
        <>
            <p>Total number of users: {totalUsers}</p>
            <p>Total number of male users: {totalMaleUsers}</p>
            {maleUsers.map(({ id, username, first_name, last_name, email, gender }) => (
                <div key={id} style={userCardStyle}>
                    <p>id: {id}</p>
                    <p>UserName: {username}</p>
                    <p>Name: {`${first_name} ${last_name}`}</p>
                    <p>email: {email}</p>
                    <p>gender: {gender}</p>
                </div>
            ))}
        </>
    );
};

export default Looping;
