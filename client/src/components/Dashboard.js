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
	renderUser() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a className="button" href="/auth/google">
							Login With Google
						</a>
					</li>
				);
			default:
				return (
					<div>
						<span>Hello, {this.props.auth.name}</span>
						<img
							className="Header__useravatar"
							src={this.props.auth.image}
							alt={this.props.auth.name}
						/>
					</div>
				);
		}
	}
	render() {
		return (
			<section className="dashboard-section standard-padding">
				<div className="container">
					<div className="content-space">
						<p className="alt">Enter a search term to add Recommendations</p>
						<SearchForm
							searchEntries={this.props.searchEntries}
							updateSearchTerm={this.props.updateSearchTerm}
						/>
					</div>

					{this.renderEntries()}
				</div>

				<div className="dashboard-user-greeting">{this.renderUser()}</div>
			</section>
		);
	}
}

function mapStateToProps({ auth, entries, venues }) {
	return { auth, entries, venues };
}

export default connect(mapStateToProps, { searchEntries, updateSearchTerm })(
	Dashboard
);
