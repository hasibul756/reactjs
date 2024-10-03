// Importing React and the useParams hook from react-router-dom
import React from 'react';
import { useParams } from "react-router-dom"; 

// UserInfo component definition
const UserInfo = () => {
  // useParams hook extracts the parameters from the current URL
  // If the URL is something like "/user/123", useParams will return an object with the parameters.
  // For example, { user_id: "123" } if the route is "/user/:user_id".
  const params = useParams(); 

  // Log the params object to the console for debugging
  // This will allow you to see what parameters are available in the URL
  console.log(params); 

  // Destructuring the params object to directly access the 'user_id' parameter
  const { user_id } = params; // Extract the 'user_id' from params for easier access

  return (
    <div>
      {/* Displaying the user ID retrieved from the URL */}
      {/* If no user_id is found in the URL, it will show 'undefined' */}
      <h1>User Information</h1>
      <p>User ID: {user_id ? user_id : "No User ID provided"}</p>
      
      {/* 
        Example: 
        If the URL is /user/123, it will display "User ID: 123".
        If the URL doesn't have a user_id (e.g., /user), it will display "No User ID provided".
      */}
      
      {/* 
        Additional example to show how you can access multiple parameters 
        Assuming the route might have more than one parameter like "/user/:user_id/:post_id"
      */}
      <p>Post ID (if available): {params.post_id ? params.post_id : "No Post ID provided"}</p>
      
      {/* 
        You can have multiple parameters in your route and display them dynamically 
        based on their existence in the URL.
      */}
    </div>
  );
}

// Exporting the UserInfo component to be used in other parts of the app
export default UserInfo;
