const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema for User Collection
const userSchema = new Schema({
	googleId: String,
	name: String,
	shownTutorial: { type: Boolean, default: false },
	image: String
});

mongoose.model('users', userSchema);
