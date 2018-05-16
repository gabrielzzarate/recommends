import { LOAD_EMAIL_SHARE } from '../actions/types';

const data = {
	labelAddress: 'Comma-Separated Recipient Email Addresses',
	recipients: '',
	type: 'text',
	placeholderAddress: 'Comma-Separated Addresses',
	labelSubject: 'Subject Line',
	subject: 'I want to share these with you.',
	placeholderSubject: 'Email Subject Line',
	labelBody: 'Email Body',
	body:
		'I think you would really enjoy checking out these places, they are some of my favorites.',
	placeholderBody: 'body'
};

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
