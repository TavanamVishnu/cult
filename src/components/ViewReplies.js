// src/components/ViewReplies.js
import React from 'react';


const ViewReplies = ({ postId, onClose, replies }) => {
  return (
    <div>
      <h3>View Replies</h3>
      {replies && replies.length > 0 ? (
        <ul className="list-group">
          {replies.map(reply => (
            <li key={reply.id} className="list-group-item">
              <p className="card-text">Author: {reply.author}</p>
              <p className="card-text">Content: {reply.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No replies available.</p>
      )}
      <button type="button" className="btn btn-primary mt-2" onClick={onClose}>Back to Posts</button>
    </div>
  );
};

export default ViewReplies;
