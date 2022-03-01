import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';
// objeto literal, que puede ser cambiado por un objeto desde una api
const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: 'coffee-mug.png'
}

export const ShoppingPage = () => {
	return (<>
		<div>
			<h1>ShoppingPage</h1>
			<div style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '1.5rem'
			}}>
				<ProductCard
					product={ product }
					className="bg-dark text-white"
				>
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title title={'Cafe bien bueno alv'} className="text-white" />
					<ProductCard.Buttons className="custom-buttons"/>
				</ProductCard>

				<ProductCard
					product={ product }
					className="bg-dark text-white"
				>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-white"/>
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard
					product={ product }
					style={{backgroundColor: '#70D1F8'}}
				>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>

			</div>
		</div>
	</>
	);
}
