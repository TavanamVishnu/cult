import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthentication = async (e) => {
    e.preventDefault();

    // Basic validation
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        console.log(response.data);
        // Handle successful login
      } catch (error) {
        console.error('Login failed:', error.response.data);
        // Handle login error
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/signup', { username, mobileNumber, password });
        console.log(response.data);
        // Handle successful signup
      } catch (error) {
        console.error('Signup failed:', error.response.data);
        // Handle signup error
      }
    }
  };

  return (
    <Container>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <Form onSubmit={handleAuthentication}>
        {!isLogin && (
          <Form.Group controlId="mobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>
        )}

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {!isLogin && (
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        )}

        <br />
        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Signup'}
        </Button>

        <p className="mt-2">
          {isLogin ? "New User? " : "Already have an account? "}
          <span className="text-primary" onClick={handleToggleForm}>
            {isLogin ? 'Signup here' : 'Login here'}
          </span>
        </p>
      </Form>
    </Container>
  );
};

export default Authentication;

