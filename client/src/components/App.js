import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import NoMatch from './NoMatch';
import PrivateRoute from '../utils/PrivateRoute';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		console.log('app auth', this.props.auth);
		return (
			<BrowserRouter>
				<div id="app" className="wrapper">
					<Header auth={this.props.auth} logOut={this.props.logOut} />
					<main>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/api/logout" component={Landing} />
							<PrivateRoute
								auth={this.props.auth}
								exact
								path="/dashboard"
								component={Dashboard}
							/>
							<PrivateRoute
								auth={this.props.auth}
								exact
								path="/entry/:_id"
								component={EntryEditWrapper}
							/>
							<PrivateRoute
								auth={this.props.auth}
								exact
								path="/share"
								component={ShareEntries}
							/>
							<PrivateRoute
								auth={this.props.auth}
								exact
								path="/results"
								component={SearchList}
							/>
							<PrivateRoute
								auth={this.props.auth}
								exact
								path="/results/review"
								component={Modal}
							/>
							<PrivateRoute component={NoMatch} auth={this.props.auth} />
						</Switch>
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
