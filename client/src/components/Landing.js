import React, { Component } from 'react';

export default class Landing extends Component {
	render() {
		return (
			<div className="standard-padding landing">
				<div className="flex-row vertically-centered">
					<div className="landing-intro-box content-space">
						<div className="logo landing-logo">
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
						</div>
						<h1>Recommends</h1>
						<p>Save and share your recommendations</p>
						<a href="/auth/google">Login with Google</a>
					</div>
				</div>

				<div className="credits">
					Built with create-react-app by{' '}
					<a href="http://zarate.me/">Gabriel Zarate</a>. Design inspired by{' '}
					<a href="http://v6.robweychert.com/">Rob Weychert.</a>
				</div>
			</div>
		);
	}
}
