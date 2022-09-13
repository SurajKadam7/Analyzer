import React, { useState } from 'react';
import Header from '../CredentialComponents/Header';
import Input from '../CredentialComponents/Input';
import Password from '../CredentialComponents/Password';
import Button from '../CredentialComponents/Button';
import ProductAd from '../CredentialComponents/ProductAd';
const ConfirmUser = () => {
	const [enterdUser, setEnterdUser] = useState(false);

	const userEnterHandler = () => {
		setEnterdUser((previous) => !previous);
	};

	console.log(enterdUser);

	return (
		<div class='main-container flex-c-h-w'>
			<div class='couple-container'>
				<ProductAd />

				<div class='login-screen-container flex-c-h-w'>
					<div class='sub-container'>
						<Header />
						<div class='credential-container'>
							<Input placeholder='Enter Email / Phone Number' type={'text'} />
							{enterdUser && <Input placeholder='Enter OTP' type={'text'} />}
							<div class='sign-in' onClick={userEnterHandler}>
								<input type={'submit'} className='btn'></input>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmUser;
