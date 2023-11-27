import React from 'react';
const Categories = ({ handleCategoryChange, categoryList }) => {
	return (
		<section className='btn-container'>
			{categoryList.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => handleCategoryChange(item)}
						className='btn'
						type='button'>
						{item}
					</button>
				);
			})}
		</section>
	);
};

export default Categories;
