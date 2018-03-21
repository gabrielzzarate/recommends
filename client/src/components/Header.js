import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../styles/images/recommends-logo_grayscale.svg';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a className="button" href="/auth/google">
							Login With Google
						</a>
					</li>
				);
			default:
				return (
					<div className="Header__navright-inner flex-row vertically-centered">
						<a className="button" href="/api/logout">
							Logout
						</a>
						<div className="Header__username">
							<span>{this.props.auth.name}</span>
						</div>
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
			<nav className="Header">
				<div className="Header__navleft flex-row vertically-centered">
					<div className="Header__logo flex-row vertically-centered">
						<img src={logo} alt="Recommends Logo" />
					</div>
					<div className="header-greeting">
						<h3>Recommends</h3>
						<p className="italic">Share your favorite restaurants</p>
					</div>
				</div>
				<div className="Header__navright flex-row vertically-centered">
					{this.renderContent()}
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
