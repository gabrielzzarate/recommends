import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../../actions';

class EntryList extends Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	renderEntries() {
		return this.props.entries.reverse().map(entry => {
			return (
				<div className="card blue-grey darken-1" key={entry._id}>
					<div className="card-content white-text">
						<span className="card-title">{entry.name}</span>
					</div>
				</div>
			);
		});
	}

	render() {
		console.log(this.props);
		return <div>{this.renderEntries()}</div>;
	}
}

export default connect(null, { fetchEntries })(EntryList);
