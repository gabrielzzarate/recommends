import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		console.log('dash props', this.props);
		return (
			<div>
				<div className="dashboard">
					{/* <h1>Hello, {this.props.auth.name}</h1>
					<img src={this.props.auth.image} /> */}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Dashboard);
