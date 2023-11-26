import React from 'react';

const Filter = ({ CategoryHandler }) => {
	return (
		<section className='btn-container'>
			<button
				onClick={() => CategoryHandler('')}
				className='btn'
				type='button'>
				All
			</button>
			<button
				onClick={() => CategoryHandler('breakfast')}
				className='btn'
				type='button'>
				Breakfast
			</button>
			<button
				className='btn'
				onClick={() => CategoryHandler('lunch')}
				type='button'>
				Lunch
			</button>
			<button
				onClick={() => CategoryHandler('shakes')}
				className='btn'
				type='button'>
				Shakes
			</button>
		</section>
	);
};

export default Filter;
