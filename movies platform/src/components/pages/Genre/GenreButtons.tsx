import React from 'react';


interface Genre {
  id: number;
  name: string;
}

interface GenreButtonsProps {
  genres: Genre[];
  onSelectGenre: (genre: Genre) => void;
}

const GenreButtons: React.FC<GenreButtonsProps> = ({ genres, onSelectGenre }) => {
  return (
    <div className="genre-section">
      <h2 className="genre-title">Genres</h2>
      <ul className="genre-list">
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="genre-item"
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreButtons;
