import axios from 'axios';
import {
	FETCH_USER,
	FETCH_ENTRIES,
	SEARCH_VENUES,
	UPDATE_TERM,
	REVIEW_VENUE,
	FIND_USER
} from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const findUserLocation = () => dispatch => {
	navigator.geolocation.getCurrentPosition(function(position) {
		dispatch({
			type: FIND_USER,
			payload: { lat: position.coords.latitude, lng: position.coords.longitude }
		});
	});
};

export const fetchEntries = () => async dispatch => {
	const res = await axios.get('/api/entries');
	dispatch({ type: FETCH_ENTRIES, payload: res.data });
};

export const searchEntries = (values, lat, lng, history) => async dispatch => {
	const res = await axios.post('/api/search', { values, lat, lng });
	history.push('/results');
	dispatch({ type: SEARCH_VENUES, payload: res.data });
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

export const updateSearchTerm = term => dispatch => {
	dispatch({ type: UPDATE_TERM, payload: term });
};

// export const submitEntry = (values, history) => async dispatch => {
// 	const res = await axios.post('/api/entries', values);
// 	history.push('/dashboard');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };
