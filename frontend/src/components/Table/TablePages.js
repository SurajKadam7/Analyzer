import React, { useEffect, useState } from 'react';
import './tablePages.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TablePages = ({ totalPages, updatePageNumber }) => {
	const [pageNumber, setPageNumber] = useState(1);

	const firstPages = [];
	// console.log('inside pages : ' + totalPages);

	useEffect(() => {
		updatePageNumber(pageNumber);
	}, [pageNumber]);

	// logic realated to pages

	const end = Math.min(pageNumber + 3, totalPages);

	for (let i = pageNumber; i <= end; i++) {
		firstPages.push(i);
	}

	// all onclick handlers .....

	const onClickSetPage = (event, pageNumber) => {
		setPageNumber(() => Math.min(pageNumber, totalPages));
	};

	const increasePage = () => {
		setPageNumber((page) => Math.min(totalPages, page + 1));
	};

	const decreasePage = () => {
		setPageNumber((page) => Math.max(1, page - 1));
	};
	return (
		<div className='page-container'>
			<botton className='page-number'>
				<KeyboardArrowLeftIcon onClick={decreasePage} />
			</botton>

			{firstPages.map((pageNum, index) => (
				<botton
					key={pageNum}
					className={`page-number first${index + 1}`}
					onClick={(event) => onClickSetPage(event, pageNum)}
				>
					{pageNum}
				</botton>
			))}
			{end !== totalPages && <botton className='page-range'>.</botton>}
			{end !== totalPages && <botton className='page-range'>.</botton>}

			{end !== totalPages && (
				<botton
					className='page-number'
					onClick={(event) => onClickSetPage(event, totalPages)}
				>
					{totalPages}
				</botton>
			)}

			<botton className='page-number'>
				<KeyboardArrowRightIcon onClick={increasePage} />
			</botton>
		</div>
	);
};

export default TablePages;
