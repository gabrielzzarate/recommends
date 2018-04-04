import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class ShareListForm extends Component {
	render() {
		console.log('share props', this.props);
		renderFields {
			this.props.entries.map(entries => {
				return (
					<form>
						<div className="field-wrapper">
							<Field 
								key={entry._id}
								component="input"
								type="checkbox"
								label={entry.name}
								name={entry.name}
							/>
						</div>
					</form>

				);
			}
		}
		return (
			<form>
				{this.renderFields()}
			</form>
		);
	}
}

export default ShareListForm;