import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryList from './entries/EntryList';
import SearchForm from './search/SearchForm';
import { requestVenues, updateSearchTerm, findUserLocation } from '../actions';

var options = {
	enableHighAccuracy: false,
	maximumAge: Infinity,
	timeout: 60000
};

function success(pos) {
	var crd = pos.coords;

	console.log('Your current position is:');
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);
	console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
}

class Dashboard extends Component {
	constructor(props) {
		super(props);
		//this.findUser = this.findUser.bind(this);
	}
	componentWillMount() {
		//this.findUser();
		//navigator.geolocation.getCurrentPosition(success, error, options);
	}

	findUser() {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
			this.props.findUserLocation(
				position.coords.latitude,
				position.coords.longitude
			);
		});
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
		);
	}
}

function mapStateToProps({ auth, entries, venues }) {
	return { auth, entries, venues };
}

export default connect(mapStateToProps, {
	requestVenues,
	updateSearchTerm,
	findUserLocation
})(Dashboard);
