
import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../intefaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
	className?: string,
	style?: React.CSSProperties,
}

export const ProductCard = ({ children, product, className, style }: Props  ) => {

    const {counter, increaseBy } = useProduct();
    return (
		<Provider value={{ counter, increaseBy, product }}>
			<div style={style} className={ `${styles.productCard} ${className}` }>
				{children}
			</div>
		</Provider>
    )
}
//ProductCard.Image = ProductImage;
//ProductCard.Title = ProductTitle;
//ProductCard.Buttons = ProductButtons;