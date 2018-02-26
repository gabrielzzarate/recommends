import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EntryList from './entries/EntryList';
import SearchForm from './search/SearchForm';
import SearchList from './search/SearchList';
import './Dashboard.css';
import { searchEntries } from '../actions';

class Dashboard extends Component {
	renderEntries() {
		switch (this.props.entries) {
			case null:
				return;
			default:
				return <EntryList entries={this.props.entries} />;
		}
	}
	render() {
		console.log('dash props', this.props);
		return (
			<div className="container">
				<Link to="/dashboard/entry-new">Add Reccomendation</Link>
				{this.renderEntries()}

				<SearchForm searchEntries={this.props.searchEntries} />
				<EntryList entries={this.props.entries} />
				<SearchList venues={this.props.venues} />
			</div>
		);
	}
}

function mapStateToProps({ auth, entries, venues }) {
	return { auth, entries, venues };
}

export default connect(mapStateToProps, { searchEntries })(Dashboard);
