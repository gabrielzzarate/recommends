import React, { Component } from 'react';
import VenueReview from './search/VenueReview';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitVenue } from '../actions';

class Modal extends Component {
	venueSubmit(values, history) {
		this.props.submitVenue(values, this.props.history, this.props.venueReview);
	}
	render() {
		return (
			<div className="modal-wrapper">
				<div className="modal-outer-centered">
					<div className="modal-inner-centered">
						<div className="container modal-container">
							<div data-modal-close="" className="close-trigger modal">
								<div className="close-trigger-inner">
									<span className="dark" />
									<span className="dark" />
								</div>
							</div>

							<div className="modal-header no-pad">
								<h3>Configure Recommendation</h3>
							</div>

							<div className="modal-content">
								<VenueReview
									onVenueSubmit={values =>
										this.venueSubmit(values, this.props.history)
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ venueReview }) {
	return {
		venueReview
	};
}

export default connect(mapStateToProps, { submitVenue })(withRouter(Modal));
