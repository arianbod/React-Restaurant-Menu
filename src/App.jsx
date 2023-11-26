import Title from './components/Title';
import Items from './components/Items';
import Filter from './components/Filter';
const App = () => {
	return (
		<main>
			<section className='menu'>
				<Title />
				<div className='title-underline' />
				<Filter />
				<Items />
			</section>
		</main>
	);
};
export default App;
