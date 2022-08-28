import {ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display:'flex',
                flexWrap:'wrap',
                gap:'1rem'
            }}>
                {
                    products.map(product=>(
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={(e) => onProductCountChange(e) }
                            value={shoppingCart[product.id]?.count||0}                    
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-white" activeClassName="active" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map( ([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{width:'100px'}}
                            onChange={onProductCountChange} 
                            value={product.count}
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>       
        </div>
    )
}