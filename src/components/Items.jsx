import React, { useState } from 'react';
import data from './../data';
import SingleItem from './SingleItem';
const Items = (props) => {
	return (
		<section className='section-center'>
			{data
				.filter((filteredItem) =>
					props.category
						? filteredItem.category === props.category
						: filteredItem.id > 0
				)
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
