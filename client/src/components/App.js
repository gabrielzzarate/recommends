import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// child components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import EntryEditWrapper from './entries/EntryEditWrapper';
import ShareEntries from './share/ShareEntries';
import SearchList from './search/SearchList';
import Modal from './Modal';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		console.log(
			'Built with create react app by Gabriel Zarate http://zarate.me/. Design inspired by Rob Weychert http://v6.robweychert.com/'
		);
	}
	render() {
		return (
			<BrowserRouter>
				<div id="app" className="wrapper">
					<Header auth={this.props.auth} logOut={this.props.logOut} />
					<main>
						<Route exact path="/" component={Landing} />
						<Route exact path="/api/logout" component={Landing} />
						<Route
							auth={this.props.auth}
							exact
							path="/dashboard"
							component={Dashboard}
						/>
						<Route
							auth={this.props.auth}
							exact
							path="/entry/:_id"
							component={EntryEditWrapper}
						/>
						<Route
							auth={this.props.auth}
							exact
							path="/share"
							component={ShareEntries}
						/>
						<Route
							auth={this.props.auth}
							exact
							path="/results"
							component={SearchList}
						/>
						<Route
							auth={this.props.auth}
							exact
							path="/results/review"
							component={Modal}
						/>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, actions)(App);
