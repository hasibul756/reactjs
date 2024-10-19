import { useEffect, useState } from "react";
import { createPost, updatePost } from "../api/postApi";

const PostForm = ({ posts, setPosts, postToUpdate, setPostToUpdate }) => {
  const initialFormData = { title: "", body: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isNewPost = Object.keys(postToUpdate || {}).length === 0;

  useEffect(() => {
    if (postToUpdate) {
      setFormData({
        title: postToUpdate.title || "",
        body: postToUpdate.body || ""
      });
    }
  }, [postToUpdate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateInput = () => {
    if (formData.title.length < 1) return "Title must be at least 1 character long.";
    if (formData.body.length < 2) return "Body must be at least 2 character long.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isNewPost) {
        // Create new post
        const response = await createPost(formData);
        setPosts([...posts, response]);
        setSuccess("Post created successfully!");
      } else {
        // Update existing post
        const response = await updatePost(postToUpdate.id, formData);
        setPosts(posts.map((post) => (post.id === postToUpdate.id ? response : post)));
        setSuccess("Post updated successfully!");
        setPostToUpdate(null); // Reset after updating
      }
      setFormData(initialFormData); // Reset form
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to submit post. Please try again.";
      setError(errorMsg);
      console.error("Error submitting post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        {isNewPost ? "Create New Post" : "Edit Post"}
      </h1>

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
            value={formData.title}
            onChange={handleInputChange}
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
            value={formData.body}
            onChange={handleInputChange}
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
          {loading ? "Submitting..." : isNewPost ? "Add Post" : "Edit Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;