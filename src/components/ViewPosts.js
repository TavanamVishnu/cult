
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewReplies from './ViewReplies';
import CreateReply from './CreateReply';

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showCreateReply, setShowCreateReply] = useState(false);
  const [showViewReplies, setShowViewReplies] = useState(false);
  const [replies, setReplies] = useState({}); // Use an object to store replies for each post

  useEffect(() => {
    axios.get('http://localhost:3001/api/getPosts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleReplyClick = (postId) => {
    setSelectedPostId(postId);
    setShowCreateReply(true);
  };

  const handleViewRepliesClick = (postId) => {
    setSelectedPostId(postId);
    setShowViewReplies(true);

    // Check if replies for the selected post have already been fetched
    if (!replies[postId]) {
      // Fetch replies only if not already available
      axios.get(`http://localhost:3001/api/getReplies/${postId}`)
        .then(response => {
          setReplies({
            ...replies,
            [postId]: response.data,
          });
        })
        .catch(error => console.error('Error fetching replies:', error));
    }
  };

  return (
    <div>
      <h3>View Posts</h3>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <h5 className="card-title">Title: {post.title}</h5>
            <p className="card-text">Content: {post.content}</p>
            <button type="button" className="btn btn-primary mr-2" onClick={() => handleReplyClick(post.id)}>Reply</button>
            <button type="button" className="btn btn-success" onClick={() => handleViewRepliesClick(post.id)}>View Replies</button>
            {(showCreateReply || showViewReplies) && selectedPostId === post.id && (
              showViewReplies ? (
                <ViewReplies postId={post.id} onClose={() => setShowViewReplies(false)} replies={replies[post.id]} />
              ) : (
                <CreateReply postId={post.id} onClose={() => setShowCreateReply(false)} />
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPosts;
