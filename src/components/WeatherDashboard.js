import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityCard from './CityCard';
import CitySearch from './CitySearch';
import TemperatureChart from './TemperatureChart';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [cities, setCities] = useState([]);
  const [cityData, setCityData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://192.168.31.32:8080/api/weather');
      setCities(response.data);
    } catch (error) {
      setErrorMessage('Failed to fetch cities');
    }
  };

  const addCity = async (cityName) => {
    const cityData = {
      cityName,
      currentTemperature: 25.0,
      weatherCondition: 'Sunny',
      highTemperature: 30.0,
      lowTemperature: 20.0,
      forecast: '[{"day": "Day 1", "temp": 25}, {"day": "Day 2", "temp": 26}, {"day": "Day 3", "temp": 27}]'
    };
    try {
      const response = await axios.post('http://192.168.31.32:8080/api/weather', cityData);
      setCities([...cities, response.data]);
    } catch (error) {
      setErrorMessage('Failed to add city');
    }
  };

  const removeCity = async (id) => {
    try {
      await axios.delete(`http://192.168.31.32:8080/api/weather/${id}`);
      setCities(cities.filter(city => city.id !== id));
    } catch (error) {
      setErrorMessage('Failed to remove city');
    }
  };

  const showTemperatureTrend = (city) => {
    const forecastData = JSON.parse(city.forecast);
    const labels = forecastData.map(f => f.day);
    const data = forecastData.map(f => f.temp);

    setCityData({
      labels,
      datasets: [{
        label: `Temperature Trend for ${city.cityName}`,
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }]
    });
  };

  return (
    <div className="dashboard">
      <h1>Weather Forecast Dashboard</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <CitySearch onAddCity={addCity} />

      <div className="city-list">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            city={city}
            onRemove={removeCity}
            onShowTrend={showTemperatureTrend}
          />
        ))}
      </div>

      {cityData && <TemperatureChart data={cityData} />}
    </div>
  );
};

export default WeatherDashboard;
