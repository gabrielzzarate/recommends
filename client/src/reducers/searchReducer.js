import { UPDATE_TERM } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case UPDATE_TERM:
			return action.payload;
		default:
			return state;
	}
}
