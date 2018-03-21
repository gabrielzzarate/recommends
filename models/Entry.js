const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for User Collection
const entrySchema = new Schema({
	name: String,
	venueId: String,
	address: String,
	userRecommendation: String,
	photo: Object,
	lat: Number,
	lng: Number,
	price: Number,
	category: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateCreated: Date
});

mongoose.model('entries', entrySchema);
