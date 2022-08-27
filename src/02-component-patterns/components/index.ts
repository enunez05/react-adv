import { ProductCard as ProdcutCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitlet';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitlet';

export const ProductCard: ProductCardHOCProps = Object.assign(ProdcutCardHOC,{
     Title: ProductTitle,
     Image: ProductImage,
     Buttons: ProductButtons
})

export default ProductCard;