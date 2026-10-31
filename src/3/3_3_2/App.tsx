import { useState } from 'react';
import { foods, filterItems, Item } from './data';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  return <><SearchBar query={query} onQueryChange={setQuery} /><hr />
    <List items={filterItems(foods, query)} />
  </>;
}

function SearchBar({ query, onQueryChange }: { query: string; onQueryChange: (query: string) => void }) {
  return <label>Search: {' '}<input value={query} onChange={e => onQueryChange(e.target.value)} /></label>;
}

function List({ items }: { items: Item[] }) {
  return <table><tbody>{items.map(food =>
    <tr key={food.id}><td>{food.name}</td><td>{food.description}</td></tr>
  )}</tbody></table>;
}
