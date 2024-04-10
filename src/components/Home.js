import React from 'react';
import { Card, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import telangana from '../assets/telangana.jpg';
import cropdiv from '../assets/cropdiv.png'
import agri from '../assets/iot-in-agriculture.jpg'
import im1 from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'
import im3 from '../assets/im3.jpg'
const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/aboutus');
  };

  return (
    <div>
      {/* Initial Content in Single Card Model */}
      <Container className="mt-5">
        <Card className="mb-4 p-3" >
          <Row className="no-gutters">
            <Col md={6}>
              <img src={agri} alt="Placeholder" className="img-fluid" />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <Card.Body>
                <Card.Title>Welcome To CultivConnect</Card.Title>
                <Card.Text>
                CultivConnect, plays a pivotal role in revolutionizing agricultural practices by harnessing the 
                power of technology. In today's rapidly evolving agricultural landscape, where farmers face multifaceted challenges 
                ranging from climate change to market fluctuations, CultivConnect emerges as a beacon of hope. By amalgamating cutting-edge
                 technologies like machine learning and data analytics with agricultural expertise, the platform empowers farmers with invaluable
                  resources and insights. From personalized crop recommendations based on soil characteristics to real-time weather updates 
                  and market trends, CultivConnect equips farmers with the tools they need to make informed decisions and optimize their
                   yield. Moreover, the platform fosters a sense of community among farmers, facilitating knowledge exchange 
                   and peer support through its interactive features. As agriculture remains the backbone of economies worldwide,
                    CultivConnect stands poised to drive sustainable growth, resilience, and prosperity in rural communities,
                 ensuring a brighter and more secure future for farmers and the agricultural sector as a whole.                </Card.Text>
                <Button variant="primary" onClick={handleLearnMoreClick}>Learn More</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Carousel of Agriculture-Related Pictures */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Agriculture in Pictures</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={im3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container><br/>
      
<Row className="justify-content-center">
  <div className="col-md-6">
    <Card style={{ margin: '10px', height: '100%' }}>
    <Card.Img variant="top" src={telangana} style={{ height: '250px', objectFit: 'cover', marginBottom: '20px' }} />
    <Card.Body>
      <Card.Title>Telangana Agricultural Statistics</Card.Title>
      <Card.Text>
        <p>Total Farmers: 2,500,000</p>
        <p>Total Agricultural Land: 150,000 hectares</p>
        <p>Total Crop Production: 500,000 tonnes</p>
        <p>Total Livestock: 2,000,000</p>
      </Card.Text>
      <Button variant="primary">Learn More</Button>
    </Card.Body>
    </Card>
  </div>
  <div className="col-md-6">
  <Card style={{ margin: '10px' }}>
  <Card.Img variant="top" src={cropdiv} style={{ height: '250px', objectFit: 'cover', marginBottom: '20px' }} />
    <Card.Body>
      <Card.Title>Crop Index</Card.Title>
      <Card.Text>
        <p>Current Crop Index: A numerical value representing the overall health and productivity of crops in a region.</p>
        <p>Top Crop: The primary or most prominent crop cultivated in the region.</p>
        <p>Crop Diversity Index: A measure of the variety and abundance of different crop species grown in a specific area.</p>
        <p>Total Crop Production: 100</p>
        <p>Total Number of Crops: 50</p>
        <p>Average Number of Crops per Farmer: 8</p>
        <p>Crop Diversity Index: 0.64</p>
      </Card.Text>

      <Button variant="primary">Learn More</Button>
    </Card.Body>
  </Card>
</div>

</Row><br/>


      
    </div>
  );
};

export default Home;
