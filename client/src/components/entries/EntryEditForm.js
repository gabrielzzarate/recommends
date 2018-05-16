import React, { Component } from 'react';
import { Field } from 'redux-form';

class EntryEditForm extends Component {
	updateEntry(id, values, history) {
		this.props.updateEntry(id, values.userRecommendation, this.props.history);
	}

	render() {
		const { initialValues } = this.props;

		if (this.props.initialValues === undefined) {
			return <div>Loading...</div>;
		}

		return (
			<form
				onSubmit={this.props.handleSubmit(values =>
					this.updateEntry(initialValues._id, values, this.props.history)
				)}
			>
				<div className="field-wrapper full-width-field">
					<Field
						name="userRecommendation"
						component="textarea"
						type="text"
						placeholder="Reccommendation Description"
					/>
					<label>Update Reccommendation</label>
				</div>
				<div className="field-wrapper button-wrapper">
					<a onClick={this.props.onShowDialog}>Delete Entry</a>
					<button className="pull-right" type="submit">
						Save Changes
					</button>
				</div>
			</form>
		);
	}
}

export default EntryEditForm;
