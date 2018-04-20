import React from 'react';
//import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => {
	return (
		<div className="standard-padding">
			<div className="container">
				<div className="content-space">
					<h2>
						404: No match for <code>{location.pathname}</code>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default NoMatch;
