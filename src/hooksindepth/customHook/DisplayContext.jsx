import { CustomProvider, useCustomContext } from './useCustomContext';

const DisplayContextData = () => {
  const { name, age } = useCustomContext(); // Extract context values

  return (
    <div>
      {/* Display the context values */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const DisplayContext = () => {
  return (
    <>
      {/* Wrap components with the CustomProvider to access the context */}
      <CustomProvider>
        <DisplayContextData />
      </CustomProvider>
    </>
  );
}

export default DisplayContext;
