import React from 'react';
import './row.css';

const Row = ({ row, border }) => {
	const firstTd = 'first-data-col' + border;
	const secondTd = 'row' + border;
	const array = Object.values(row).slice(2, -1);

	return (
		<tbody>
			<td className={firstTd}>
				<input type='checkbox'></input>
			</td>
			{array.map((name) => (
				<td className={secondTd}>{name}</td>
			))}
		</tbody>
	);
};

export default Row;
