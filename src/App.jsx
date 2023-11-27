import Title from './components/Title';
import Items from './components/Items';
import Categories from './components/Categories';
import { useState } from 'react';
import data from './data';
const App = () => {
	const [categoryState, setCategoryState] = useState(null);
	const handleCategoryChange = (selectedCategory) => {
		//checking the selected category state to filter data, in the items.jsx we are checking if categoryState is falsy then show all the items
		const categoryList = ['All', ...new Set(data.map((item) => item.category))];
		console.log(categoryList);
		setCategoryState(selectedCategory !== 'All' ? selectedCategory : null);
	};
	return (
		<main>
			<section className='menu'>
				<Title />
				<div className='title-underline' />
				<Categories
					handleCategoryChange={handleCategoryChange}
					categoryList={categoryList}
				/>
				<Items
					categoryStateData={categoryState}
					data={data}
				/>
			</section>
		</main>
	);
};
export default App;
