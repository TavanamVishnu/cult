// Home.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const Home = () => {
  const [welcomeMessages] = useState([
    'Welcome to CultivConnect!',
    'Enhance your farming experience with us.',
    'Discover resources to boost your agricultural practices.',
  ]);

  const [specifiedImages] = useState([
    'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGax9_2L7VrGueOAZVtqkXc6cBIgBKY1_PlfDYS2aGLog5T19xQzEb9WAWdYI8hlKcxF4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H7MVFUVt5vzsxCeNtMgI0xWhAplVhbE2nfCQ9GaA7umy-ido3AdigaARV--ScwLlz04&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezcp5ychf_ygNFam1WudQnsYbzV48MqQV7Q&usqp=CAU',
  ]);

  const [cultivatedCrops] = useState([
    { id: 1, name: 'Rice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyPi1xr3dhrXFF1lbdbW_KwQkTdG9VHM-XA&usqp=CAU', info: 'Information about Rice' },
    { id: 2, name: 'Cotton', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4CJ0sKsAjlVo4vppOf1evBedtxPswRXztQ&usqp=CAU', info: 'Information about Cotton' },
    { id: 3, name: 'Red Chillies', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycIn6fqOxkAvmvTlGQlF_PJfzpKhhuZ5R1A&usqp=CAU', info: 'Information about Red Chillies' },
    { id: 4, name: 'Mangoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGH1jOQ29Xs9Ta87iKaAZVD-sxfV4iRI-9w&usqp=CAU', info: 'Information about Mangoes' },
    { id: 5, name: 'Turmeric', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDD9hccqoK-W8p84ZBt3mfcmrw46GLo5Q6g&usqp=CAU', info: 'Information about Turmeric' },
  ]);

  const [selectedCropIndex, setSelectedCropIndex] = useState(0);

  useEffect(() => {
    // Automatically change images every 5 seconds
    const interval = setInterval(() => {
      setSelectedCropIndex((prevIndex) => (prevIndex + 1) % cultivatedCrops.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cultivatedCrops.length]);

  const handlePrevClick = () => {
    // Handle previous arrow click
    setSelectedCropIndex((prevIndex) => (prevIndex - 1 + cultivatedCrops.length) % cultivatedCrops.length);
  };

  const handleNextClick = () => {
    // Handle next arrow click
    setSelectedCropIndex((prevIndex) => (prevIndex + 1) % cultivatedCrops.length);
  };

  // ...

return (
  <Container className="text-center">
    <div className="my-4">
      <h1 className="display-4" style={{ color: 'black' }}>{welcomeMessages[0]}</h1>
      <p className="lead" style={{ color: 'black' }}>
        {welcomeMessages.slice(1).map((message, index) => (
          <span key={index}>{message}<br /></span>
        ))}
      </p>
    </div>

    {/* Rotating Images Carousel */}
    <Carousel className="mb-4" style={{ height: '400px' }}>
      {specifiedImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 img-fluid" src={image} alt={`Specified Image ${index + 1}`} style={{ width: '100%', height: '400px' }}/>
        </Carousel.Item>
      ))}
    </Carousel>

    {/* Messages Section */}
    <div className="mb-4" style={{ color: 'black' }}>
      <p>
        This app is designed to provide assistance and information for farmers.
        Explore the features and resources to enhance your farming experience.
      </p>
    </div>

    <h2>Mostly Cultivated Crops in Telangana </h2> <br/>
    <Row className="mb-4">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Img variant="top" src={cultivatedCrops[selectedCropIndex].image} alt={`Crop ${selectedCropIndex + 1}`} style={{height:'300px',width:'auto'}}/>
          <Card.Body>
            <Card.Title>{cultivatedCrops[selectedCropIndex].name}</Card.Title>
            <Card.Text>{cultivatedCrops[selectedCropIndex].info}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Next and Previous Arrows */}
    <div className="text-center mt-4">
      <span className="btn btn-primary mx-2" onClick={handlePrevClick}>&lt; Previous</span>
      <span className="btn btn-primary mx-2" onClick={handleNextClick}>Next &gt;</span>
    </div>
  </Container>
);

// ...
      }

export default Home;
