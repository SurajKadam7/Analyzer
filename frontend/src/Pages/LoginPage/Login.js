import React, { useEffect, useState } from 'react';
import Header from '../../LoginAndRegisterScreen/CredentialComponents/Header';
import Input from '../../LoginAndRegisterScreen/CredentialComponents/Input';
import Password from '../../LoginAndRegisterScreen/CredentialComponents/Password';
import Footer from '../../LoginAndRegisterScreen/CredentialComponents/Footer';
import ProductAd from '../../LoginAndRegisterScreen/CredentialComponents/ProductAd';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../Reducers/UserReducer';
import { useDispatch } from 'react-redux';

const Login = () => {
	const [token, setToken] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		const data = {
			email: event.target[0].value,
			password: event.target[1].value,
		};
		console.log(data);

		try {
			const responce = await axios.post('/login', data);
			setToken(() => responce.data);
		} catch (error) {
			console.log('loggin error : ' + error);
		}
	};

	useEffect(() => {
		if (token) {
			dispatch(userAction.loggedIn());
			dispatch(userAction.token(token));

			navigate('/');
		}
		localStorage.setItem('token', JSON.stringify(token));
	}, [token]);

	return (
		<div class='main-container flex-c-h-w'>
			<div class='couple-container'>
				<ProductAd />

				<div class='login-screen-container flex-c-h-w'>
					<div class='sub-container'>
						<Header />
						<form class='credential-container' onSubmit={handleLoginSubmit}>
							<Input placeholder='Enter Email' type={'text'} name='email' />
							<Password placeholder={'Enter password'} name='password' />

							<input type='submit' className='btn'></input>
						</form>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
