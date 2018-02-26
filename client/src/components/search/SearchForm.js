import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

// const options = {
// 	enableHighAccuracy: true,
// 	timeout: 8000,
// 	maximumAge: 0
// };

// function success(pos) {
// 	return { lat: pos.coords.latitude, lon: pos.coords.longitude };
// }

// function error(err) {
// 	console.warn(`ERROR(${err.code}): ${err.message}`);
// }

class SearchForm extends Component {
	handleSearch(values) {
		var $this = this;
		navigator.geolocation.getCurrentPosition(function(position) {
			$this.props.searchEntries(
				values,
				position.coords.latitude,
				position.coords.longitude
			);
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.handleSearch.bind(this))}>
					<Field
						key="term"
						component="input"
						type="text"
						label="Search for your Reccomendations"
						name="term"
					/>
					<button type="submit">submit</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({ form: 'searchForm' })(SearchForm);
