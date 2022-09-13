const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const DATABASE_URL = process.env.DATABASE_URL;

const db = async () => {
	await mongoose
		.connect(DATABASE_URL, { useNewUrlParser: true })
		.then(() => console.log('connected to database'))
		.catch((error) => console.log('Error in DB : ' + error));
};

module.exports = db;
