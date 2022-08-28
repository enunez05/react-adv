import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({}); //llaves cuadradas indican x cantidad de productos en el state del objeto
    
    const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
        // console.log(count, product)
        setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart =  oldShoppingCart[product.id] || {...product, count:0}

            if(Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            const { [product.id]: deleted, ...rest } = oldShoppingCart;
            console.log({deleted});
            return rest;
            // if(count === 0) {
            //     // extraemo el producto con el id
            //     //y se nombra deleted para verlo en consola y solo se regresa el ...rest
            //     const { [product.id]: deleted, ...rest } = oldShoppingCart;
            //     console.log({deleted});
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id] : {...product, count}
            // }
        } )
    }
    return {
        onProductCountChange,
        shoppingCart
    };
}
