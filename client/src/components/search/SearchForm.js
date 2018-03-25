import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchForm extends Component {
	handleSearch(values) {
		const { lat, lng } = this.props.userLocation;
		console.log('handleSearch', this.props.userLocation);

		this.props.searchEntries(values, lat, lng, this.props.history);

		this.props.updateSearchTerm(values.term);
	}
	render() {
		console.log('searchFormProps', this.props);
		return (
			<div className="container slim-container">
				<form onSubmit={this.props.handleSubmit(this.handleSearch.bind(this))}>
					<div className="field-wrapper full-width-field inline-form">
						<Field
							key="term"
							component="input"
							type="text"
							label="Search for your Reccomendations"
							name="term"
							value={this.props.term ? this.props.term : null}
							className="inline-field"
						/>
						<button className="button" type="submit">
							<i className="material-icons">search</i>
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps({ userLocation }) {
	return {
		userLocation
	};
}

export default connect(mapStateToProps)(
	reduxForm({ form: 'searchForm' })(withRouter(SearchForm))
);
