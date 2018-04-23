import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ShareListForm from './ShareListForm';
import ShareEntriesReview from './ShareEntriesReview';

class ShareEntries extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<ShareEntriesReview
					formValues={this.props.formValues}
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}

		return (
			<ShareListForm
				initialValues={this.props.initialValues}
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

function mapStateToProps({ shareEmail, form }) {
	return {
		initialValues: shareEmail,
		formValues: form.shareEntryForm
	};
}

export default connect(mapStateToProps, null)(
	reduxForm({
		form: 'shareEntryForm'
	})(ShareEntries)
);
