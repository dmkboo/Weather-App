import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([ action.payload.data ]); //DEFAULT
			return [ action.payload.data, ...state ]; //ES6
		default:
	}
	return state;
}