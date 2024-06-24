import userData from "../api/testData.json";
import PropTypes from 'prop-types';
import { useState } from 'react';

// ParentComponent
export default function ParentComponent() {
    const [userAge, setUserAge] = useState(25); // State to store user's age

    // Function to handle updating the user's age from the child component
    const handleAgeUpdate = (newAge) => {
        setUserAge(newAge);
    };

    return (
        <div>
            <h2>User Data</h2>
            {/* Passing props including a callback function to update age */}
            <ChildComponent 
                users={userData} 
                listTitle="User List" 
                defaultUser={{ name: "Default User" }} 
                userAge={userAge} 
                onAgeUpdate={handleAgeUpdate} 
            />
        </div>
    );
}

// ChildComponent
const ChildComponent = ({ users, userAge, listTitle, defaultUser, onAgeUpdate }) => {
    // Check if users is an array
    if (!Array.isArray(users)) {
        return <div>No user data available</div>;
    }

    // Function to handle button click to update user age
    const incrementAge = () => {
        onAgeUpdate(userAge + 1); // Increment age by 1
    };

    return (
        <div>
            <p>User Age: {userAge}</p>
            <p>List Title: {listTitle}</p>
            <button onClick={incrementAge}>Increase Age</button> {/* Button to update age */}
            {users.map((user) => (
                <div key={user.id}>
                    <p>Id: {user.id}</p>
                    <p>Username: {user.username || defaultUser.name}</p>
                    <p>Name: {user.first_name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );
};

// Default Props
ChildComponent.defaultProps = {
    userAge: 18,
    listTitle: "No Title",
    defaultUser: {
        name: "Guest User"
    }
};

// PropTypes
ChildComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            username: PropTypes.string,
            first_name: PropTypes.string
        })
    ).isRequired,
    userAge: PropTypes.number,
    listTitle: PropTypes.string,
    defaultUser: PropTypes.shape({
        name: PropTypes.string
    }),
    onAgeUpdate: PropTypes.func // Validate the onAgeUpdate prop as a function
};

/*
Notes:
1. **Passing Props**: The ParentComponent passes `users`, `listTitle`, `defaultUser`, `userAge`, and `onAgeUpdate` as props to the ChildComponent.
2. **Destructuring Props**: The ChildComponent destructures the props in its parameter list for easier access.
3. **Default Props**: The ChildComponent sets default values for `userAge`, `listTitle`, and `defaultUser` to handle cases where these props are not provided.
4. **PropTypes**: The ChildComponent uses PropTypes to validate the types of the props it receives. This ensures that `users` is an array of objects with specific properties, and validates the `userAge`, `listTitle`, `defaultUser`, and `onAgeUpdate` props.
5. **Callback Functions**: The ParentComponent defines a function `handleAgeUpdate` that updates the state. This function is passed to the ChildComponent as a prop, allowing the ChildComponent to call this function to update the parent's state.
6. **Updating Parent State from Child**: The ChildComponent contains a button that, when clicked, calls the `incrementAge` function to increment the user age. This demonstrates how child components can interact with and update parent state.
*/
