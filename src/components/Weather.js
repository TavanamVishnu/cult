import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [manualLatitude, setManualLatitude] = useState('');
  const [manualLongitude, setManualLongitude] = useState('');

  const getWeatherData = async (latitude, longitude) => {
    setError(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b76ac1edae14ddae7f67d912ba6e69ea`);
      const data = await response.json();

      if (data.cod === '404') {
        setError('Location not found. Please enter a valid location.');
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  const getLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          getWeatherData(latitude, longitude);
        },
        (error) => {
          setError('Error getting your location. Please try again or enter a location manually.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Please enter a location manually.');
    }
  };

  const getManualWeather = (e) => {
    e.preventDefault();
    if (manualLatitude && manualLongitude) {
      getWeatherData(manualLatitude, manualLongitude);
    } else {
      setError('Please enter both latitude and longitude.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Button variant="primary" onClick={getLocationWeather}>
              Get Weather for My Location
            </Button>
          </Form>
          <br />
          <Form onSubmit={getManualWeather}>
            <Form.Group controlId="manualLatitude">
              <Form.Label>Enter Latitude:</Form.Label>
              <Form.Control
                type="text"
                value={manualLatitude}
                onChange={(e) => setManualLatitude(e.target.value)}
                placeholder="Latitude"
              />
            </Form.Group>
            <Form.Group controlId="manualLongitude">
              <Form.Label>Enter Longitude:</Form.Label>
              <Form.Control
                type="text"
                value={manualLongitude}
                onChange={(e) => setManualLongitude(e.target.value)}
                placeholder="Longitude"
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Get Weather for Entered Coordinates
            </Button>
          </Form>
          <br />
          {error && <Alert variant="danger">{error}</Alert>}
          {weatherData && (
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>{weatherData.name}, {weatherData.sys.country}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{weatherData.weather[0].description}</Card.Subtitle>
                <Card.Text>Temperature: {weatherData.main.temp}°K</Card.Text>
                <Card.Text>Humidity: {weatherData.main.humidity}%</Card.Text>
                <Card.Text>Wind Speed: {weatherData.wind.speed} m/s</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
