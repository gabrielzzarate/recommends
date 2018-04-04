import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import {
	searchEntries,
	updateSearchTerm,
	loadVenueReview
} from '../../actions';

class SearchList extends Component {
	renderResults() {
		return (
			<div className="SearchList__wrapper">
				{this.props.venues.map(data => {
					const { venue } = data;
					return (
						<div className="SearchList__item" key={data.referralId}>
							{venue.featuredPhotos.items ? (
								<img
									src={
										venue.featuredPhotos.items[0].prefix +
										500 +
										venue.featuredPhotos.items[0].suffix
									}
									alt={venue.name}
								/>
							) : null}{' '}
							<div className="search-list-item-content">
								<div className="search-card-content-inner">
									<span className="search-card-heading-primary">
										{venue.name}
									</span>

									{venue.categories ? (
										<span className="search-card-heading-secondary">
											{/* {venue.categories[0].shortName ||
												venue.categories[0].category}
											*/}
										</span>
									) : null}

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
							{/*
							<h4 className="SearchList__item-name">{venue.name}</h4>
							<span className="SearchList__item-address">
								{venue.location.address}
							</span>

							{venue.url ? <a href={venue.url}>Learn More</a> : null}
									
							<button
								onClick={() =>
									this.props.loadVenueReview(venue, this.props.history)
								}
							>
								Add
							</button>
										
							{venue.featuredPhotos.items ? (
								<img
									src={
										venue.featuredPhotos.items[0].prefix +
											500 +
										venue.featuredPhotos.items[0].suffix
									}
									alt={venue.name}
								/>
							) : null}{' '}
										{venue.categories ? (
											<div className="SearchList__item-category">
												<span>
													{venue.categories[0].shortName ||
														venue.categories[0].category}
												</span>
											</div>
										) : null}

							*/}
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
						<h3>Enter a search term to add Recommendations</h3>
						<SearchForm />
					</div>
				);

			case true:
				return (
					<div className="content-space">
						<h3>Search results for: {this.props.term}</h3>
						<SearchForm
							searchEntries={this.props.searchEntries}
							updateSearchTerm={this.props.updateSearchTerm}
							term={this.props.term}
						/>
					</div>
				);

			default:
				return (
					<div className="content-space">
						<h3>Enter a search term to add Recommendations</h3>
						<SearchForm
							searchEntries={this.props.searchEntries}
							updateSearchTerm={this.props.updateSearchTerm}
							term={this.props.term}
						/>
					</div>
				);
		}
	}

	render() {
		return (
			<div className="SearchList flex-col flex-dashboard standard-padding">
				<div className="container">
					{this.renderHeadline()}
					{this.renderResults()}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ venues, term }) {
	return { venues, term };
}

export default connect(mapStateToProps, {
	searchEntries,
	updateSearchTerm,
	loadVenueReview
})(withRouter(SearchList));
