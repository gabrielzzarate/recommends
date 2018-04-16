import React, { Component } from 'react';
import { fixBody, unFixBody } from '../utils/fixBody';

class Tutorial extends Component {
	state = { show: this.props.showTutorial };

	componentDidMount() {
		fixBody();
	}
	componentDidUnMount() {
		unFixBody();
	}
	handleDismiss() {
		unFixBody();
		this.props.dismissTutorial(true, this.props.userId);
		this.setState({ show: false });
	}
	render() {
		return (
			<div className="modal-wrapper tutorial">
				<div className="modal-outer-centered">
					<div className="modal-inner-centered">
						<div className="container modal-container">
							<div data-modal-close="" className="close-trigger modal">
								<div className="close-trigger-inner">
									<span className="dark" />
									<span className="dark" />
								</div>
							</div>

							<div className="modal-header no-pad centered">
								<div className="logo logo-small">
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
								<h2>Welcome to Recommends</h2>
							</div>

							<div className="modal-content">
								<h3 className="bold">Your Personal Recommendation Database</h3>
								<p>
									Within Recommends, you have your personal database of
									restaurant recommendations, curated by you.
								</p>

								<p>
									Search for your newest recommendations, write out why you like
									them, and add them to your catalog of recommendations.
								</p>

								<h3 className="bold">Share Your Taste with Your Friends</h3>

								<p>
									Recommends allows you to share your favorite restaurants with
									your friends via email.
								</p>
								<p>
									Navigate to the share tab and start sharing your
									recommendations. Your friends will receive a nicely formatted
									email with imagery, restaurant information, and the reasons
									why you like those restaurants.
								</p>

								<button
									onClick={() => this.handleDismiss()}
									className="pull-right"
								>
									Dismiss
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tutorial;
