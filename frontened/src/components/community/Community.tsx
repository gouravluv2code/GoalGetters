import React, { useState } from "react";

interface Post {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const timestamp = new Date().toLocaleString();
    const newPostData = {
      id: posts.length + 1,
      author: "You",
      content: newPost,
      timestamp,
      likes: 0,
    };
    setPosts([...posts, newPostData]);
    setNewPost("");
  };

  const handleLikeClick = (id: number) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.likes + 1,
        };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Community and Social Features</h2>
      <div className="w-full max-w-2xl">
        <form onSubmit={handlePostSubmit}>
          <textarea
            className="w-full p-2 rounded-md border border-gray-300 mb-4"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)}
          ></textarea>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Post</button>
        </form>
        <div className="mt-4">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-md p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">{post.author}</h4>
                <span className="text-sm text-gray-500">{post.timestamp}</span>
              </div>
              <p>{post.content}</p>
              <div className="flex items-center justify-between mt-2">
                <button className="text-blue-500" onClick={() => handleLikeClick(post.id)}>
                  {post.likes} Likes
                </button>
                <button className="text-gray-500">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
