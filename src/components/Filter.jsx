import React from 'react';

const Filter = () => {
	return (
		<section className='btn-container'>
			<button
				className='btn'
				type='button'>
				All
			</button>
			<button
				className='btn'
				type='button'>
				Breakfast
			</button>
			<button
				className='btn'
				type='button'>
				Lunch
			</button>
			<button
				className='btn'
				type='button'>
				Shakes
			</button>
		</section>
	);
};

export default Filter;
