const API_KEY = 'e7ebb60b3a5ef1cc968a975129e2595d';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export default function fetchWeather(city) {
	const url = `${URL}&q=${city},au`;
	const response = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: response
	}
}
