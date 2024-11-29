// import axios from 'axios';

// const API_URL = 'http://192.168.31.32:8080/api/weather'; // Your Spring Boot API endpoint

// export const getAllCities = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching cities:', error);
//         throw error;
//     }
// };

// export const addCityWeather = async (cityWeather) => {
//     try {
//         const response = await axios.post(API_URL, cityWeather);
//         return response.data;
//     } catch (error) {
//         console.error('Error adding city:', error);
//         throw error;
//     }
// };

// export const deleteCityWeather = async (id) => {
//     try {
//         await axios.delete(`${API_URL}/${id}`);
//     } catch (error) {
//         console.error('Error deleting city:', error);
//         throw error;
//     }
// };

// export const searchCityWeather = async (cityName) => {
//     try {
//         const response = await axios.get(`${API_URL}/search`, {
//             params: { cityName },
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error searching for city:', error);
//         throw error;
//     }
// };
