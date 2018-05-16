import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryList from './entries/EntryList';
import SearchForm from './search/SearchForm';
import Tutorial from './Tutorial';
import ShareNumberDialog from './share/ShareNumberDialog';
import { unFixBody } from '../utils/fixBody';
import {
	requestVenues,
	updateSearchTerm,
	findUserLocation,
	dismissTutorial,
	dismissShareDialog
} from '../actions';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bool: true,
			shownTutorial: this.props.auth.shownTutorial,
			showShare: this.props.shareNumber.showShare
		};
		this.dismiss = this.dismiss.bind(this);
	}

	dismiss() {
		unFixBody();
		this.setState({ shownTutorial: true, bool: false });
		this.props.dismissTutorial(true, this.props.auth._id);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ shownTutorial: nextProps.auth.shownTutorial });
		this.setState({ showShare: nextProps.shareNumber.showShare });
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
				{this.state.shownTutorial === false && this.state.bool === true ? (
					<Tutorial
						dismissTutorial={this.props.dismissTutorial}
						showTutorial={this.state.showTutorial}
						dismiss={this.dismiss}
					/>
				) : (
					''
				)}
				{this.state.showShare === true ? (
					<ShareNumberDialog
						onShareShow={bool => {
							this.setState({ showShare: bool });
							this.props.dismissShareDialog();
						}}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}

function mapStateToProps({ auth, entries, venues, shareNumber }) {
	return { auth, entries, venues, shareNumber };
}

export default connect(mapStateToProps, {
	requestVenues,
	updateSearchTerm,
	findUserLocation,
	dismissTutorial,
	dismissShareDialog
})(Dashboard);
