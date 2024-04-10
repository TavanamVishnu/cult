import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


// Global styles for the body
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url('reply3.jpg'); // Replace with your body background image URL
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
const Title = styled.h3`
  font-size: 3rem;
  color: black;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Arial', sans-serif;
  // border-bottom: 2px solid #007bff; /* Reduce border width for a shorter length */
  padding-bottom: 10px; /* Add padding to separate the text from the border */
  letter-spacing: 1px; /* Increase letter spacing for visual appeal */
`;

// Styled components
const RepliesContainer = styled.div`
  // background-image: url('reply2.jpg'); // Use the imported image
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  color: #f8f9fa; // Light text color for contrast
`;



const ReplyList = styled.ul`
  list-style: none;
  padding: 0;
  background: rgba(255, 255, 255, 0.8); // Semi-transparent background for readability
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ReplyItem = styled.li`
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2; // Slight change on hover for interactivity
  }
`;

const AuthorText = styled.p`
  color: #495057;
  font-weight: bold;
`;

const ContentText = styled.p`
  color: #343a40;
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 2000px;
  padding: 10px 15px;
  cursor: pointer;
  display: block;
  width: 50%;
  margin: 20px auto 0; /* Set top margin to 20px and center horizontally */
  /* You can adjust top margin as needed */
  
  &:hover {
    background-color: #0056b3;
  }
`;


// ViewReplies component
const ViewReplies = ({ postId, onClose, replies }) => {
  return (
    <>
      <GlobalStyle />
      <RepliesContainer>
        <Title>View Replies</Title>
        {replies && replies.length > 0 ? (
          <ReplyList>
            {replies.map(reply => (
              <ReplyItem key={reply.id}>
                <AuthorText>Author: {reply.author}</AuthorText>
                <ContentText>Content: {reply.content}</ContentText>
              </ReplyItem>
            ))}
          </ReplyList>
        ) : (
          <ContentText>No replies available.</ContentText>
        )}
        <BackButton type="button" onClick={onClose}>Back to Posts</BackButton>
      </RepliesContainer>
    </>
  );
};

export default ViewReplies;
