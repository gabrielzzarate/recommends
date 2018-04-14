import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import {
	requestVenues,
	updateSearchTerm,
	loadVenueReview
} from '../../actions';

class SearchList extends Component {
	constructor(props) {
		super(props);
		this.renderResults = this.renderResults.bind(this);
	}
	handleSearch() {
		if (this.props.venues.totalResults === 0) {
			return (
				<div class="application-error content-space">
					{this.props.venues.warning.text}
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
							) : null}
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
					{this.props.venues.groups[0].items
						? this.handleSearch(this.renderResults)
						: null}
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
	loadVenueReview
})(withRouter(SearchList));
