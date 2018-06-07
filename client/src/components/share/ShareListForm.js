import _ from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import EmailFields from './EmailFields';

class ShareListForm extends Component {
	state = { checked: true };
	toggle(state) {
		let checked = !state.checked;
		this.setState({ checked });
	}
	renderShareList() {
		switch (this.props.entries) {
			case null:
				return;
			default:
				return this.props.entries.map((entry, index) => {
					return (
						<div className="field-wrapper checkbox" key={entry._id}>
							<Field
								key={entry._id}
								component="input"
								type="checkbox"
								name={entry._id}
								id={entry.venueId}
								entry={entry}
							/>
							<label
								htmlFor={entry.venueId}
								className="checkbox-label"
							>
								{entry.name}
							</label>
						</div>
					);
				});
		}
	}
	render() {
		return (
			<div className="standard-padding share-entries">
				<div className="container">
					<div className="content-space">
						<h2>Share Entries</h2>
						<form
							onSubmit={this.props.handleSubmit(
								this.props.onSurveySubmit
							)}
							className="form-wrapper"
						>
							<div className="form-section">
								{this.renderShareList()}
							</div>
							<hr className="form-divider" />
							<EmailFields
								initialValues={this.props.initialValues}
							/>
							<div className="button-wrapper">
								<button
									disabled={
										this.props.pristine ||
										this.props.submitting
									}
									className="pull-right"
									type="submit"
								>
									Next
								</button>
							</div>
						</form>
					</div>
				</div>
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

function mapStateToProps({ entries }) {
	return {
		entries
	};
}

export default connect(mapStateToProps)(
	reduxForm({ validate, destroyOnUnmount: false, form: 'shareEntryForm' })(
		withRouter(ShareListForm)
	)
);
