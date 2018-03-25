import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
					<div className="Header__navright-inner">
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
				<div className="Header__navleft">
					<div className="Header__logo">
						<img src={logo} alt="Recommends Logo" />
					</div>
					<div className="header-greeting">
						<h3>Recommends</h3>
						<p className="italic">Share your favorite restaurants</p>
					</div>
					<NavLink
						to="/dashboard"
						exact
						activeClassName="selected"
						className="Sidebar__item sidebar-item"
					>
						Home
					</NavLink>
					<NavLink
						to="/results"
						exact
						activeClassName="selected"
						className="Sidebar__item sidebar-item"
					>
						Search
					</NavLink>
					<NavLink
						to="/share"
						exact
						activeClassName="selected"
						className="Sidebar__item sidebar-item"
					>
						Share
					</NavLink>
					<NavLink
						to="/settings"
						exact
						activeClassName="selected"
						className="Sidebar__item sidebar-item"
					>
						<i className="material-icons">settings</i>
					</NavLink>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
