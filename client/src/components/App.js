import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// child components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import EntryEdit from './entries/EntryEdit';
import ShareEntries from './share/ShareEntries';
import SearchList from './search/SearchList';
import Modal from './Modal';

class App extends Component {
	constructor(props) {
		super(props);
		//this.props.findUserLocation();
	}

	componentDidMount() {
		this.props.fetchUser();
		this.props.findUserLocation();
	}
	render() {
		return (
			<BrowserRouter>
				<div id="app" className="wrapper">
					<Header />
					<main>
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/entry/:_id" component={EntryEdit} />
						<Route exact path="/share" component={ShareEntries} />
						<Route path="/results" component={SearchList} />
						<Route path="/results/review" component={Modal} />
						{/*<Route path="/dashboard" component={EntryNew} /> */}
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
