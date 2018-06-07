const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for Entry Collection
const entrySchema = new Schema({
	name: String,
	venueId: String,
	address: String,
	city: String,
	state: String,
	country: String,
	userRecommendation: String,
	moreInfo: String,
	photo: Object,
	lat: Number,
	lng: Number,
	price: Number,
	category: String,
	checked: Boolean,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateAdded: Date
});

mongoose.model('entries', entrySchema);
