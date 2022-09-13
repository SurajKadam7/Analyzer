const Problems = require('../models/Problems');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const env = require('dotenv');
env.config();

const SECRCREATE_KEY = process.env.SECRCREATE_KEY;

exports.addProblems = async (req, res) => {
	const {
		problemName,
		difficultyLevel,
		platform,
		revisionStatus,
		problemLink,
	} = req.body;

	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		let userId;
		if (token !== null) {
			jwt.verify(token, SECRCREATE_KEY, async (error, body) => {
				if (error) return res.sendStatus(404);
				userId = body._id;
			});
		}

		const isValidUser = await User.findById(userId);

		if (!isValidUser) {
			return res.status(404).json({ message: 'not valid user' });
		}

		const isExist = await Problems.findOne({ userId, problemName });

		if (isExist) {
			await Problems.replaceOne(
				{ problemName },
				{
					userId,
					problemName,
					difficultyLevel,
					platform,
					revisionStatus,
					problemLink,
				}
			);
			return res.send('success replace');
		}

		const newProblme = new Problems({
			userId,
			problemName,
			difficultyLevel,
			platform,
			revisionStatus,
			problemLink,
		});

		await newProblme.save();

		return res.send('success');
	} catch (error) {
		return res.send(error);
	}
};
