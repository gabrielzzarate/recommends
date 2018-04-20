import { FETCH_USER, LOG_OUT } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_USER:
			//return action.payload || false;
			return action.payload || false;
		case LOG_OUT:
			return {};
		default:
			return state;
	}
}
