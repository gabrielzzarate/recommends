import axios from 'axios';
import {
	FETCH_USER,
	FETCH_ENTRIES,
	UPDATE_ENTRY,
	DELETE_ENTRY,
	REQUEST_VENUES,
	VENUES_HAS_ERRORED,
	VENUES_IS_LOADING,
	VENUES_FETCH_DATA_SUCCESS,
	UPDATE_TERM,
	REVIEW_VENUE,
	FIND_USER,
	CHECK_ENTRY
} from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const findUserLocation = () => dispatch => {
	var options = {
		enableHighAccuracy: false,
		maximumAge: Infinity,
		timeout: 60000
	};

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);

	function success(pos) {
		var crd = pos.coords;
		dispatch({
			type: FIND_USER,
			payload: { lat: crd.latitude, lng: crd.longitude }
		});
	}
	//console.log('position', position);
	// dispatch({
	// 	type: FIND_USER,
	// 	payload: { lat: position.coords.latitude, lng: position.coords.longitude }
	// });
};

export const fetchEntries = () => async dispatch => {
	const res = await axios.get('/api/entries');
	dispatch({ type: FETCH_ENTRIES, payload: res.data });
};

// export const searchEntries = (values, lat, lng, history) => async dispatch => {
// 	const res = await axios.post('/api/search', { values, lat, lng });
// 	history.push('/results');
// 	dispatch({ type: REQUEST_VENUES, payload: res.data });
// };

// export const requestVenues = (values, lat, lng, history) => async dispatch => {
// 	console.log('requesting....');
// 	dispatch(venuesIsLoading(true));

// 	try {
// 		const res = await axios.post('/api/search', { values, lat, lng });

// 		dispatch(venuesFetchDataSuccess(res));
// 		history.push('/results');
// 	} catch (err) {
// 		dispatch(venuesIsLoading(false));
// 		dispatch(venuesHasErrored(true));
// 	}
// };

export function requestVenues(values, lat, lng, history) {
	return dispatch => {
		dispatch(venuesIsLoading(true));

		new Promise((resolve, reject) => {
			axios
				.post('/api/search', { values, lat, lng })
				.catch(error => {
					reject(error);
					console.log('error');

					dispatch(venuesIsLoading(false));

					return error;
				})
				.then(response => {
					dispatch(venuesFetchDataSuccess(response));
					history.push('/results');
				})
				.catch(() => dispatch(venuesHasErrored(true)));
		});
	};
}

export function venuesHasErrored(bool) {
	return {
		type: VENUES_HAS_ERRORED,
		hasErrored: bool
	};
}

export function venuesIsLoading(bool) {
	return {
		type: VENUES_IS_LOADING,
		isLoading: bool
	};
}

export function venuesFetchDataSuccess(venues) {
	console.log('suc', venues);
	return {
		type: VENUES_FETCH_DATA_SUCCESS,
		venues: venues.data.response
	};
}

export function errorAfterFiveSeconds() {
	// We return a function instead of an action object
	return dispatch => {
		setTimeout(() => {
			// This function is able to dispatch other action creators
			dispatch(venuesHasErrored(true));
		}, 5000);
	};
}

export const updateEntry = (
	id,
	userRecommendation,
	history
) => async dispatch => {
	const res = await axios.post('/api/entries/update', {
		id,
		userRecommendation
	});
	history.push('/dashboard');
	dispatch({ type: UPDATE_ENTRY, payload: res.data });
};

export const deleteEntry = (id, history) => async dispatch => {
	const res = await axios.post('/api/entries/delete', { id });
	history.push('/dashboard');
	dispatch({ type: DELETE_ENTRY, payload: res.data });
};

export const loadVenueReview = (venue, history) => dispatch => {
	history.push('/results/review');
	dispatch({ type: REVIEW_VENUE, payload: venue });
};

export const submitVenue = (userInput, history, venue) => async dispatch => {
	const res = await axios.post('/api/entries', { venue, userInput });
	history.push('/dashboard');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitShare = (values, entries, history) => async dispatch => {
	const res = await axios.post('/api/share', { values, entries });

	history.push('/dashboard');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateSearchTerm = term => dispatch => {
	dispatch({ type: UPDATE_TERM, payload: term });
};

export const checkEntry = (entry, index) => dispatch => {
	entry.checked = true;
	dispatch({ type: CHECK_ENTRY, payload: { entry, index } });
};

// export const submitEntry = (values, history) => async dispatch => {
// 	const res = await axios.post('/api/entries', values);
// 	history.push('/dashboard');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };
