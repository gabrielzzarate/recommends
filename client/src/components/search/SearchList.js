import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVenue } from '../../actions';
import './SearchList.css';

class SearchList extends Component {
	renderResults() {
		return this.props.venues.reverse().map(venue => {
			return (
				<div className="SearchList__item" key={venue.id}>
					<div className="SearchList__item-content">
						<h3 className="SearchList__item-name">{venue.name}</h3>
						{venue.categories ? (
							<span className="SearchList__item-category">
								{venue.categories[0].name}
							</span>
						) : null}
						<span className="SearchList__item-address">
							{venue.location.address}
						</span>

						<div className="SearchList__action-wrapper">
							<button onClick={() => this.props.addVenue(venue)}>Add</button>
							{venue.url ? <a href={venue.url}>Learn More</a> : null}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		console.log(this.props.venues);
		return <div className="SearchList">{this.renderResults()}</div>;
	}
}

export default connect(null, { addVenue })(SearchList);
