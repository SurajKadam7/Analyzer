const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

const DB = require('./db/database.js');
const { userRegister } = require('./controlers/userRegister.js');
const { userLogin } = require('./controlers/userLogin.js');
const { userProfile } = require('./controlers/userProfile');
const { addProblems } = require('./controlers/addProblems.js');
const { getProblems } = require('./controlers/getProblems.js');

app = express();
DB();

app.use(bodyParser.urlencoded({ extended: false })); //middleware next() will call automatically and write in global state.
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});

app.get('/home', userProfile);
app.get('/problems', getProblems);
// userProfile
console.log('yes');
app.post('/problems', addProblems);
app.post('/login', userLogin);
app.post('/register', userRegister);
