const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
	// GoogleStrategy has an internal identifier as 'google'
	// second argument (options object) : what access do we want to have : profile info and email address
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// user gets logged out and an undefined user is returned
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	// use passport to exchange the user code for the user profile info
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/dashboard');
		}
	);

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.post('/api/current_user', async (req, res) => {
		console.log('req.user', req.body);
		const { bool, userId } = req.body;

		const updateUser = await User.findByIdAndUpdate(userId, {
			shownTutorial: bool
		});

		try {
			await updateUser.save();
			const user = await req.user.save();

			console.log('use', user);

			res.send(user);
		} catch (err) {
			res.status(404).send(err);
		}
	});
};
