// Define a function to demonstrate object destructuring
function objectDestructuring() {
  // Define an object with properties id, name, and address
  const object = {
    id: 1,
    name: 'Hasibul Alam',
    address: {
      vill: 'Basudebpur',
      post: 'Chachanda',
      pin: 742224
    },
    age: 25,
    gender: 'male',
    phoneNumbers: {
      home: '123-456-7890',
      office: '098-765-4321'
    }
  };

  // Basic object destructuring
  const { id, name } = object;

  // Destructuring with nested objects
  const { address: { vill, post, pin }, phoneNumbers: { home, office } } = object;

  // Renaming variables during destructuring
  const { id: userId, name: userName } = object;

  // Destructuring with default values
  const { city = 'Unknown', country = 'Unknown' } = object.address;

  // Destructuring with default values and renaming
  const { age: personAge = 'Unknown', gender: personGender = 'Unknown' } = object;

  // Log the extracted properties to the console
  console.log(`Basic Destructuring: ${id} ${name}`);
  console.log(`Nested Destructuring: ${vill} ${post} ${pin}`);
  console.log(`Renaming Variables: ${userId} ${userName}`);
  console.log(`Destructuring with Default Values: ${city}, ${country}`);

  // Destructuring with rest operator
  const { id: userIdRest, name: userNameRest, ...rest } = object;
  console.log('Rest Operator:', rest); // Object containing properties other than id and name

  // Destructuring with default values, renaming, and additional properties
  const { id: userIdDefault = 0, name: userNameDefault = 'Anonymous', email = 'example@example.com' } = object;
  console.log(`Default Values & Renaming: ID - ${userIdDefault}, Name - ${userNameDefault}, Email - ${email}`);

  // Destructuring in function parameters
  function displayUserDetails({ id, name }) {
    console.log(`User ID: ${id}, Name: ${name}`);
  }
  displayUserDetails(object);

  // Destructuring with deep nesting
  const { address: { vill: villageName, post: postOffice } } = object;
  console.log(`Deep Nesting: Village - ${villageName}, Post Office - ${postOffice}`);
}

// Call the objectDestructuring function
objectDestructuring();
