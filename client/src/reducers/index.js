import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import entriesReducer from './entriesReducer';
import venuesReducer from './venuesReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	entries: entriesReducer,
	venues: venuesReducer
});
