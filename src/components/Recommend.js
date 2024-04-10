import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Recommend = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    pH: '',
    rainfall: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/croprecommendation', { // Update the URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data here
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Recommendation Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="N">
          <Form.Label>N:</Form.Label>
          <Form.Control type="text" name="N" value={formData.N} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="P">
          <Form.Label>P:</Form.Label>
          <Form.Control type="text" name="P" value={formData.P} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="K">
          <Form.Label>K:</Form.Label>
          <Form.Control type="text" name="K" value={formData.K} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="temperature">
          <Form.Label>Temperature:</Form.Label>
          <Form.Control type="text" name="temperature" value={formData.temperature} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="humidity">
          <Form.Label>Humidity:</Form.Label>
          <Form.Control type="text" name="humidity" value={formData.humidity} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="pH">
          <Form.Label>pH:</Form.Label>
          <Form.Control type="text" name="pH" value={formData.pH} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="rainfall">
          <Form.Label>Rainfall:</Form.Label>
          <Form.Control type="text" name="rainfall" value={formData.rainfall} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Recommend;
