import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return (
					<div className="nav-inner">
						<div className="user-greeting">
							<img src={this.props.auth.image} alt={this.props.auth.name} />
							<div className="user-text">
								<h4>Dashboard</h4>
								<h3>{this.props.auth.name}</h3>
							</div>
						</div>
						<a href="/api/logout">Logout</a>
					</div>
				);
		}
	}

	render() {
		console.log('header props', this.props);
		return (
			<nav>
				<div className="nav-wrapper">{this.renderContent()}</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
