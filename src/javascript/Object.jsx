// Object Destructuring

function Object() {
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
  }

  // Basic object destructuring
  const { id, name } = object;

  // Destructuring with nested objects
  const { address: { vill, post, pin }, phoneNumbers: { home, office } } = object;

    // Destructuring with rest operator
    // const { id, name, ...rest } = object;

  // Renaming variables during destructuring
  const { id: userId, name: userName } = object;

  // Destructuring with default values
  const { city = 'Unknown', country = 'Unknown' } = object.address;

  // Destructuring with default values and renaming
  const { age: personAge = 'Unknown', gender: personGender = 'Unknown' } = object;


  // Return JSX to display the properties of the object
  return (
    <>
      {/* Render the extracted properties inside <p> tags */}
      <p>Basic Destructuring: {id} {name}</p>
      <p>Nested Destructuring: {vill} {post} {pin}</p>
      <p>Renaming Variables: {userId} {userName}</p>
      <p>Destructuring with Default Values: {city}, {country}</p>
    </>
  );
}

// Export the DisplayObject component as the default export
export default Object;``