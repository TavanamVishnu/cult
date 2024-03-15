// src/components/CreateReply.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateReply = ({ postId, onClose }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleCreateReply = () => {
    axios.post(`http://localhost:3001/api/createReply/${postId}`, { author, content })
      .then(response => {
        console.log(response.data);
        // Optionally, handle success in another way
        // For example, you might want to refresh the replies on success
        if (typeof onClose === 'function') {
          onClose();
        }
      })
      .catch(error => console.error('Error creating reply:', error));
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="replyAuthor" className="form-label">Author:</label>
        <input type="text" className="form-control" id="replyAuthor" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="replyContent" className="form-label">Content:</label>
        <textarea className="form-control" id="replyContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleCreateReply}>Reply</button>
      <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>Close</button>
    </div>
  );
};

export default CreateReply;
