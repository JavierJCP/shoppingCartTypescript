import { Product } from '../interfaces/products';
import products from '../mocks/products.json';

export function useProducts() {
  const mappedProducts: Product[] = products?.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.image,
    rating: product.rating,
  }));

  return { products: mappedProducts };
}
