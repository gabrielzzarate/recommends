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
		this.props.findUserLocation();
	}
	render() {
		console.log('props', this.props);
		return (
			<BrowserRouter>
				<div id="app" className="wrapper">
					<Header auth={this.props.auth} />
					<main>
						<Route exact path="/" component={Landing} />
						<Route exact path="/api/logout" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/entry/:_id" component={EntryEditWrapper} />
						<Route exact path="/share" component={ShareEntries} />
						<Route path="/results" component={SearchList} />
						<Route path="/results/review" component={Modal} />
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
