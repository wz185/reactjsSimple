import { FETCH_WEATHER } from '../actions/temperature/index';

export default function (state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// [ action.payload.data, ...state ]; 
			// this created a state variable instead of modifying the current state
			// return state.concat(action.payload.data);
			return [ action.payload.data, ...state ];
	}

	return state;
}