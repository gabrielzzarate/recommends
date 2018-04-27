import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { unFixBody } from '../../utils/fixBody';

const VenueReview = props => {
	return (
		<div className="venue-review">
			<div className="venue-info-review">
				<h2>{props.venueReview.name}</h2>
				<span>
					{props.venueReview.location.address},{' '}
					{props.venueReview.location.city}
				</span>
			</div>
			<form onSubmit={props.handleSubmit(props.onVenueSubmit)}>
				<div className="field-wrapper full-width-field">
					<Field
						name="userRecommendation"
						component="textarea"
						type="text"
						placeholder="write down your recommendation"
						id="userRecommendation"
					/>
					<label htmlFor="userRecommendation">
						Why You Recommend {props.venueReview.name}
					</label>
				</div>

				<div className="field-wrapper button-wrapper">
					<Link className="button" onClick={() => unFixBody()} to="/results">
						Back
					</Link>
					<button type="submit" className="pull-right">
						Save Recommendation
					</button>
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
