import React from 'react';
import Header from '../../LoginAndRegisterScreen/CredentialComponents/Header';
import Input from '../../LoginAndRegisterScreen/CredentialComponents/Input';
import Password from '../../LoginAndRegisterScreen/CredentialComponents/Password';
import ProductAd from '../../LoginAndRegisterScreen/CredentialComponents/ProductAd';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const registerUser = async (data) => {
		try {
			const value = await axios.post('/register', data);
			if (value) {
				navigate('/login');
			}
		} catch (error) {
			console.log('register error : ' + error);
		}
	};

	const handleRegisterSubmit = (event) => {
		event.preventDefault();
		const data = {
			name: event.target[0].value,
			email: event.target[1].value,
			password: event.target[2].value,
		};

		const confirmPassword = event.target[3].value;

		if (data.password !== confirmPassword) {
			return <h1>password not match</h1>;
		}

		registerUser(data);
	};

	return (
		<div class='main-container flex-c-h-w'>
			<div class='couple-container'>
				<ProductAd />

				<div class='login-screen-container flex-c-h-w'>
					<div class='sub-container'>
						<Header />
						<form class='credential-container' onSubmit={handleRegisterSubmit}>
							<Input placeholder={'Enter Name'} />
							<Input placeholder={'Enter Email'} />
							<Password placeholder={'Enter Password'} />
							<Password placeholder={'Confirm Password'} />
							<input type='submit' className='btn'></input>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
