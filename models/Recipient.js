const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for share recipients
const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
