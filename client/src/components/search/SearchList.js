import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import {
	requestVenues,
	updateSearchTerm,
	loadVenueReview,
	findUserLocation
} from '../../actions';

class SearchList extends Component {
	constructor(props) {
		super(props);
		this.renderResults = this.renderResults.bind(this);
	}
	handleSearch() {
		if (this.props.venues.totalResults === 0) {
			return (
				<div className="application-error content-space">
					{this.props.venues.warning.text}
				</div>
			);
		} else if (this.props.venues.statusCode === 400) {
			return (
				<div className="application-error content-space">
					<p>
						Grant Recommends location access to search restaurants near you.
					</p>
					<p className="italic">{this.props.venues.body.meta.errorDetail}.</p>
					{this.props.findUserLocation()}
				</div>
			);
		}

		return this.renderResults();
	}
	renderResults() {
		return (
			<div className="SearchList__wrapper">
				{this.props.venues.groups[0].items.map(data => {
					const { venue } = data;
					return (
						<div className="SearchList__item" key={data.referralId}>
							{venue.featuredPhotos ? (
								<img
									src={
										venue.featuredPhotos.items[0].prefix +
										500 +
										venue.featuredPhotos.items[0].suffix
									}
									alt={venue.name}
								/>
							) : (
								<svg
									id="Layer_1"
									data-name="Layer 1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 580.61 460.78"
								>
									<title>recommends-placeholder</title>
									<rect className="placeholder-bg" />
									<g
										id="Layer_2"
										data-name="Layer 2"
										className="placeholder-logo-wrapper"
									>
										<g id="Layer_1-2" data-name="Layer 1-2">
											<path
												className="cls-2 placeholder-logo"
												d="M312,219.82l42.8,42.8a29.72,29.72,0,0,1,0,42.06h0L312,347.49a29.72,29.72,0,0,1-42.06,0h0l-42.8-42.8a29.72,29.72,0,0,1,0-42.06h0l42.8-42.8a29.72,29.72,0,0,1,42.06,0Zm-42.06-42.56-9.65,9.65a29.72,29.72,0,0,0,0,42.06h0l9.65,9.65a29.72,29.72,0,0,0,42.06,0h0l9.65-9.65a29.72,29.72,0,0,0,0-42.06h0L312,177.26a29.72,29.72,0,0,0-42.06,0Zm0-66.56-42.8,42.8a29.72,29.72,0,0,0,0,42.06h0l42.8,42.8a29.72,29.72,0,0,0,42.06,0h0l42.8-42.8a29.72,29.72,0,0,0,0-42.06h0L312,110.71a29.72,29.72,0,0,0-42.06,0Z"
												transform="translate(0.32 1.51)"
											/>
										</g>
									</g>
								</svg>
							)}
							{''}
							<div className="search-list-item-content">
								<div className="search-card-content-inner">
									<span className="search-card-heading-primary">
										{venue.name}
									</span>

									<span className="search-card-heading-secondary">
										{venue.location.address}, {venue.location.city}
									</span>

									<a
										onClick={() =>
											this.props.loadVenueReview(venue, this.props.history)
										}
										className="action-link"
										aria-label="Add Recommendation"
										title="Add Recommendation"
									>
										<i className="material-icons">add</i>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	renderHeadline() {
		switch (this.props.venues) {
			case null:
				return (
					<div className="content-space">
						<h2>Get Search Results</h2>
						<p className="alt">Enter a search term to add Recommendations</p>
						<SearchForm />
					</div>
				);

			case true:
				return (
					<div className="content-space">
						<h2>Search results for: {this.props.term}</h2>
						<SearchForm
							requestVenues={this.props.requestVenues}
							updateSearchTerm={this.props.updateSearchTerm}
							term={this.props.term}
						/>
					</div>
				);

			default:
				return (
					<div className="content-space">
						<h2>Search results for: {this.props.term}</h2>
						<p className="alt">
							Browse search results and add your favorites to your Recommends
							database.
						</p>
						<SearchForm
							requestVenues={this.props.requestVenues}
							updateSearchTerm={this.props.updateSearchTerm}
							term={this.props.term}
						/>
					</div>
				);
		}
	}

	render() {
		return (
			<div className="SearchList standard-padding">
				<div className="container">
					{this.renderHeadline()}
					{this.handleSearch(this.renderResults)}
					{/*this.props.venues.groups[0].items
						? this.handleSearch(this.renderResults)
						: null */}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ venues, term }) {
	return { venues, term };
}

export default connect(mapStateToProps, {
	requestVenues,
	updateSearchTerm,
	loadVenueReview,
	findUserLocation
})(withRouter(SearchList));
