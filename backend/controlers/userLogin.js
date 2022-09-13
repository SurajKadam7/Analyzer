const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('dotenv');

env.config();

const SECRCREATE_KEY = process.env.SECRCREATE_KEY;

exports.userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(email, password);

		const isEmailUsed = await User.findOne({ email });

		if (!isEmailUsed) return res.send('invalid credentials');

		const isPasswordMatch = await bcrypt.compare(
			password,
			isEmailUsed.password
		);

		if (isPasswordMatch) {
			const id = { _id: isEmailUsed._id };
			const accessToken = jwt.sign(id, SECRCREATE_KEY);
			res.json(accessToken);
		} else {
			res.send('invalid password');
		}
	} catch (error) {
		console.log(isPasswordMatch);
		res.status(500).json({ message: error.message });
	}
};
