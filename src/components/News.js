import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

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
    <Container>
      <h2>Top Headlines of Agriculture News</h2>
      <Row>
        {newsData.map((newsItem, index) => (
          <Col key={newsItem.url} xs={12} md={6} lg={4}>
            <Card style={{ marginBottom: '20px' }}>
              {newsItem.image && (
                <Card.Img variant="top" src={newsItem.image} alt="News" />
              )}
              <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                {index === expandedNews ? (
                  <div>
                    <Card.Text>{newsItem.description}</Card.Text>
                    <Button variant="secondary" onClick={() => handleReadMore(index)}>
                      Read Less
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Card.Text>{newsItem.description.slice(0, 100)}...</Card.Text>
                    <Button variant="primary" onClick={() => handleReadMore(index)}>
                      Read More
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GNewsComponent;
