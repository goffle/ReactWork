import axios from 'axios';

const API_KEY = 'e8f48bb9d96fc834b73bb77d4c5ab1af'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WHEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    
    console.log('Request : ', request);

    return {
        type: FETCH_WEATHER,
        payload : request
    };
}