// prod.js -- production keys here
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN,
	fourSquareClientID: process.env.FOURSQUARE_CLIENT_ID,
	fourSquareClientSecret: process.env.FOURSQUARE_CLIENT_SECRET
};

