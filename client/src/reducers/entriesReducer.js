import { FETCH_ENTRIES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ENTRIES:
			return action.payload;
		//case SHARE_ENTRY:

		default:
			return state;
	}
}
