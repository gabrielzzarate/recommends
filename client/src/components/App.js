import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// child components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		console.log('props', this.props);
		return (
			<BrowserRouter>
				<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
