// ShareEntriesReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const ShareEntriesReview = ({
	onCancel,
	formValues,
	entries,
	submitShare,
	history
}) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div className="field-wrapper full-width-field" key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	const reviewEntries = _.map(entries, entry => {
		if (formValues[entry._id]) {
			return (
				<div className="entry-review" key={entry.name}>
					<h4>{entry.name}</h4>
				</div>
			);
		}
	});

	const sharedEntries = _.map(entries, entry => {
		if (formValues[entry._id]) {
			return entry;
		}
	});

	return (
		<div className="modal-wrapper">
			<div className="modal-outer-centered">
				<div className="modal-inner-centered">
					<div className="container modal-container">
						<h5>
							Review your recommendations before you send them to your friends!
						</h5>
						<div className="entries-review">{reviewEntries}</div>
						{reviewFields}
						<div className="button-wrapper action-row">
							<button onClick={onCancel}>Back</button>
							<button
								className="pull-right"
								onClick={() => submitShare(formValues, sharedEntries, history)}
							>
								Share Entries
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.shareForm.values, entries: state.entries };
}

export default connect(mapStateToProps, actions)(
	withRouter(ShareEntriesReview)
);
