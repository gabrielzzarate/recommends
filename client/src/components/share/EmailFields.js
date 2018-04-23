import React, { Component } from 'react';
import { Field } from 'redux-form';
import ShareField from './ShareField';
import ShareTextArea from './ShareTextArea';
import formFields from './formFields';

const EmailFields = initialValues => {
	const { subject, body } = initialValues;

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
