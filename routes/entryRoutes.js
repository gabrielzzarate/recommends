const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Entry = mongoose.model('entries');
const request = require('request');
const keys = require('../config/keys');

module.exports = app => {
	app.get('/api/entries', requireLogin, async (req, res) => {
		const entries = await Entry.find({ _user: req.user.id }).select({
			dateCreated: false
		});

		res.send(entries);
	});

	app.post('/api/entries', requireLogin, async (req, res) => {
		const { name, id, location, categories } = req.body;

		const options = {
			url: `https://api.foursquare.com/v2/venues/${id}/photos`,
			method: 'GET',
			qs: {
				client_id: keys.fourSquareClientID,
				client_secret: keys.fourSquareClientSecret,
				v: '20170801',
				limit: 1
			}
		};

		// let photos;

		// const imageRequest = await request(options, (err, response, body) => {
		// 	let json = JSON.parse(body);
		// 	console.log(json.response.photos.items);
		// 	photos = json.response.photos.items;
		// });

		const entry = new Entry({
			name,
			//photos: photos,
			venueId: id,
			location: location.address,
			category: categories.name,
			_user: req.user.id
		});

		try {
			await entry.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});

	app.post('/api/search', requireLogin, async (req, res) => {
		const { lat, lon, values } = req.body;
		const { term } = values;

		//console.log(req.body);
		const options = {
			url: 'https://api.foursquare.com/v2/venues/search',
			method: 'GET',
			qs: {
				client_id: keys.fourSquareClientID,
				client_secret: keys.fourSquareClientSecret,
				ll: `${lat}, ${lon}`,
				query: term,
				v: '20170801',
				limit: 20
			}
		};

		const foursquareRequest = await request(options, (err, response, body) => {
			let json = JSON.parse(body);
			res.send(json);
		});
	});
};
