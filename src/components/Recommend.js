import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MyComponent = () => {
  const [inputData, setInputData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e, inputName) => {
    setInputData({
      ...inputData,
      [inputName]: e.target.value,
    });
  };

  const handlePrediction = async () => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="input1">
              <Form.Label>Input 1:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input1}
                onChange={(e) => handleInputChange(e, 'input1')}
              />
            </Form.Group>
            <Form.Group controlId="input2">
              <Form.Label>Input 2:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input2}
                onChange={(e) => handleInputChange(e, 'input2')}
              />
            </Form.Group>
            <Form.Group controlId="3">
              <Form.Label>Input 3:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input3}
                onChange={(e) => handleInputChange(e, 'input3')}
              />
            </Form.Group>
            <Form.Group controlId="input4">
              <Form.Label>Input 4:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input4}
                onChange={(e) => handleInputChange(e, 'input4')}
              />
            </Form.Group>
            <Form.Group controlId="input5">
              <Form.Label>Input 5:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input5}
                onChange={(e) => handleInputChange(e, 'input5')}
              />
            </Form.Group>
            <Form.Group controlId="input6">
              <Form.Label>Input 6:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input6}
                onChange={(e) => handleInputChange(e, 'input6')}
              />
            </Form.Group>
            <Form.Group controlId="input7">
              <Form.Label>Input 7:</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={inputData.input7}
                onChange={(e) => handleInputChange(e, 'input7')}
              />
            </Form.Group>
            <br/>
            

            {/* Repeat similar Form.Group sections for other inputs (input2 to input7) */}

            <Button variant="primary" onClick={handlePrediction}>
              Get Prediction
            </Button>
          </Form>

          {prediction && (
            <div className="mt-3">
              <p>Prediction: {prediction}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
