import React, { useState } from 'react';

import SingleItem from './SingleItem';
const Items = ({ data, categoryStateData }) => {
	return (
		<section className='section-center'>
			{data
				//checking the user selectedFilters
				.filter((filteredItem) =>
					categoryStateData ? filteredItem.category === categoryStateData : true
				)
				//mapping all the Items from list of filtered
				.map((item) => {
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
