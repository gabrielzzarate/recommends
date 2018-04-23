const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Entry = mongoose.model('entries');
const Share = mongoose.model('shares');
const Mailer = require('../services/Mailer');
const User = mongoose.model('users');
const keys = require('../config/keys');
const shareTemplate = require('../services/emailTemplates/shareTemplate');

module.exports = app => {
	app.post('/api/share', requireLogin, async (req, res) => {
		const { values, entries } = req.body;
		const { title, subject, body, recipients } = values;

		const share = new Share({
			title,
			subject,
			body,
			username: req.user.name,
			recipients: recipients.split(',').map(email => ({ email: email.trim() })),
			entries: entries,
			_user: req.user.id,
			dateSent: Date.now()
		});

		// Send an email
		const mailer = new Mailer(share, shareTemplate(share));

		const userShareNumber = await User.findByIdAndUpdate(req.user._id, {
			shareNumber: req.user.shareNumber + 1
		});

		try {
			await mailer.send();
			await share.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.post('/api/share/webhooks', (req, res) => {
		const p = new Path('/api/share/:shareId/:choice'); // extracts items from url path

		_.chain(req.body)
			.map(({ email, url }) => {
				const match = p.test(new URL(url).pathname);
				if (match) {
					return { email, shareId: match.surveyId, choice: match.choice };
				}
			})
			.compact() // removes items that are undefined
			.uniqBy('email', 'shareId') // no records with duplicate email or surveyId on the same survey
			.each(({ surveyId, email, choice }) => {
				Survey.updateOne(
					{
						_id: shareId,
						recipients: {
							$elemMatch: { email: email, responded: false }
						}
					},
					{
						$inc: { [choice]: 1 },
						$set: { 'recipients.$.responded': true },
						lastResponded: new Date()
					}
				).exec();
			})
			.value();
		res.send({});
	});
};
