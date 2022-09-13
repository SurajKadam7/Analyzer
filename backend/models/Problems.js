const mongoose = require('mongoose');
const User = require('./User');

const { Schema } = mongoose;

const problemsSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: User,
	},
	problemName: {
		type: String,
		required: [true, 'problem name is required'],
		trim: true,
		text: true,
	},

	difficultyLevel: {
		type: String,
		required: [true, 'difficulty is required'],
		trim: true,
		text: true,
	},

	platform: {
		type: String,
		required: [true, 'platform is required'],
		trim: true,
		text: true,
	},

	revisionStatus: {
		type: String,
		required: [true, 'revision status is required'],
		trim: true,
		text: true,
	},

	problemLink: {
		type: String,
		required: [true, 'problme link is required'],
		text: true,
	},
});

module.exports = mongoose.model('Problems', problemsSchema);
