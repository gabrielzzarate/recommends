import {
	VENUES_HAS_ERRORED,
	VENUES_IS_LOADING,
	VENUES_FETCH_DATA_SUCCESS
} from '../actions/types';

export function venuesHasErrored(state = false, action) {
	switch (action.type) {
		case VENUES_HAS_ERRORED:
			console.log('errored....');
			return action.hasErrored;
		default:
			return state;
	}
}
export function venuesIsLoading(state = false, action) {
	switch (action.type) {
		case VENUES_IS_LOADING:
			console.log('loading...');
			return action.isLoading;
		default:
			return state;
	}
}
export function venues(state = [], action) {
	switch (action.type) {
		case VENUES_FETCH_DATA_SUCCESS:
			console.log('success...');
			return action.venues;
		default:
			return state;
	}
}
