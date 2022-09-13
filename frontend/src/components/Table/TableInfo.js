import React from 'react';
import './tableInfo.css';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import TablePages from './TablePages';
import { useDispatch, useSelector } from 'react-redux';
import { tableAction } from '../../Reducers/TableReducer';

const TableInfo = ({ totalPages, updatePageNumber }) => {
	const dispatch = useDispatch();

	const showDifficulty = useSelector((state) => state.filter.showDifficulty);
	const showStatus = useSelector((state) => state.filter.showStatus);

	const setAsspetRatioHandler = () => {
		dispatch(tableAction.fullScreen());
	};

	const showInfo = showDifficulty || showStatus;

	return (
		<>
			{!showInfo ? (
				<div className='table-info-container'>
					<div>
						<span>All Problems</span>
					</div>

					<div className='pages-number'>
						<TablePages
							totalPages={totalPages}
							updatePageNumber={updatePageNumber}
						/>
					</div>

					<div className='zoom-container'>
						<AspectRatioIcon
							onClick={setAsspetRatioHandler}
							className='zoom-in-out abc-table ab-table'
						/>
					</div>
				</div>
			) : (
				<div className='blank'></div>
			)}
		</>
	);
};

export default TableInfo;
