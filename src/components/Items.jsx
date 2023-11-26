import React from 'react';
import data from './../data';
import SingleItem from './SingleItem';
const Items = () => {
	return (
		<section className='section-center'>
			{data.map((item) => {
				return (
					<SingleItem
						key={item.id}
						{...item}
					/>
				);
			})}
		</section>
	);
};

export default Items;
