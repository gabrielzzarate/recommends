import { FETCH_ENTRIES, CHECK_ENTRY } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ENTRIES:
			return action.payload;
		case CHECK_ENTRY:
			return state.map((item, index) => {
				if (index !== action.payload.index) {
					return item;
				}

				return {
					...item,
					...action.item
				};
			});
		// return [
		// 	...state.slice(1, action.payload.index),
		// 	action.payload.entry,
		// 	...state.slice(action.payload.index)
		// ];

		default:
			return state;
	}
}
