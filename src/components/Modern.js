import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import croprot from '../assets/croprot.jpg'
import drip from '../assets/drip.jpg'
import mulching from '../assets/mulching.jpg'
import agro from '../assets/agro.jpg'
import organic from '../assets/organic.jpg'

const Modern = () => {
  const methods = [
    {
      id: 1,
      method: 'Crop Rotation',
      description: 'Helps in maintaining soil fertility and preventing pest problems.',
      tools: 'Cultivator',
      price: 'INR 2000 - INR 25000',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKdposOUfjDNdgWdkTvkuXZ2MM5i549s7niHgqt71AQ&s'
    },
    {
      id: 2,
      method: 'Mulching',
      description: 'Reduces soil erosion and increases soil moisture.',
      tools: 'Cow dung/sugarcane bags',
      price: '',
      imageUrl: 'https://media.istockphoto.com/id/1427610220/photo/growing-plants-in-the-plantation-fields-by-mulching.jpg?s=612x612&w=0&k=20&c=0Ayf0wsOMl9UdxdCRomukQEj46lpf7LWAV0a_hQkzJI='
    },
    {
      id: 3,
      method: 'Drip Irrigation',
      description: 'Efficient water use and nutrient delivery directly to plant roots.',
      tools: 'Drip lines, emitters',
      price: 'INR 5000 - INR 30000',
      imageUrl: 'https://media.istockphoto.com/id/1319625630/photo/seedlings-of-cucumbers-in-a-greenhouse-on-irrigation.jpg?s=612x612&w=0&k=20&c=ybgFoihuQwPGjRtAGXt8d_xlMJE-ogfxezKdbzxgbbk='
    },
    {
      id: 4,
      method: 'Organic Farming',
      description: 'Avoids synthetic chemicals and encourages natural processes.',
      tools: 'Compost, organic fertilizers',
      price: 'INR 10000 - INR 50000',
      imageUrl: 'https://img.freepik.com/free-photo/woman-holding-basket-full-different-vegetables_23-2148580022.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais'
    },
    {
      id: 5,
      method: 'Agroforestry',
      description: 'Integrates trees and shrubs into agricultural land for multiple benefits.',
      tools: 'Saplings, pruning tools',
      price: 'INR 15000 - INR 60000',
      imageUrl: 'https://media.istockphoto.com/id/1289707100/photo/reforestation-in-the-amazon-region-with-shizolobium-amazonicum.jpg?s=612x612&w=0&k=20&c=0Rc84nTSoYbke01pWMXvFoPK-v4NYnUjI9XywWTITR4='
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
