const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');
const EntrySchema = require('./Entry');

// schema for Share Collection
const shareSchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	entries: [EntrySchema],
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model('shares', shareSchema);
