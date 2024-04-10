import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Styled components
const StyledContainer = styled(Container)`
  background-image: url('news.jpg'); // Add your desired background image URL here
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 40px;
`;

const NewsCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  overflow: hidden;
  display: flex; // Use flex to align image and text side by side
  flex-direction: row; // Align items horizontally

  &:hover {
    transform: translateY(-5px);
  }
`;
const NewsHeading = styled.h2`
  font-size: 2.5rem; // Larger font size for prominence
  color: ; // A vibrant color for visibility
  text-shadow: 0px 2px 4px rgba(0,0,0,0.2); // Subtle shadow for depth
  text-align: center; // Center alignment to draw attention
  margin-bottom: 30px; // Space below the heading
  font-family: 'Arial', sans-serif; // Modern font for a clean look
`;
const NewsImage = styled.div`
  flex: 1; // Assign flex grow to image and content equally
  background-size: contain; // Ensure the entire image fits within the container
  background-position: center;
  background-repeat: no-repeat; // Prevent the image from repeating
`;

const NewsBody = styled.div`
  flex: 4; // Assign flex grow to image and content equally
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewsTitle = styled.h5`
  color: #333;
  margin-bottom: 10px;
`;

const NewsText = styled.p`
  color: #666;
  margin-bottom: 10px; // Add some space below the text
`;

const ReadMoreButton = styled(Button)`
  margin-top: 15px;
`;

const GNewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [expandedNews, setExpandedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'db85ed04ffc58b7b539db1d57d182957';
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=agriculture&country=india&token=${apiKey}&lang=en`
        );

        if (response.ok) {
          const data = await response.json();
          setNewsData(data.articles);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  const handleReadMore = (index) => {
    setExpandedNews(index === expandedNews ? null : index);
  };

  return (
    <StyledContainer>
      <NewsHeading>Top Headlines of Agriculture News</NewsHeading>
      <Row>
        {newsData.map((newsItem, index) => (
          <Col key={newsItem.url} xs={12} md={6}> {/* Adjusted for 2 per row */}
            <NewsCard>
              <NewsImage style={{ backgroundImage: `url(${newsItem.image})` }} /> {/* Ensure proper display of image */}
              <NewsBody>
                <NewsTitle>{newsItem.title}</NewsTitle>
                {index === expandedNews ? (
                  <div>
                    <NewsText>{newsItem.description}</NewsText>
                    <ReadMoreButton variant="secondary" onClick={() => handleReadMore(index)}>
                      Read Less
                    </ReadMoreButton>
                  </div>
                ) : (
                  <div>
                    <NewsText>
                    {index === expandedNews ? newsItem.description : `${newsItem.description.slice(0, 250)}...`}
                    </NewsText>
                    <ReadMoreButton variant="primary" onClick={() => handleReadMore(index)}>
                      Read More
                    </ReadMoreButton>
                  </div>
                )}
              </NewsBody>
            </NewsCard>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default GNewsComponent;

