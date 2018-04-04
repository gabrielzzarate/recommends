// ShareField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} type="text" style={{ marginBottom: '5px' }} />
			<div className="red-text" stye={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
