import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryList from './entries/EntryList';
import SearchForm from './search/SearchForm';
import Tutorial from './Tutorial';
import {
	requestVenues,
	updateSearchTerm,
	findUserLocation,
	dismissTutorial
} from '../actions';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bool: true,
			shownTutorial: this.props.auth.shownTutorial
		};
		this.dismiss = this.dismiss.bind(this);
	}

	dismiss() {
		this.setState({ shownTutorial: true, bool: false });
		this.props.dismissTutorial(true, this.props.auth._id);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ shownTutorial: nextProps.auth.shownTutorial });
	}

	componentDidMount() {
		this.props.findUserLocation();
	}

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
				return;
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
		console.log('state', this.state);
		return (
			<div>
				<section className="dashboard-section standard-padding">
					<div className="container">
						<div className="content-space">
							<h2>My Recommends</h2>
							<p className="alt">
								Enter a search term to find your favorite restaurants
							</p>
							<SearchForm
								requestVenues={this.props.requestVenues}
								updateSearchTerm={this.props.updateSearchTerm}
							/>
						</div>

						{this.renderEntries()}
						<div className="dashboard-user-greeting">{this.renderUser()}</div>
					</div>
				</section>
				{this.state.shownTutorial === false && this.state.bool == true ? (
					<Tutorial
						dismissTutorial={this.props.dismissTutorial}
						showTutorial={this.state.showTutorial}
						dismiss={this.dismiss}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}

function mapStateToProps({ auth, entries, venues }) {
	return { auth, entries, venues };
}

export default connect(mapStateToProps, {
	requestVenues,
	updateSearchTerm,
	findUserLocation,
	dismissTutorial
})(Dashboard);
