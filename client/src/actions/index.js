import axios from 'axios';
import { FETCH_USER, FETCH_ENTRIES, SEARCH_VENUES } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEntries = () => async dispatch => {
	const res = await axios.get('/api/entries');
	dispatch({ type: FETCH_ENTRIES, payload: res.data });
};

export const searchEntries = (values, lat, lon) => async dispatch => {
	const res = await axios.post('/api/search', { values, lat, lon });
	dispatch({ type: SEARCH_VENUES, payload: res.data });
};

export const addVenue = venue => async dispatch => {
	const res = await axios.post('/api/entries', venue);
	dispatch({ type: FETCH_USER, payload: res.data });
};

// export const submitEntry = (values, history) => async dispatch => {
// 	const res = await axios.post('/api/entries', values);
// 	history.push('/dashboard');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };
