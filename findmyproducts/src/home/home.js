import './home.css';
import words from '../words';
import Product from '../product/product';
import { useState, useEffect } from 'react';


const Home = () => {

	

	const [state, setState] = useState([]);
	const [result, setResult] = useState([]);

	const search = (e) => {
		setState(e.target.value.toLowerCase()); /*A seteState a state[]-be beírja az input mezőbe beírt értékeket és kisbetűssé alakítja*/
	};


	useEffect(() => {
		let result = words.filter((item) => JSON.stringify(item).toLowerCase().includes(state)); /*A result tömbbe bekerülnek a word object azon elemei, melyek tartalmazzák azokat a betűket, amiket a state[] array tartalmaz, tehát amik az inputba bekerültek*/
		return () => {
			setResult(state.length === 0 ? [] : result); /*A result []-be bekerülnek a kiszűrt words object elemek*/
		}
	}, [state]);
	words.forEach((word) => console.log(word.title));
	console.log(result);

	let productList = [];

	productList = result.map((item) => (<Product {...item} key={item.filename}/>)); /*A result [] elemeit kilistázzuk a Product komponensbe az object elemek (item) property value-jait beleírva*/

	return (
		<div className='container'>
			<form className='form'>
				<input type='text' placeholder='Start typing you are searching for!' onChange={search} /> {/*Az input mező változása elindítja a search functiont*/}
			</form>
			<div className='product-list'>
				{productList}
			</div>

		</div>
		
	)
	
}

export default Home;