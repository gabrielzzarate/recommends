import React, { Component } from 'react';

class ShareNumberDialog extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.onShareShow(false);
		}, 2500);
	}
	render() {
		return (
			<div className="modal-wrapper notice-wrapper">
				<div className="modal-outer-centered notice-outer">
					<div className="modal-inner-centered notice-inner">
						<div className="container modal-container notice-modal">
							<div className="modal-content centered">
								<h3>Share Successful!</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShareNumberDialog;
