const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// must require in the User Model before passport.js executes, order of require statements can result
// in errors in the application

// require server models
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// tell passport to make use of cookies to keep track of users within our application
// authentication middlewares, adjusting the request to passport. Cookie session extracts cookie data and passes it to passport in req.session
// Passport middleware pulls user id out of cookie data.
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
		keys: [keys.cookieKey] // incripts the cookie w/ a key
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
//require('./routes/billingRoutes')(app);
//require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// express will serve up production assets
	app.use(express.static('client/build'));
	// express will serve up the index.html file if it doesn't recognize the route so react-router can handle it
	const path = require('path');
	// is this working
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// PORT : heroku will be able to inject environment variables (variables that can be configured at deployment)
// boolean handles the development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
