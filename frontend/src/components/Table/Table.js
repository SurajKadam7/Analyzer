import React, { useState } from 'react';
import Row from './Row';
import TableHeading from './TableHeading';
import './table.css';
import TableInfo from './TableInfo';
import { useSelector } from 'react-redux';

const Table = ({ height }) => {
	const data = useSelector((state) => state.table.tableData);

	const showFullScreen = useSelector((state) => state.table.showFullScreen);

	const [pageNumber, setPageNumber] = useState(1);

	const updatePageNumber = (pageNum) => {
		setPageNumber(() => pageNum);
	};

	const REMAININGFACTOR = 488 / 170;
	let minusFactor = 50;

	if (!showFullScreen) {
		minusFactor = height / REMAININGFACTOR;
	}

	const tableHeight = height - minusFactor - 70; //60 for upper extra part of table

	const ROWFACTOR = 278 / 8;

	const numberOfRows = Math.trunc(tableHeight / ROWFACTOR);

	let start = numberOfRows * (pageNumber - 1);

	const end = Math.min(start + numberOfRows, data.length - 1);

	const rows = data.slice(start, end);

	const totalPages = Math.trunc(data.length / numberOfRows) + 1;

	return (
		<div className='table-container'>
			<TableInfo totalPages={totalPages} updatePageNumber={updatePageNumber} />
			<table className='table-content'>
				<TableHeading />

				{rows.map((row) => (
					<Row key={row[0]} row={row[1]} border={' border'} />
				))}
				{data.length > 0 && (
					<Row key={data[end][0]} row={data[end][1]} border={''} />
				)}
			</table>
		</div>
	);
};

export default Table;
