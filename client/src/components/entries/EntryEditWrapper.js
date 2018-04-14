import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitVenue, updateEntry, deleteEntry } from '../../actions';
import EntryEdit from './EntryEdit';
import DeleteDialog from './DeleteDialog';

class EntryEditWrapper extends Component {
	state = { showDeleteDialog: false };

	renderContent() {
		if (this.state.showDeleteDialog) {
			return (
				<DeleteDialog
					history={this.props.history}
					deleteEntry={this.props.deleteEntry}
					initialValues={this.props.initialValues}
					onCancel={() => this.setState({ showDeleteDialog: false })}
				/>
			);
		}

		return (
			<EntryEdit
				initialValues={this.props.initialValues}
				handleSubmit={this.props.handleSubmit}
				updateEntry={this.props.updateEntry}
				history={this.props.history}
				deleteEntry={this.props.deleteEntry}
				onShowDialog={() => this.setState({ showDeleteDialog: true })}
			/>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

function mapStateToProps({ entries }, ownProps) {
	return {
		initialValues: entries.find(entry => {
			return entry._id == ownProps.match.params._id;
		})
	};
}

// export default connect(mapStateToProps)(
// 	reduxForm({ form: 'searchForm' })(withRouter(SearchForm))
// );

export default connect(mapStateToProps, {
	submitVenue,
	updateEntry,
	deleteEntry
})(
	reduxForm({
		form: 'entryEditForm'
	})(EntryEditWrapper)
);
