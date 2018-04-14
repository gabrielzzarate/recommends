export default [
	{
		label: 'Recipient Email Addresses',
		name: 'recipients',
		type: 'text',
		initialValue: 'Lorem ipsum',
		component: 'ShareListForm',
		placeholder: 'Comma-Separated Addresses'
	},
	{
		label: 'Subject Line',
		name: 'subject',
		type: 'text',
		component: 'ShareListForm',
		initialValue: 'Lorem ipsum',
		placeholder: 'Email Subject Line'
	},
	{
		label: 'Email Body',
		name: 'body',
		type: 'textarea',
		component: 'ShareListTextArea',
		initialValue: 'Lorem ipsum',
		placeholder: 'Email body'
	}
];
