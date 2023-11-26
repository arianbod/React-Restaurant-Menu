import React from 'react';
import data from './../data';
const Items = () => {
	return (
		<section className='section-center'>
			{data.map((item) => {
				return (
					<article
						key={item.id}
						className='menu-item'>
						<img
							src={item.img}
							className='img'
							alt={item.title}
						/>
						<section className='menu-info'>
							<header>{item.title}</header>
							<p className='item-text'>{item.desc}</p>
						</section>
					</article>
				);
			})}
		</section>
	);
};

export default Items;
