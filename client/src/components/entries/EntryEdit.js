import React from 'react';
import { Link } from 'react-router-dom';
import EntryEditForm from './EntryEditForm';

let EntryEdit = props => {
	const { initialValues } = props;
	const date = new Date(initialValues.dateAdded);

	if (props.initialValues === undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="standard-padding">
				<div className="container">
					<div className="content-space">
						<Link to="/dashboard" className="back-link">
							Back to Dashboard
						</Link>
						<h2>Entry Edit</h2>
						<hr />
						<div className="flex-row edit-entry-details">
							<div className="flex-col flex-half">
								<h2>{initialValues.name} </h2>
							</div>
							<div className="flex-col flex-half">
								<p>
									{initialValues.address}, {initialValues.city}
								</p>
								<p>
									Added to database:
									<span className="italic bold pad-left-sm">{`${date.getMonth() +
										1}.${date.getDate()}.${date.getFullYear()}`}</span>
								</p>
							</div>
						</div>
						<EntryEditForm
							handleSubmit={props.handleSubmit}
							history={props.history}
							initialValues={initialValues}
							submitVenue={props.submitVenue}
							updateEntry={props.updateEntry}
							deleteEntry={props.deleteEntry}
							onShowDialog={props.onShowDialog}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntryEdit;
