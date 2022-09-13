import React from 'react';
import { Link } from 'react-router-dom';
// import './button.css';

const Button = ({ link, BtnName, type }) => {
	console.log(type);
	return (
		<>
			{link ? (
				<Link to={link} class='btn hrf-line bold' type={type}>
					{BtnName}
				</Link>
			) : (
				<input class='btn hrf-line bold btn-input' type={type}>
					{BtnName}
				</input>
			)}
		</>
	);
};

export default Button;
