import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import userLocationReducer from './userLocationReducer';
import entriesReducer from './entriesReducer';
import venueReviewReducer from './venueReviewReducer';
import { venuesHasErrored, venuesIsLoading, venues } from './venuesReducer';
import searchReducer from './searchReducer';
import shareEmailReducer from './shareEmailReducer';
import shareNumberReducer from './shareNumberReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	entries: entriesReducer,
	venuesHasErrored: venuesHasErrored,
	venuesIsLoading: venuesIsLoading,
	venues: venues,
	venueReview: venueReviewReducer,
	term: searchReducer,
	userLocation: userLocationReducer,
	shareEmail: shareEmailReducer,
	shareNumber: shareNumberReducer
});
