import axios from 'axios';

const API_URL = 'http://192.168.31.32:8080/api/weather';

export const getCities = async () => {
  return axios.get(API_URL);
};

export const addCity = async (cityData) => {
  return axios.post(API_URL, cityData);
};

export const removeCity = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const searchCity = async (cityName) => {
  return axios.get(`${API_URL}/search?cityName=${cityName}`);
};
