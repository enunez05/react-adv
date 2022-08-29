import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
	className?:string;
	style?: React.CSSProperties
}

export const ProductButtons = ({className, style}:Props) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext);


	const isMyReached = useCallback(
	  () => !!maxCount && counter === maxCount,
	  [counter, maxCount],
	)
	
	return (
		<div style={style} className={`${styles.buttonsContainer} ${className}`}>
			<button className={styles.buttonMinus} onClick={()=> increaseBy(-1)}> - </button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={`${styles.buttonAdd} ${ isMyReached() && styles.disabled}`} onClick={()=> increaseBy(1)}>+</button>
		</div>
	)
}