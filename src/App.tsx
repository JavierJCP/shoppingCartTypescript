import Filters from './components/Filters';
import Products from './components/Products';
import { useProducts } from './hooks/useProducts';
import { useFilters } from './hooks/useFilters';
import Cart from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <header>
        <h1 className='title'>Shopping Cart 🛒</h1>
        <Filters />
      </header>

      <main>
        <Cart />
        <Products products={filteredProducts} />
      </main>
    </CartProvider>
  );
}

export default App;
