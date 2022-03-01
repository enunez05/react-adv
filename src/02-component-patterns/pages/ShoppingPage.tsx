import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

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
				<ProductCard product={ product }>
					<ProductCard.Image />
					<ProductCard.Title title={'Cafe bien bueno alv'} />
					<ProductCard.Buttons />
				</ProductCard>
				<ProductCard product={ product }>
					<ProductImage />
					<ProductTitle/>
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	</>
	);
}
