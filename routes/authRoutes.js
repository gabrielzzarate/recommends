const passport = require('passport');

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
			res.redirect('/surveys');
		}
	);

	/* 	the app object represents the underlying running express server
	 	app.get creates a brand new route handler
	 	.get watches for incoming requests with a get method
	 	'/' the route portion of the handler, '/' means if anyone comes to our root route
	 	req = request, a javascript object that represents the incoming request
	 	res = response, an object that respresents the outgoing response
	 	res.send = immediately send json data

	 	app.get('/', (req, res) => {
			res.send({ hello: 'world' });
		});
	*/

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
