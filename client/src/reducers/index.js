import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import userLocationReducer from './userLocationReducer';
import entriesReducer from './entriesReducer';
import venuesReducer from './venuesReducer';
import venueReviewReducer from './venueReviewReducer';
import searchReducer from './searchReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	entries: entriesReducer,
	venues: venuesReducer,
	venueReview: venueReviewReducer,
	term: searchReducer,
	userLocation: userLocationReducer
});
