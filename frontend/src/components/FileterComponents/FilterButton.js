import React from 'react';
import './filterButton.css';
import filterAction from '../../Reducers/FilterReducer';
import { useDispatch } from 'react-redux';

const FilterButton = ({ name, type }) => {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		if (type == 'Difficulty') {
			dispatch(filterAction.statusFilter());
		} else {
			dispatch(filterAction.difficultyFilter());
		}
	};
	return (
		<span className='filter-btn' onClick={onClickHandler}>
			{name}
		</span>
	);
};

export default FilterButton;
