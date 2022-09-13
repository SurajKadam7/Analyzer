const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const env = require('dotenv');

env.config();

const SECRCREATE_KEY = process.env.SECRCREATE_KEY;

exports.userRegister = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const isEmailUsed = await User.findOne({ email });

		if (isEmailUsed) {
			res.send('this email is already used');
			return;
		}

		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			name,
			email,
			password: hashPassword,
		});

		newUser.save();
		res.send({ name, email, hashPassword });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
