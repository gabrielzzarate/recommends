import React from 'react';
import { Field } from 'redux-form';
import ShareField from './ShareField';
import ShareTextArea from './ShareTextArea';

const EmailFields = initialValues => {
	if (initialValues === undefined) {
		return <div>Loading...</div>;
	}

	return (
		<div className="form-section">
			<Field
				name="recipients"
				component={ShareField}
				label="Comma-Separated Recipient Email Addresses"
				placeholder="Recipients"
			/>
			<Field
				name="subject"
				component={ShareField}
				label="Subject Line"
				placeholder="Email Subject Line"
			/>
			<Field
				name="body"
				label="Email Body"
				component={ShareTextArea}
				placeholder="Email Body"
			/>
		</div>
	);
};

export default EmailFields;
