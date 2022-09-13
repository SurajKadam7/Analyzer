import React from 'react';
import './tableHeading.css';

const TableHeading = () => {
	return (
		<thead className='table-heading-row'>
			<th className='first-hedding-col'>
				<input className='row checkbox' type='checkbox'></input>
			</th>
			<th>Problem Name</th>
			<th>Difficulty Level</th>
			<th>Platform Name</th>
			<th>Revision Status</th>
			<th>Link</th>
		</thead>
	);
};

export default TableHeading;
