import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EntryForm from './EntryForm';
import EntryFormReview from './EntryFormReview';

class EntryNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<EntryFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<EntryForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return (
			<div>
				<h1>Add an Entry</h1>
				{this.renderContent()}
			</div>
		);
	}
}

export default reduxForm({
	form: 'entryForm'
})(EntryNew);
