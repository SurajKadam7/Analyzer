import React from 'react';
import Header from '../CredentialComponents/Header';
import Input from '../CredentialComponents/Input';
import Password from '../CredentialComponents/Password';
import Button from '../CredentialComponents/Button';
import ProductAd from '../CredentialComponents/ProductAd';
import './forgotPassword.css';

const ForgotPassword = () => {
	return (
		<div class='main-container flex-c-h-w'>
			<div class='couple-container'>
				<ProductAd />

				<div class='login-screen-container flex-c-h-w'>
					<div class='sub-container'>
						<Header />
						<div class='credential-container'>
							<Password placeholder={'Enter new password'} />
							<Password placeholder={'Confirm password'} />

							<div class='sign-in'>
								<Button BtnName={'Sign in'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
