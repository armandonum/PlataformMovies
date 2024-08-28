import React, { useState } from 'react';
import './Search.css';
import useSearch from '../../../hooks/useSearch';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const { results, loading, error, handleSearch } = useSearch(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClose = () => {
    setQuery('');
  };

  React.useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for movies or TV series..."
          value={query}
          onChange={handleChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="results-container">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.id} className="result-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
              />
              <div className="result-info">
                <h3>{item.title || item.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;