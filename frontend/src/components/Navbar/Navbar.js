import React, { useEffect, useState } from 'react';
import './navbar.css';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExtensionIcon from '@mui/icons-material/Extension';
import InfoIcon from '@mui/icons-material/Info';

import DensitySmallIcon from '@mui/icons-material/DensitySmall';

import { useSelector } from 'react-redux';

const Navbar = () => {
	const showFullScreen = useSelector((state) => state.table.showFullScreen);

	const [isCollapse, setIsCollapse] = useState(true);

	// isCollapse is initialize with true because useEffect will run automatically fist time so it will make it as false

	useEffect(() => {
		setIsCollapse((previous) => !previous);
	}, [showFullScreen]);

	const collapseNavBarHandler = () => {
		setIsCollapse((previous) => !previous);
	};

	return (
		<div className='navbar-container'>
			<div className='navbar-heading-container'>
				{!isCollapse && <h1>analyzer</h1>}

				<DensitySmallIcon
					id='nav-icon'
					className='abcd-nav'
					onClick={collapseNavBarHandler}
				/>
			</div>
			<div className='navbar-content-container'>
				<div>
					<div className='abcdef-container'>
						<HomeIcon />
						{!isCollapse && <span>Dashboard</span>}
					</div>
				</div>
				<div>
					<div className='abcdef-container'>
						<BarChartIcon />
						{!isCollapse && <span>Analysis</span>}
					</div>
				</div>
				<div>
					<div className='abcdef-container'>
						<ExtensionIcon />
						{!isCollapse && <span>Extension</span>}
					</div>
				</div>
				<div>
					<div className='abcdef-container'>
						<InfoIcon />
						{!isCollapse && <span>About</span>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
