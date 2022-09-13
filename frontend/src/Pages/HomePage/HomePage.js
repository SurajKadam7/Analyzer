import React, { useState, useRef, useEffect } from 'react';
import './homePage.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { tableAction } from '../../Reducers/TableReducer';

const HomePage = () => {
	const dispatch = useDispatch();

	const token = useSelector((state) => state.authentication.token);
	const showFullScreen = useSelector((state) => state.table.showFullScreen);

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const [height, setHeight] = useState(400);
	const ref = useRef(null);

	const loadData = async () => {
		try {
			return await axios.get('/problems', config);
		} catch (error) {
			console.log('home page : ' + error);
		}
	};

	useEffect(() => {
		if (token) {
			setHeight(ref.current.clientHeight);

			loadData().then(({ data }) => {
				const dataArray = Object.entries(data);
				dispatch(tableAction.tableData(dataArray));
			});
		}
	}, [ref, token]);

	return (
		<div className='hompage-container' ref={ref}>
			<div>
				<Navbar />
			</div>
			<div className='homepage-sub-container'>
				{!showFullScreen && <Header />}
				{!showFullScreen && <Filter />}

				<Table height={height} />
			</div>
		</div>
	);
};

export default HomePage;
