import  { useState } from 'react';


export function MovieSearch({ onSearch }: { onSearch: (query: string) => void }) {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div>
        <input 
          type="text" 
          placeholder="Buscar película..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    );
  }
