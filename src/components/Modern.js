import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Modern = () => {
  const methods = [
    {
      id: 1,
      method: 'Crop Rotation',
      description: 'Helps in maintaining soil fertility and preventing pest problems.',
      tools: 'Cultivator',
      price: 'INR 2000 - INR 25000',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      method: 'Mulching',
      description: 'Reduces soil erosion and increases soil moisture.',
      tools: 'Cow dung/sugarcane bags',
      price: '',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      method: 'Drip Irrigation',
      description: 'Efficient water use and nutrient delivery directly to plant roots.',
      tools: 'Drip lines, emitters',
      price: 'INR 5000 - INR 30000',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      method: 'Organic Farming',
      description: 'Avoids synthetic chemicals and encourages natural processes.',
      tools: 'Compost, organic fertilizers',
      price: 'INR 10000 - INR 50000',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      method: 'Agroforestry',
      description: 'Integrates trees and shrubs into agricultural land for multiple benefits.',
      tools: 'Saplings, pruning tools',
      price: 'INR 15000 - INR 60000',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <Container className="text-center mt-5">
      <h2>Modern Agriculture Methods</h2>
      <div className="d-flex flex-wrap">
        {methods.map((method) => (
          <Card key={method.id} style={{ width: '18rem', margin: '10px' }}>
            {method.imageUrl && (
              <Card.Img variant="top" src={method.imageUrl} alt={method.method} />
            )}
            <Card.Body>
              <Card.Title>{method.method}</Card.Title>
              <Card.Text>{method.description}</Card.Text>
              <Card.Text>Tools: {method.tools}</Card.Text>
              <Card.Text>Price: {method.price}</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Modern;
