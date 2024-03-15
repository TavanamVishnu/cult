// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    axios.post('http://localhost:3001/api/createPost', { title, content })
      .then(response => {
        console.log(response.data);
        // Optionally, handle success in another way
        // For example, you might want to notify the parent component about the post creation
        if (typeof onPostCreated === 'function') {
          onPostCreated();
        }
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <div>
      <h3>Create Post</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">Title:</label>
          <input type="text" className="form-control" id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} width='50'/>
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">Content:</label>
          <textarea className="form-control" id="postContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="button" className="btn btn-success" onClick={handleCreatePost}>Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
