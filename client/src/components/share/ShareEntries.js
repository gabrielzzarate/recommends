import _ from 'lodash';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import ShareField from './ShareField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class ShareEntries extends Component {
	handleShare(values) {
		console.log('result', values);
	}
	renderShareList() {
		switch (this.props.entries) {
			case null:
				return;
			default:
				return this.props.entries.map(entry => {
					console.log('entry', entry);
					return (
						<div className="field-wrapper checkbox" key={entry._id}>
							<Field
								key={entry._id}
								component="input"
								type="checkbox"
								name={entry.venueId}
								id={entry.venueId}
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
		return _.map(formFields, ({ label, name }) => {
			return (
				<div className="field-wrapper" key={name}>
					<Field
						key={name}
						component={ShareField}
						type="text"
						label={label}
						name={name}
					/>
					<label htmlFor={name}>{label}</label>
				</div>
			);
		});
	}
	render() {
		console.log('share props', this.props);
		return (
			<div className="standard-padding share-entries">
				<div className="container">
					<div className="content-space">
						<h2>Share Entries</h2>
						<form
							onSubmit={this.props.handleSubmit(this.handleShare.bind(this))}
							className="form-wrapper"
						>
							<div className="form-section">{this.renderShareList()}</div>
							<hr className="form-divider" />
							<div className="form-section">{this.renderShareFields()}</div>
							<div className="button-wrapper">
								<button type="submit">Share Entries</button>
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
	reduxForm({ validate, form: 'shareForm' })(withRouter(ShareEntries))
);
