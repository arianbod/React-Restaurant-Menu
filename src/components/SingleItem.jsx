import React from 'react';

const SingleItem = ({ img, title, desc, price }) => {
	return (
		<article className='menu-item'>
			<img
				src={img}
				className='img'
				alt={title}
			/>
			<section className='item-info'>
				<header>
					<h5>{title}</h5>
					<span className='item-price'>{price}</span>
				</header>
				<p className='item-text'>{desc}</p>
			</section>
		</article>
	);
};

export default SingleItem;
