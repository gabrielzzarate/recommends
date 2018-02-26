const keys = require('./keys');

const config = {
	secrets: {
		clientId: keys.fourSquareClientID,
		clientSecret: keys.fourSquareClientSecret,
		redirectUrl: keys.redirectDomain
	}
};

module.exports = config;
