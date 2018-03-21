import { FIND_USER } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FIND_USER:
			return action.payload;
		default:
			return state;
	}
}
