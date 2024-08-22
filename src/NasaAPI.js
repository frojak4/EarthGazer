import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const getPicture = async (date) => {
    try {
        const response = await axios.get(`https://epic.gsfc.nasa.gov/api/enhanced/date/${date}?api_key=${apiKey}`) 
        return response.data;
    } catch (err) {
        console.error(err);
    }
}