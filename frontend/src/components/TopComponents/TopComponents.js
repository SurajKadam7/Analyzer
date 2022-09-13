import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import './topComponents.css';

const TopComponents = () => {
	return (
		<div className='top-components-container'>
			<Navbar />
			<Header />
		</div>
	);
};

export default TopComponents;
