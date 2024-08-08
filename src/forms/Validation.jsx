// Importing React and necessary hooks
import { useState } from 'react';

// Helper function to validate the email format
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Helper function to validate the password strength
const validatePassword = (password) => {
    // Password must be at least 8 characters long and include at least one number
    const re = /^(?=.*[0-9])(?=.{8,})/;
    return re.test(password);
};

// Main RegistrationForm component
const Validation = () => {
    // useState hook to manage form data
    const [formData, setFormData] = useState({
        firstName: '',       // Stores the first name
        lastName: '',        // Stores the last name
        email: '',           // Stores the email address
        password: '',        // Stores the password
        confirmPassword: ''  // Stores the confirmed password
    });

    // useState hook to manage validation errors
    const [errors, setErrors] = useState({});

    // useState hook to manage form submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to handle changes in input fields
    const handleChange = (event) => {
        // Destructuring the event target to get the name and value of the input
        const { name, value } = event.target;

        // Updating the formData state with the new value
        setFormData((prevFormData) => ({
            ...prevFormData,  // Spread the previous state to maintain existing data
            [name]: value     // Update the specific field with the new value
        }));

        // Resetting the error for the specific field as the user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors,    // Spread the previous errors to maintain existing ones
            [name]: '',       // Clear the error for the current field
        }));
    };

    // Function to validate the entire form before submission
    const validateForm = () => {
        const newErrors = {}; // Object to store validation errors

        // Checking if the first name is not empty
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';

        // Checking if the last name is not empty
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        // Checking if the email format is valid
        if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';

        // Checking if the password meets the criteria
        if (!validatePassword(formData.password)) newErrors.password = 'Password must be at least 8 characters long and include at least one number';

        // Checking if the password and confirm password match
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        // Updating the errors state with the new validation errors
        setErrors(newErrors);

        // Returning true if there are no errors, false otherwise
        return Object.keys(newErrors).length === 0;
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Validate the form before submission
        if (validateForm()) {
            // If the form is valid, proceed with submission logic
            setIsSubmitted(true); // Mark the form as successfully submitted

            // Typically, you would send formData to the backend server here
            console.log('Form submitted successfully:', formData);

            // Resetting the form fields after submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

            // Optionally clear the submission state after a delay (e.g., to hide the success message)
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill in the form to create an account.</p>

            {/* Display success message if the form is submitted */}
            {isSubmitted && <p className="success-message">Registration successful!</p>}

            {/* First Name Field */}
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                {/* Display error message if the first name is invalid */}
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>

            {/* Last Name Field */}
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                {/* Display error message if the last name is invalid */}
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {/* Display error message if the email is invalid */}
                {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {/* Display error message if the password is invalid */}
                {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                {/* Display error message if the passwords do not match */}
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
};

export default Validation;
