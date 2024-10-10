import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    // const data = {
    //   name: formData.get('name'),  // for complex form data
    //   email: formData.get('email'),
    //   message: formData.get('message'),
    // };

    const data = Object.fromEntries(formData); //for simple form data

    console.log(data);
    return data; // Return the extracted data for further processing
  } catch (error) {
    console.error('Error processing form data:', error);
    return null; // Optionally return null or an error response
  }
}

const MyForm = () => {
  return (
    <Form method="post" action="#" className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          rows="4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </Form>
  );
};

export default MyForm;