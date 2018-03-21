import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// child components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
//import EntryNew from './entries/EntryNew';
import SearchList from './search/SearchList';
import Modal from './Modal';
import Sidebar from './Sidebar';

class App extends Component {
	constructor(props) {
   	super(props);
   	this.props.findUserLocation();
  }

	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<BrowserRouter>
				<div id="app">
					<Header />
					<div className="flex-row">
						<Sidebar />
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route path="/results" component={SearchList} />
						<Route path="/results/review" component={Modal} />
						{/*<Route path="/dashboard" component={EntryNew} /> */}
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
