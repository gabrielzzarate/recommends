import React, { Component } from 'react';
import { Field } from 'redux-form';

class EntryEditForm extends Component {
	entrySave(values, history) {
		this.props.submitVenue(
			values,
			this.props.history,
			this.props.initialValues
		);
	}

	render() {
		const { initialValues } = this.props;

		if (this.props.initialValues === undefined) {
			return <div>Loading...</div>;
		}

		return (
			<form
				onSubmit={this.props.handleSubmit(values =>
					this.entrySave(values, this.props.history)
				)}
			>
				<div className="field-wrapper">
					<Field
						name="userRecommendation"
						component="textarea"
						type="text"
						placeholder="Reccommendation Description"
					/>
					<label>Update Description</label>
				</div>
				<div className="field-wrapper button-wrapper">
					<button type="submit">Save Changes</button>
				</div>
			</form>
		);
	}
}

export default EntryEditForm;
