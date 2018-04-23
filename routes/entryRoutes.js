const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Entry = mongoose.model('entries');
const request = require('request');
var rp = require('request-promise');
const keys = require('../config/keys');

module.exports = app => {
	app.get('/api/entries', requireLogin, async (req, res) => {
		const entries = await Entry.find({ _user: req.user.id }).select({
			dateCreated: false
		});

		res.send(entries);
	});

	app.post('/api/entries/update', requireLogin, async (req, res) => {
		const { id, userRecommendation } = req.body;

		const updateEntry = await Entry.findByIdAndUpdate(id, {
			userRecommendation
		});

		try {
			await updateEntry.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	app.post('/api/entries/delete', requireLogin, async (req, res) => {
		const { id } = req.body;

		const deleteEntry = await Entry.findByIdAndRemove(id);

		try {
			await deleteEntry.save();
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(404).send(err);
		}
	});

	app.post('/api/entries', requireLogin, async (req, res) => {
		const {
			name,
			id,
			location,
			categories,
			featuredPhotos,
			url,
			price
		} = req.body.venue;
		const { userRecommendation } = req.body.userInput;

		const entry = new Entry({
			name,
			photo: featuredPhotos.items[0],
			venueId: id,
			address: location.address,
			city: location.city,
			state: location.state,
			country: location.country,
			lat: location.lat,
			lng: location.lng,
			price: price ? price.tier : 1,
			checked: false,
			category: categories[0].shortName,
			userRecommendation: userRecommendation,
			moreInfo: url,
			dateAdded: new Date(),
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
		const { lat, lng, values } = req.body;
		const { term } = values;

		const options = {
			url: 'https://api.foursquare.com/v2/venues/explore',
			method: 'GET',
			qs: {
				client_id: keys.fourSquareClientID,
				client_secret: keys.fourSquareClientSecret,
				ll: `${lat}, ${lng}`,
				query: term,
				v: '20180328', // 20140715
				limit: 10,
				venuePhotos: 1
			},
			json: true
		};

		rp(options)
			.then(function(venues) {
				res.send(venues);
			})
			.catch(function(err) {
				// API call failed...
				res.send(err);
			});

		// const foursquareRequest = await request(options, (err, response, body) => {
		// 	let json = JSON.parse(response);
		// 	// console.log('res', json);
		// 	res.send(json);
		// });
	});
};
