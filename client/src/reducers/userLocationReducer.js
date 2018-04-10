import { FIND_USER } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FIND_USER:
			console.log('found user', action.payload);
			return action.payload;
		default:
			return state;
	}
}
