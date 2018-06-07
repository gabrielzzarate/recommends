const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
	// second argument: what access do we want to have : profile info and email address
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
		const { bool, userId } = req.body;

		const updateUser = await User.findByIdAndUpdate(userId, {
			shownTutorial: bool
		});

		try {
			await updateUser.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(404).send(err);
		}
	});
};
