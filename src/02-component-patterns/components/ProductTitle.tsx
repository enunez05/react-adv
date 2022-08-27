import { useContext } from "react"
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
	title?:string,
	className?:string
	activeClassName?:string,
	style?: React.CSSProperties
}

export const ProductTitle = ({title, className, activeClassName, style}:Props) => {
	const {product} = useContext(ProductContext)
	return (
		<span style={style} className={`${styles.productDescription} ${className} ${activeClassName}`}>
			{title ? title : product.title}
		</span>
	)
}