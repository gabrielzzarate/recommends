import _ from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import ShareField from './ShareField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

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
					if (entry.checked) {
						return (
							<div className="field-wrapper checkbox" key={entry._id}>
								<Field
									key={entry._id}
									component="input"
									type="checkbox"
									name={entry._id}
									id={entry.venueId}
									entry={entry}
									checked={this.state.checked}
									onClick={() => this.toggle(this.state)}
								/>
								<label htmlFor={entry.venueId} className="checkbox-label">
									{entry.name}
								</label>
							</div>
						);
					}
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
							<label htmlFor={entry.venueId} className="checkbox-label">
								{entry.name}
							</label>
						</div>
					);
				});
		}
	}
	renderShareFields() {
		return _.map(formFields, ({ label, name, type }) => {
			return (
				<Field key={name} component={ShareField} label={label} name={name} />
			);
		});
	}
	render() {
		return (
			<div className="standard-padding share-entries">
				<div className="container">
					<div className="content-space">
						<h2>Share Entries</h2>
						<form
							onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
							className="form-wrapper"
						>
							<div className="form-section">{this.renderShareList()}</div>
							<hr className="form-divider" />
							<div className="form-section">{this.renderShareFields()}</div>
							<div className="button-wrapper">
								<button
									disabled={this.props.pristine || this.props.submitting}
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
	reduxForm({ validate, destroyOnUnmount: false, form: 'shareForm' })(
		withRouter(ShareListForm)
	)
);
