import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		return (
			<div className="Sidebar flex-col flex-sidebar">
				<NavLink
					to="/dashboard"
					exact
					activeClassName="selected"
					className="Sidebar__item sidebar-item"
				>
					<i className="material-icons">home</i>
					<div className="Sidebar__arrow-left arrow-left" />
				</NavLink>
				<NavLink
					to="/results"
					exact
					activeClassName="selected"
					className="Sidebar__item sidebar-item"
				>
					<i className="material-icons">room</i>
					<div className="Sidebar__arrow-left arrow-left" />
				</NavLink>
				<NavLink
					to="/share"
					exact
					activeClassName="selected"
					className="Sidebar__item sidebar-item"
				>
					<i className="material-icons">share</i>
					<div className="Sidebar__arrow-left arrow-left" />
				</NavLink>
				<NavLink
					to="/settings"
					exact
					activeClassName="selected"
					className="Sidebar__item sidebar-item"
				>
					<i className="material-icons">settings</i>
					<div className="Sidebar__arrow-left arrow-left" />
				</NavLink>
			</div>
		);
	}
}

export default Sidebar;
