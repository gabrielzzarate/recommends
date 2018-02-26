// EntryFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const EntryFormReview = ({ onCancel, formValues, submitEntry, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h1>Please confirm your entries</h1>
			{reviewFields}
			<button
				className="yellow darken-3 white-text btn-flat"
				onClick={onCancel}
			>
				Back
			</button>
			<button
				className="green btn-flat white-text right"
				onClick={() => submitEntry(formValues, history)}
			>
				Add Reccomendation
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.entryForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EntryFormReview));
