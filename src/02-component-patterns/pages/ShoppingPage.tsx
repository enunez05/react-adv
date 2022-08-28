import {ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0]

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard
                product={product}
                className="bg-dark text-white"
            >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white" activeClassName="active" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
        </div>
    )
}