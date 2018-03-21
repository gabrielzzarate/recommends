import { REVIEW_VENUE } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case REVIEW_VENUE:
			return action.payload;
		default:
			return state;
	}
}
