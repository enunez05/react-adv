import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/ProductCard';

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
                <ProductCard.Image />
                <ProductCard.Title title="Cafe" />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard>
        </div>

    </div>

  )
}
