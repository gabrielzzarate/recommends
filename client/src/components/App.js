import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';

// child components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import EntryNew from './entries/EntryNew';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/dashboard" component={Dashboard} />
					{/* <Route path="/dashboard/entry-new" component={EntryNew} /> */}
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
