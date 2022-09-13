import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	const changeLogin = () => {
		setUserLoggedIn((previous) => !previous);
	};

	return (
		<div className='header-container'>
			<div>
				<span>Welcome to Analyzer</span>
			</div>
			<div onClick={changeLogin}>
				{userLoggedIn && (
					<div className='login-details-container'>
						<img
							src={require('../../sharukh-logo.jpg')}
							alt='table desing'
							className='box-size'
						/>
						<span>Shaharukh</span>
					</div>
				)}
				{!userLoggedIn && (
					<div className='box-size login-details-container'>
						<Link to='login' className='hrf-line'>
							Loing{' '}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
