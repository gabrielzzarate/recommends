import React, { Component } from 'react';

export default class Landing extends Component {
	render() {
		return (
			<div className="standard-padding landing">
				<div className="flex-row vertically-centered">
					<h1>Reccomends</h1>
					<p>Share you top 3 reccomendations</p>
					<a href="/auth/google">Login With Google</a>
				</div>
			</div>
		);
	}
}
