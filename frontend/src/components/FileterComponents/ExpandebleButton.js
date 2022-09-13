import React, { useState } from 'react';
import './expandebleButton.css';

import FilterButton from './FilterButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';

const Difficulty = ({ type, isFilterExpand }) => {
	const showStatus = useSelector((state) => state.filter.showStatus);
	const showDifficulty = useSelector((state) => state.filter.showDifficulty);

	const isUp = type === 'Difficulty' ? showDifficulty : showStatus;

	let parameterArray = [];

	if (type === 'Difficulty') {
		parameterArray = [
			{ parameter: 'Easy', id: 1 },
			{ parameter: 'Medium', id: 2 },
			{ parameter: 'Hard', id: 3 },
		];
	} else if (type === 'Status') {
		parameterArray = [
			{ parameter: 'Revised', id: 1 },
			{ parameter: 'Unrevised', id: 2 },
		];
	}
	return (
		<div>
			<div>
				<div className='difficulty-filter-tab'>
					<div className='abcde1'>{type}</div>
					{isUp ? (
						<KeyboardArrowUpIcon className='abcde2' />
					) : (
						<KeyboardArrowDownIcon className='abcde2' />
					)}
				</div>
			</div>

			{isUp && (
				<div className='difficulty-hidden-container'>
					{parameterArray.map(({ parameter, id }) => (
						<FilterButton key={id} name={parameter} type={type} />
					))}
				</div>
			)}
		</div>
	);
};

export default Difficulty;
