// ShareEntriesReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import formFields from './formFields';
import * as actions from '../../actions';
import { fixBody, unFixBody } from '../../utils/fixBody';

const ShareEntriesReview = ({
	onCancel,
	formValues,
	entries,
	submitShare,
	shareEmail,
	history
}) => {
	fixBody();

	const reviewEntries = _.map(entries, entry => {
		const id = entry._id;
		if (formValues.values[id]) {
			return (
				<div className="entry-review" key={entry.name}>
					<h4>{entry.name}</h4>
				</div>
			);
		}
	});

	const sharedEntries = _.map(entries, entry => {
		const id = entry._id;
		if (formValues.values[id]) {
			return entry;
		}
	});
	return (
		<div className="modal-wrapper">
			<div className="modal-outer-centered">
				<div className="modal-inner-centered">
					<div className="container modal-container share-review-modal">
						<h5>Review your share email before you send it to your friends!</h5>
						<div className="entries-review">{reviewEntries}</div>

						<div className="field-wrapper full-width-field">
							<label>Comma-Separated Recipient Email Addresses</label>
							<div className="share-review-item">
								{formValues.values.recipients}
							</div>
						</div>
						<div className="field-wrapper full-width-field">
							<label>Subject Line</label>
							<div className="share-review-item">
								{formValues.values.subject}
							</div>
						</div>
						<div className="field-wrapper full-width-field">
							<label>Email Body</label>
							<div className="share-review-item">{formValues.values.body}</div>
						</div>
						<div className="button-wrapper action-row">
							<button onClick={onCancel}>Back</button>
							<button
								className="pull-right"
								onClick={() => {
									submitShare(formValues.values, sharedEntries, history);
									unFixBody();
								}}
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
	return {
		entries: state.entries,
		shareEmail: state.shareEmail
	};
}

export default connect(mapStateToProps, actions)(
	withRouter(ShareEntriesReview)
);
