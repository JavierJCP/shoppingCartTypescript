import { useCart } from '../hooks/useCart';
import { Product } from '../interfaces/products';
import '../styles/Products.css';

function Products({ products }: { products: Product[] }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };

  return !(products.length > 0) ? (
    <h2>No products found</h2>
  ) : (
    <ul className='products'>
      {products?.map((product) => {
        const isProductInCart = checkProductInCart(product);

        return (
          <li key={product.id} className='product'>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>

            <div>
              <strong>{product.title}</strong> - 💲{product.price}
            </div>

            <div>
              <p>{'⭐'.repeat(product.rating.rate)}</p>
            </div>

            <div>
              <button
                className={isProductInCart ? 'remove' : ''}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product);
                }}
              >
                {isProductInCart ? 'remove from cart' : 'add to cart'}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
