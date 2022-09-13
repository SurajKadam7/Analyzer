const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const env = require('dotenv');

env.config();

const SECRCREATE_KEY = process.env.SECRCREATE_KEY;

exports.userProfile = async (req, res) => {
	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		console.log('token ' + token);

		// always use awit before the functions which are featching data from somewhere else. else they will not work
		// in jwt I have created (error, body) as async to use await for User.findById()
		// here the the 3rd orgument in the jwt.verify is a function which can take two arguments first is error and
		// second is body fo the message name does not matter here but body is more undanstandable.

		if (token !== null) {
			jwt.verify(token, SECRCREATE_KEY, async (error, body) => {
				if (error) return res.sendStatus(404);
				// console.log('id' + body._id);

				const details = await User.findById(body._id);
				console.log(details);

				return res.json(details);
			});
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
