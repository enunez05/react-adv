import { useState } from 'react';
import {ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
    id:1,
    title: 'Coffe Mug - Card',
    img:'./coffee-mug.png'
}
const product2 = {
    id:2,
    title: 'Coffe Mug - Meme',
    img:'./coffee-mug2.png'
}

const products:Product[] = [product1, product2];

interface ProductInCart extends Product {
    count:number
}

export const ShoppingPage = () => {

    const [shoppingCard, setShoppingCard] = useState<{ [key:string]: ProductInCart }>({}); //llaves cuadradas indican x cantidad de productos en el state del objeto
    
    const onProductCountChange = () => {
        console.log('onProductCountChange')
    }

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
                        onChange={ () => onProductCountChange() }
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" activeClassName="active" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }
        </div>

        <div className="shopping-cart">
            <ProductCard
                product={product2}
                className="bg-dark text-white"
                style={{width:'100px'}}
                onChange={ () => onProductCountChange() }

            >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
            <ProductCard
                product={product1}
                className="bg-dark text-white"
                style={{
                    width:'100px'
                }}
            >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
        </div>
    </div>
  )
}