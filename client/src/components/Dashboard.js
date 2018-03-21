import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EntryList from './entries/EntryList';
import SearchForm from './search/SearchForm';
//import SearchList from './search/SearchList';
//import Sidebar from './Sidebar';
import { searchEntries, updateSearchTerm } from '../actions';

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
		return (
			<div className="flex-col flex-dashboard">
				<section className="standard-padding">
					<div className="container">
						{/* <Link to="/dashboard/entry-new">Add Reccomendation</Link> */}

						<div className="content-space">
							<h3>Enter a search term to add Recommendations</h3>
							<SearchForm
								searchEntries={this.props.searchEntries}
								updateSearchTerm={this.props.updateSearchTerm}
							/>
						</div>

						{this.renderEntries()}
					</div>
				</section>
			</div>
		);
	}
}

function mapStateToProps({ auth, entries, venues }) {
	return { auth, entries, venues };
}

export default connect(mapStateToProps, { searchEntries, updateSearchTerm })(
	Dashboard
);
