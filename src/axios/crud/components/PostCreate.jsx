import { useState } from "react";
import { createPost } from "../api/postApi";

const PostCreate = ({ posts, setPosts }) => {
  const initialData = { title: "", body: "" };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (data.title.length < 1) return "Title must be at least 1 characters long.";
    if (data.body.length < 1) return "Body must be at least 1 characters long.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await createPost(data);
      setPosts([...posts, response]);
      console.log(response.data);
      setData(initialData); // Reset form after successful submission
      setSuccess("Post created successfully!");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to create post. Please try again.";
      setError(errorMsg);
      console.error("Error creating post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">Create New Post</h1>
      
      {/* Success Message */}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      
      {/* Error Message */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Post title"
            value={data.title}
            onChange={handleFormData}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Post Title"
            required
          />
        </div>
        <div>
          <textarea
            id="body"
            name="body"
            placeholder="Post body"
            value={data.body}
            onChange={handleFormData}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Post Body"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default PostCreate;