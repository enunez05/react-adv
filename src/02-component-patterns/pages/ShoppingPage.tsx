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
                initialValues={{
                    count:4,
                    maxCount:10,
                }}
            >
                {
                    (args) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white" activeClassName="active" />
                            <ProductButtons className="custom-buttons" />
                            {/* <button onClick={reset}>Reset</button> */}

                            {JSON.stringify(args, null, 3)}
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}