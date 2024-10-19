import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/postApi";
import PostForm from "./PostForm";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postToUpdate, setPostToUpdate] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();  // Fetch posts using the API
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleEdit = (post) => {
    setPostToUpdate(post);  // Set the selected post to edit
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    
    if (confirmed) {
      try {
        await deletePost(id); // Call the API to delete the post
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Update state by removing deleted post
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* PostForm component for creating and updating posts */}
      <PostForm 
        posts={posts} 
        setPosts={setPosts} 
        postToUpdate={postToUpdate} 
        setPostToUpdate={setPostToUpdate} 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <span className="text-sm text-gray-400 block mt-4">
                Post ID: {post.id}
              </span>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
              <div className="flex gap-4 items-center mt-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;