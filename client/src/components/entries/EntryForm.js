// EntryForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import EntryField from './EntryField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class EntryForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={EntryField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/dashboard" className="red btn-flat white-text">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name, label }) => {
		if (!values[name]) {
			errors[name] = `You must provide a ${label}`;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	destroyOnUnmount: false,
	form: 'entryForm'
})(EntryForm);
