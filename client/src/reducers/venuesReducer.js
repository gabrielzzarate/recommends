import { SEARCH_VENUES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SEARCH_VENUES:
			return action.payload.response.venues;
		default:
			return state;
	}
}
