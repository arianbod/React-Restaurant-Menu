import Title from './components/Title';
import Items from './components/Items';
import Filter from './components/Filter';
import { useState } from 'react';
const App = () => {
	const [categoryState, setCategoryState] = useState(null);
	const CategoryHandler = (selectedCategory) => {
		setCategoryState(selectedCategory);
	};
	return (
		<main>
			<section className='menu'>
				<Title />
				<div className='title-underline' />
				<Filter CategoryHandler={CategoryHandler} />
				<Items category={categoryState} />
			</section>
		</main>
	);
};
export default App;
