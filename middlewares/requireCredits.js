module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		return res.status(403).send({ error: 'Not enough credits!' });
		// don't call next because we are stopping the request
	}

	next();
};
