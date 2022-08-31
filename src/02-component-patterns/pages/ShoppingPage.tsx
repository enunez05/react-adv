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
                initialValues={{
                    count:4,
                    maxCount:10,
                }}
            >
                {
                    (args) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}