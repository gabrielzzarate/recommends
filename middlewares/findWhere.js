var where = require('node-where');

app.use(function(req, res, next) {
	where.is(req.ip, function(err, result) {
		req.geoip = result;
		next();
	});
});
