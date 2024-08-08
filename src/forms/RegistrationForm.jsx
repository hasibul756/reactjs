import { useState } from "react"; // Importing the useState hook from React

const RegistrationForm = () => {

    // Initializing the formData state with useState hook
    // formData is an object that holds the values of form fields
    // setFormData is the function to update formData
    // State with keys for initial value
    const [formData, setFormData] = useState({
        firstName: '',           // Initial value for the first name field
        lastName: '',            // Initial value for the last name field
        email: '',               // Initial value for the email field
        password: '',            // Initial value for the password field
        confirmPassword: ''      // Initial value for the confirm password field
    });
    // Initial key in the state object should match with the name attribute. If not, React would create a new state property or fail to update the existing one properly.

    // handleChange function to update formData state whenever an input field changes
    const handleChange = (event) => {

        // const name = event.target.name;
        // const value = event.target.value;

        // Destructure the name and value from the event target (the input element that triggered the change)
        const { name, value } = event.target;

        // Update formData using the setFormData function
        // setFormData((prevData)=>console.log(prevData)); // prevData represents the previous state value before the update.

        // The spread operator (...) is used to copy the previous state and only update the field that changed
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value          // Update the field (firstName, lastName, email, etc.) that corresponds to the name attribute of the input
        }));

        // Use name as the key and value as the value.
        // Dynamic Key Access: [name]: value uses the name attribute from the input field to dynamically update the corresponding property in the formData object.
    };

    // handleSubmit function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();   // Prevent the default form submission behavior (which would refresh the page)
        console.log(formData);    // Log the formData object to the console (for debugging purposes)
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Sign Up</h1> {/* Form heading */}
            <p>Please fill in the form to create an account.</p> {/* Form description */}

            <div>
                {/* First Name Field */}
                <label htmlFor="firstName">First Name</label> {/* Label for the first name input field */}
                <input
                    type="text"
                    name="firstName" // Name attribute to identify the field
                    id="firstName"   // ID attribute for linking label and input
                    placeholder="Enter First Name" // Placeholder text inside the input
                    value={formData.firstName}     // Controlled component - input value is tied to formData state
                    onChange={handleChange}        // onChange handler to update state when input changes
                    required                      // HTML5 validation - field is required
                />
            </div>

            <div>
                {/* Last Name Field */}
                <label htmlFor="lastName">Last Name</label> {/* Label for the last name input field */}
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                {/* Email Field */}
                <label htmlFor="email">Email</label> {/* Label for the email input field */}
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                {/* Password Field */}
                <label htmlFor="password">Password</label> {/* Label for the password input field */}
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                {/* Confirm Password Field */}
                <label htmlFor="confirmPassword">Confirm Password</label> {/* Label for the confirm password input field */}
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                {/* Submit Button */}
                <button type="submit">Sign Up</button> {/* Button to submit the form */}
            </div>
        </form>
    );
};

export default RegistrationForm; // Export the component for use in other parts of the application
