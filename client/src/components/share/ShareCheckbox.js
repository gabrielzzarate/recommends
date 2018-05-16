// ShareChecbox contains logic to render a single label and checkbox input
import React from 'react';

// export default ({ input, label, meta: { error, touched } }) => {
// 	return (
// 		<div className={'field-wrapper ' + (touched && error ? 'error' : '')}>
// 			<input {...input} type="checkbox" />
// 			<label>{label}</label>
// 			<span className="error-message">{touched && error}</span>
// 		</div>
// 	);
// };

export default props => {
	return <input {...props} value={true} type="checkbox" />;
};
