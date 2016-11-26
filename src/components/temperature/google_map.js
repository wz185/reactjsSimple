import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const API_KEY = 'AIzaSyAI3eU72FLfynFfkyVKzR0s84oHKCHvT9Y';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{ height: "100%" }} /> }
	        googleMapElement={
	          <GoogleMap
	            defaultZoom={12}
	            defaultCenter={{ lat: props.lat, lng: props.lon }}
	          />}
	   />
	);
}
