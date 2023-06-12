import { useCart } from '../hooks/useCart';
import '../styles/Cart.css';

function Cart() {
  const { cart, addToCart, subtractFromCart, clearCart } = useCart();
  return (
    <>
      <label className='cart__icon' htmlFor='cart'>
        Cart
      </label>
      <input className='cart__checkbox' type='checkbox' id='cart' hidden />
      <aside className='cart'>
        <ul className='cart__list'>
          {cart?.map((product) => (
            <li key={product.id} className='cart__item'>
              <figure>
                <img
                  src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt=''
                  style={{ width: '100px' }}
                />
              </figure>
              <div>
                <strong>{product.title}</strong> - 💲
                {product.price * product.quantity}
              </div>
              <div>
                <p>Qty: {product.quantity}</p>
              </div>
              <div>
                <button onClick={() => addToCart(product)}>+</button>
                <button onClick={() => subtractFromCart(product)}>-</button>
              </div>
            </li>
          ))}
        </ul>
        <footer className='cart__footer'>
          <button onClick={() => clearCart()}>clear cart</button>
        </footer>
      </aside>
    </>
  );
}

export default Cart;
