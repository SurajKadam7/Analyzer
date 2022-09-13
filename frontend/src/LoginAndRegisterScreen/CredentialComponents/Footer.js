import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
	return (
		<footer class='footer-container'>
			<div>
				<Link to='/register' class='hrf-line bold anchor'>
					register here
				</Link>
				<div class='line-below'></div>
			</div>
			<div>
				<Link to='/confirmuser' class='hrf-line bold anchor'>
					forgot password
				</Link>
				<div class='line-below'></div>
			</div>
		</footer>
	);
};

export default Footer;
