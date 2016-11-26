import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/temperature/chart';
import GoogleMap from '../../components/temperature/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressureData = cityData.list.map(weather => weather.main.pressure);
		const humidityData = cityData.list.map(weather => weather.main.humidity);
		const {lat, lon} = cityData.city.coord;

		return (
			<tr key={name}>
				<td> <GoogleMap lat={lat} lon={lon}/> </td>
				<td> 
					<Chart data={temps} color="orange" units="K"/>
				</td>
				<td> 
					<Chart data={pressureData} color="green" units="hPa"/>
				</td>
				<td> 
					<Chart data={humidityData} color="blue" units="%"/>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>city</th>
						<th>temperature (K)</th>
						<th>pressure (hPa)</th>
						<th>humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather }; // { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);