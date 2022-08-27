import {ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
    id:1,
    title: 'Coffe Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'1rem'
        }}>
            <ProductCard product={product}>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title title="Cafe" className="text-white" activeClassName="active" />
                <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>

            <ProductCard
                product={product}
                className="bg-dark text-white"
            >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white" activeClassName="active" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard
                product={product}
                style={{
                    fontWeight: 'bold',
                    backgroundColor:'#70D1F9'
                }}           
            >
                <ProductImage />
                <ProductTitle />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'center',
                }} />
            </ProductCard>
        </div>
    </div>
  )
}