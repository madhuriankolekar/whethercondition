import React, { useState } from 'react';

const CitySearch = ({ onAddCity }) => {
  const [newCityName, setNewCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddCity = () => {
    if (!newCityName) {
      setErrorMessage('City name cannot be empty');
      return;
    }
    onAddCity(newCityName);
    setNewCityName('');
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={newCityName}
        onChange={(e) => setNewCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleAddCity}>Add City</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default CitySearch;
