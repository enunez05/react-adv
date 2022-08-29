import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
	id:number,
	title:string,
	img?:string,
	value?:number
}

export interface ProductContextProps {
	counter:number,
	increaseBy: (value:number)=> void,
	maxCount?:number
	product:Product,
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps) : JSX.Element,
	Buttons: (Props:ProductButtonsProps) => JSX.Element
	Image: (Props:ProductImageProps) => JSX.Element,
	Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
	product: Product,
	count: number
}

export interface ProductInCart extends Product {
    // id:number, extended
	// title:string,extended
	// img?:string extended
    count:number
}

export interface InitialValues {
	count?: number,
	maxCount?: number;
}

export interface ProductCardHandlers {
	count:number;
	isMaxCountReached: boolean;
	increaseBy: (value:number)=> void;
	product:Product;
	maxCount?: number;
	reset:() => void
}