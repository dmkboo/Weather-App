import axios from 'axios';

const API_KEY = '4dae0e1ad3a7c349af83980cd0544759';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export  function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},mx`;
	const request = axios.get(url);
	
	return{
		type: FETCH_WEATHER,
		payload: request
	};
}