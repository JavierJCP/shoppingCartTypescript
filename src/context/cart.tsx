import { createContext, useState } from 'react';
import { Product } from '../interfaces/products';

interface CartContext {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  subtractFromCart: (product: Product) => void;
}

interface props {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContext>({} as CartContext);

export function CartProvider({ children }: props) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
    return setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const subtractFromCart = (product: Product) => {
    const newCart = structuredClone(cart);
    const productInCart = newCart.find((item) => item.id === product.id);
    if (productInCart && productInCart.quantity > 1) {
      productInCart.quantity -= 1;
      return setCart(newCart);
    }
    return setCart((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  const removeFromCart = (product: Product) => {
    return setCart((prevState) =>
      prevState.filter((item) => item.id !== product.id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        subtractFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
