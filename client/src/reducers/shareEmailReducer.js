import { LOAD_EMAIL_SHARE } from '../actions/types';

const data = [
	{
		label: 'Comma-Separated Recipient Email Addresses',
		name: 'recipients',
		type: 'text',
		starting: 'Lorem ipsum',
		component: 'ShareListForm',
		placeholder: 'Comma-Separated Addresses'
	},
	{
		label: 'Subject Line',
		name: 'subject',
		type: 'text',
		component: 'ShareListForm',
		starting: 'Lorem ipsum',
		placeholder: 'Email Subject Line'
	},
	{
		label: 'Email Body',
		name: 'body',
		type: 'textarea',
		component: 'ShareListTextArea',
		starting: 'Lorem ipsum',
		placeholder: 'Email body'
	}
];

export default function(state = {}, action) {
	switch (action.type) {
		case LOAD_EMAIL_SHARE:
			return {
				data: action.data
			};
		default:
			return data;
	}
}
