// Survey New shows
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ShareListForm from './ShareListForm';
import ShareEntriesReview from './ShareEntriesReview';

class ShareEntries extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<ShareEntriesReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<ShareListForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'shareForm'
})(ShareEntries);
