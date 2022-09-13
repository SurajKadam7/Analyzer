import React from 'react';
import './input.css';

const Input = ({ placeholder, type, name }) => {
	return (
		<div class='abc'>
			<input
				placeholder={placeholder}
				type={type}
				class='input-tag'
				name={name}
			/>
		</div>
	);
};

export default Input;
