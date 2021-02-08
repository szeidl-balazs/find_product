import './product.css';
import '../home/home';
import '../words';


const Product = (props) => {

	const rater = (rate) => {
		if (rate === 1) {
			return '*'
		} else if (rate === 2) {
			return '**'
		} else if (rate === 3) {
			return '***'
		} else if (rate === 4) {
			return '****'
		} else if (rate === 5) {
			return '*****'
		} else {
			return ''
		}
	}

	return (

		<div className='product-wrap'>
			<div className='product-main'>
				<h1>{props.title}</h1>
				<p>department: <em>{props.type}</em></p>
				<p>description: {props.description}</p>
				<div className='dimension'>
					<p>height: {props.height}</p>
					<p>width: {props.width}</p>
				</div>
				<div className='price-rate'>
					<h3>price: {props.price}</h3>
					<p>rating: <strong>{rater(props.rating)}</strong></p>
				</div>
		</div>

		</div>
	)
}

export default Product;