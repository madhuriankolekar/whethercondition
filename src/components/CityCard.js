import React from 'react';

const CityCard = ({ city, onRemove, onShowTrend }) => {
  return (
    <div className="city-card">
      <h2>{city.cityName}</h2>
      <p>Current Temp: {city.currentTemperature}°C</p>
      <p>Weather: {city.weatherCondition}</p>
      <p>High: {city.highTemperature}°C | Low: {city.lowTemperature}°C</p>
      <button onClick={() => onShowTrend(city)}>Show Temperature Trend</button>
      <button onClick={() => onRemove(city.id)}>Remove City</button>
    </div>
  );
};

export default CityCard;
