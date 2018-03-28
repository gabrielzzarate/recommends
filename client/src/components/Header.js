import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="header">
				<div className="header-inner flex-row">
					<div className="header-navleft">
						<NavLink to="/dashboard" exact className="logo">
							<svg viewBox="0 0 62.62 106.71">
								<title>Recommends Logo</title>
								<g id="Layer_2" data-name="Layer 2">
									<g id="Layer_1-2" data-name="Layer 1">
										<path
											className="cls-1"
											d="M39.8,49.59,57.12,66.91a12,12,0,0,1,0,17L39.8,101.21a12,12,0,0,1-17,0L5.5,83.88a12,12,0,0,1,0-17L22.82,49.59A12,12,0,0,1,39.8,49.59Zm-17-17.19-3.88,3.88a12,12,0,0,0,0,17l3.88,3.88a12,12,0,0,0,17,0l3.88-3.88a12,12,0,0,0,0-17L39.8,32.39A12,12,0,0,0,22.82,32.39Zm0-26.89L5.5,22.82a12,12,0,0,0,0,17L22.82,57.12a12,12,0,0,0,17,0L57.12,39.8a12,12,0,0,0,0-17L39.8,5.5A12,12,0,0,0,22.82,5.5Z"
										/>
									</g>
								</g>
							</svg>
						</NavLink>
						{/* <div className="header-greeting">
							<h3>Recommends</h3>
							<p className="italic">Share your favorite restaurants</p>
						</div> */}
					</div>
					<div className="header-navright">
						<NavLink
							to="/dashboard"
							exact
							activeClassName="selected"
							className="navigation-item"
						>
							Home
						</NavLink>
						{/*<NavLink
							to="/results"
							exact
							activeClassName="selected"
							className="navigation-item"
						>
							Search
						</NavLink> */}
						<NavLink
							to="/share"
							exact
							activeClassName="selected"
							className="navigation-item"
						>
							Share
						</NavLink>
						{/*<NavLink
							to="/settings"
							exact
							activeClassName="selected"
							className="navigation-item"
						>
							Settings
						</NavLink> */}
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
