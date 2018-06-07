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
					) : <svg
								id="Layer_1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 580.61 460.78"
								className="placeholder-svg"
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
					}
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
