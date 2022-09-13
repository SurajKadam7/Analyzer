const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: [true, 'first name is required'],
		trim: true,
		text: true,
	},
	email: {
		type: String,
		required: [true, 'email is required'],
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'password is required'],
	},
});

module.exports = mongoose.model('User', userSchema);
