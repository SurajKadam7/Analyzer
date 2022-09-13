import './filter.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import SearchIcon from '@mui/icons-material/Search';

import { filterAction } from '../../Reducers/FilterReducer';

import ExpandebleButton from '../FileterComponents/ExpandebleButton';

const Filter = () => {
	const dispatch = useDispatch();
	const assending = useSelector((state) => state.filter.assending);

	// filter Handlers

	const orderDirectionHandler = () => {
		dispatch(filterAction.orderFilter());
	};

	const statusButtonHandler = () => {
		dispatch(filterAction.statusFilter());
	};

	const difficultyButtonHander = () => {
		dispatch(filterAction.difficultyFilter());
	};

	return (
		<div className='filter-container'>
			<div onClick={statusButtonHandler}>
				<ExpandebleButton type={'Status'} />
			</div>
			<div onClick={difficultyButtonHander}>
				<ExpandebleButton type={'Difficulty'} />
			</div>

			<div className='assending-desending-arrows'>
				{assending ? (
					<KeyboardDoubleArrowUpIcon onClick={orderDirectionHandler} />
				) : (
					<KeyboardDoubleArrowDownIcon onClick={orderDirectionHandler} />
				)}
			</div>
			<div className='search-container'>
				<input
					className='search-input-container'
					placeholder='search problem'
				></input>
				<SearchIcon className='search-icon' />
			</div>
		</div>
	);
};

export default Filter;
