import React, { Component } from 'react';
import SearchBar from '../../containers/temperature/search_bar';
import WeatherList from '../../containers/temperature/weather_list';

export default class TemperatureApp extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<WeatherList />
			</div>
		);	
	}
	
}