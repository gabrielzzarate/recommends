import React, { Component } from 'react';

class DeleteDialog extends Component {
	render() {
		return (
			<div className="modal-wrapper">
				<div className="modal-outer-centered">
					<div className="modal-inner-centered">
						<div className="container modal-container dialog-modal">
							<div className="modal-content">
								<div className="centered">
									<h2 className="pad-bottom-md">Are you sure?</h2>
								</div>
								<button onClick={this.props.onCancel}>Back</button>
								<a
									className="pull-right"
									onClick={() =>
										this.props.deleteEntry(
											this.props.initialValues._id,
											this.props.history
										)
									}
								>
									Delete Recommendation
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DeleteDialog;
