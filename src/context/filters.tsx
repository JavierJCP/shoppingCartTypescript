import { createContext, useState } from 'react';
import { Product } from '../interfaces/products';

interface FilterContext {
  filters: {
    price: number;
    category: string;
  };
  filterProducts: (products: Product[]) => Product[];
  updatePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface porps {
  children: React.ReactNode;
}

export const FilterContext = createContext<FilterContext>({} as FilterContext);

export function FilterProvider({ children }: porps) {
  const [filters, setFilters] = useState<FilterContext['filters']>({
    price: 0,
    category: 'all',
  });

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      price: Number(e.target.value),
    }));
  };

  const updateCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        filterProducts,
        updatePrice,
        updateCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
