import React, { useState } from 'react';
import './Search.css';
import useSearch from '../../../hooks/useSearch';
import SeeNow from '../SeeNow';
import MovieDetail from '../MovieDetail';
import { Movie } from '../../../types/types';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const { results,selectedMovie, loading, error, handleSearch,  handleMovieClick,
    handleCloseDetail,} = useSearch(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClose = () => {
    setQuery('');
  };
  const [showSeeNow, setShowSeeNow] = useState(false);

  const handleSeeNowClick = () => {
    setShowSeeNow(true);
  };

  const handleCloseSeeNow = () => {
    setShowSeeNow(false);
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
          results.map((item,index) => (
            <div key={index} className="result-card" onClick={() => handleMovieClick(item as Movie)}>
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
      {selectedMovie && (
        <>
          <MovieDetail
            movie={selectedMovie}
            onClose={handleCloseDetail}
            onSeeNow={handleSeeNowClick}
          />
          {showSeeNow && (
            <SeeNow
              movieId={selectedMovie.id}
              onClose={handleCloseSeeNow}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Search;