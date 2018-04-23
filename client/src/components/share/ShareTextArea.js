// ShareField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
	return (
		<div className={'field-wrapper ' + (touched && error ? 'error' : '')}>
			<textarea {...input} placeholder={placeholder} />
			<label>{label}</label>
			<span className="error-message">{touched && error}</span>
		</div>
	);
};
