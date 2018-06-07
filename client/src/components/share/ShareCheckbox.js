// ShareChecbox contains logic to render a single label and checkbox input
import React from 'react';

export default props => {
	return <input {...props} value={true} type="checkbox" />;
};
