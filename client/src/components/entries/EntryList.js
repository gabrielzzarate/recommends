import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEntries, checkEntry } from '../../actions';
import { findDistance } from '../../utils/findDistance';

class EntryList extends Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	renderEntries() {
		return this.props.entries.reverse().map((entry, index) => {
			const str = '$';
			const convertEntryName = name => {
				let words = name.toLowerCase().split(' ');
				return words.join('+');
			};
			return (
				<div className="entry-card" key={entry._id}>
					{entry.photo ? (
						<img
							src={entry.photo.prefix + 440 + entry.photo.suffix}
							alt={entry.name}
						/>
					) : null}
					<div className="card-primary">
						<h2>{entry.name}</h2>
						<h3>
							{entry.category}{' '}
							<span className="vertical-pipe text-color">|</span>
							<span className="text-color pad-left-sm">{entry.city}</span>
						</h3>
					</div>
					<p className="card-secondary italic">{entry.userRecommendation}</p>
					<div className="card-actions bottom-xs">
						<div className="card-action-buttons">
							<span className="entry-price">{str.repeat(entry.price)} </span>
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${convertEntryName(
									entry.name
								)}`}
								title="see map"
								target="_blank"
								className="action-button"
							>
								{findDistance(
									entry.lat,
									entry.lng,
									this.props.userLocation.lat,
									this.props.userLocation.lng
								)}{' '}
								mi
							</a>
						</div>
						<div className="card-action-icons">
							<Link
								className="action-icons"
								title="share entry"
								to="/share/"
								onClick={() => this.props.checkEntry(entry, index)}
							>
								<i className="material-icons">share</i>
							</Link>
							<Link
								title="edit entry"
								className="action-icons"
								to={`/entry/${entry._id}`}
							>
								<i className="material-icons">edit</i>
							</Link>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="entry-card-wrapper">{this.renderEntries()}</div>;
	}
}

function mapStateToProps({ userLocation }) {
	return { userLocation };
}

export default connect(mapStateToProps, { fetchEntries, checkEntry })(
	EntryList
);
