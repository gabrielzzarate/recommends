module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must login' });
		// don't call next becuase we are stopping the request
	}

	next();
};
