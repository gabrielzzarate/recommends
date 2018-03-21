import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const VenueReview = props => {
	console.log('venuereview', props);
	return (
		<div className="venue-review">
			<div className="venue-info-review">
				<h3>{props.venueReview.name}</h3>
				{/* <p>{props.venueReview.location.address}</p> */}
			</div>
			<form onSubmit={props.handleSubmit(props.onVenueSubmit)}>
				<div className="form-section">
					<div className="field-wrapper full-width-field">
						<Field
							name="userRecommendation"
							component="textarea"
							type="text"
							placeholder="I like this because..."
							id="userRecommendation"
						/>
						<label htmlFor="userRecommendation">Recommendation Description</label>
					</div>
					<div className="form-actions flex-row">
						<div className="field-wrapper button-wrapper flex-col action-back">
							<Link className="button" to="/results">Back</Link>
						</div>
						<div className="field-wrapper button-wrapper flex-col action-primary">
							<button type="submit" className="purple-btn full-width">
								Add Recommendation
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

function mapStateToProps({ venueReview }) {
	return {
		venueReview
	};
}

export default connect(mapStateToProps)(
	reduxForm({ form: 'venueReviewForm' })(VenueReview)
);
