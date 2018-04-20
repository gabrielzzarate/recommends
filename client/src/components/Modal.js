import _ from 'lodash';
import React, { Component } from 'react';
import VenueReview from './search/VenueReview';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitVenue } from '../actions';
import { fixBody, unFixBody } from '../utils/fixBody';

class Modal extends Component {
	componentDidMount() {
		fixBody();
	}
	venueSubmit(values, history) {
		unFixBody();
		this.props.submitVenue(values, this.props.history, this.props.venueReview);
	}
	handleDuplicateEntry(modal) {
		const duplicate = this.props.entries.filter(entry => {
			if (_.includes(entry.venueId, this.props.venueReview.id)) {
				return true;
			} else {
				return;
			}
		});

		if (duplicate.length >= 1) {
			return (
				<div className="modal-outer-centered">
					<div className="modal-inner-centered">
						<div className="container modal-container dialog-modal">
							<div className="modal-content">
								<p>
									This exact venue is already a part of your Recommends
									database.
								</p>
								<Link
									className="button"
									onClick={() => unFixBody()}
									to="/results"
								>
									Back
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return;
		}
	}
	renderModal() {
		return (
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
		);
	}
	render() {
		return (
			<div className="modal-wrapper">
				{this.handleDuplicateEntry()}
				{this.renderModal()}
			</div>
		);
	}
}

function mapStateToProps({ entries, venueReview }) {
	return {
		entries,
		venueReview
	};
}

export default connect(mapStateToProps, { submitVenue })(withRouter(Modal));
