import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { submitVenue } from '../../actions';
import EntryEditForm from './EntryEditForm';

let EntryEdit = props => {
	console.log('edit props', props);
	const { initialValues } = props;

	if (props.initialValues === undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div className="standard-padding">
			<div className="container">
				<Link to="/dashboard">Back to Dashboard</Link>
				<h1> Entry Edit </h1>
				<h2> {initialValues.name} </h2>
				<p>{initialValues.address}</p>
				<div>
					<EntryEditForm
						handleSubmit={props.handleSubmit}
						history={props.history}
						initialValues={initialValues}
						submitVenue={props.submitVenue}
					/>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps({ entries }, ownProps) {
	return {
		initialValues: entries.find(entry => {
			return entry._id === ownProps.match.params._id;
		})
	};
}

EntryEdit = reduxForm({
	form: 'entryEditForm'
})(EntryEdit);

EntryEdit = connect(mapStateToProps, { submitVenue })(EntryEdit);

export default EntryEdit;
