import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import backgroundImageUrl from '../assets/weather.jpg'

const WeatherInfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WeatherInfoHeader = styled.h2`
  color: #2193b0;
  margin-bottom: 0.5rem;
`;

const WeatherInfoText = styled.p`
  color: #333;
  margin: 0.25rem 0;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;



const NeumorphicContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImageUrl}) no-repeat center center fixed;
  background-size: cover;
`;



const NeumorphicCard = styled(motion.div)`
  background: #e0e5ec;
  border-radius: 20px;
  box-shadow: -8px -8px 20px #ffffff, 8px 8px 20px #babecc;
  padding: 2rem;
  max-width: 400px;
  
  margin: 2rem;
  text-align: center;
`;

const NeumorphicButton = styled(motion.button)`
  background: #e0e5ec;
  color: #6d6875;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  box-shadow: -2px -2px 5px #ffffff, 2px 2px 5px #babecc;
  cursor: pointer;
  &:hover {
    background: #ccd1d9;
  }
`;

const NeumorphicInput = styled.input`
  background: #e0e5ec;
  border: none;
  border-radius: 10px;
  padding: 0.75rem;
  margin: 0.5rem 0;
  box-shadow: inset -2px -2px 5px #ffffff, inset 2px 2px 5px #babecc;
  width: calc(100% - 1.5rem);
`;
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
    
    <NeumorphicContainer>
      
      <NeumorphicCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NeumorphicButton onClick={getLocationWeather}>
          Get My Location Weather
        </NeumorphicButton>
        <form onSubmit={getManualWeather}>
          <NeumorphicInput
            type="text"
            value={manualLatitude}
            onChange={(e) => setManualLatitude(e.target.value)}
            placeholder="Latitude"
          />
          <NeumorphicInput
            type="text"
            value={manualLongitude}
            onChange={(e) => setManualLongitude(e.target.value)}
            placeholder="Longitude"
          />
          <NeumorphicButton type="submit">
            Get Entered Coordinates Weather
          </NeumorphicButton>
        </form>
        {error && <p>{error}</p>}
        {weatherData && (
  <WeatherInfoContainer>
    <WeatherInfoHeader>{weatherData.name}, {weatherData.sys.country}</WeatherInfoHeader>
    <WeatherIcon src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
    <WeatherInfoText>{weatherData.weather[0].description}</WeatherInfoText>
    <WeatherInfoText>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</WeatherInfoText>
    <WeatherInfoText>Humidity: {weatherData.main.humidity}%</WeatherInfoText>
    <WeatherInfoText>Wind Speed: {weatherData.wind.speed} m/s</WeatherInfoText>
  </WeatherInfoContainer>
)}
      </NeumorphicCard>
    </NeumorphicContainer>
  );
};

export default Weather;