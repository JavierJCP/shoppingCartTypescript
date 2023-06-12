import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

function Filters() {
  const priceId = useId();
  const categoryId = useId();
  const { filters, updatePrice, updateCategory } = useFilters();

  return (
    <section className='filters'>
      <div className='filter'>
        <label htmlFor={priceId}>Price: </label>
        <input
          type='range'
          id={priceId}
          min='0'
          max='1000'
          onChange={(e) => updatePrice(e)}
          value={filters.price}
        />
        <span>💲{filters.price}</span>
      </div>

      <div className='filter'>
        <label htmlFor={categoryId}>Category: </label>
        <select id={categoryId} onChange={(e) => updateCategory(e)}>
          <option value='all'>all</option>
          <option value='electronics'>electronics</option>
          <option value='jewelery'>jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
