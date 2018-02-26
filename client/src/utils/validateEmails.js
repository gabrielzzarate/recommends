const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
	const invalidEmails = emails
		.split(',')
		.map(emails => emails.trim())
		.filter(email => re.test(email) === false); // capture the emails that fail the reqular expression

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}
};
