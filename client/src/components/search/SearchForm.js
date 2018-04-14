import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchForm extends Component {
	handleSearch(values) {
		const { lat, lng } = this.props.userLocation;
		this.props.requestVenues(values, lat, lng, this.props.history);

		this.props.updateSearchTerm(values.term);
	}
	render() {
		return (
			<div className="container slim-container">
				<form onSubmit={this.props.handleSubmit(this.handleSearch.bind(this))}>
					<div className="field-wrapper full-width-field inset-submit">
						<Field
							key="term"
							component="input"
							type="text"
							label="Search for your Reccomendations"
							placeholder="Search Venues"
							name="term"
							value={this.props.term ? this.props.term : null}
							className="inline-field"
						/>
						<button className="button" type="submit">
							Search
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
