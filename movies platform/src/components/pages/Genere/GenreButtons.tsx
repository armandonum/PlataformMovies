import React from 'react';


interface Genere {
  id: number;
  name: string;
}

interface GenereButtonsProps {
  generes: Genere[];
  onSelectGenere: (genere: Genere) => void;
}

const GenereButtons: React.FC<GenereButtonsProps> = ({ generes, onSelectGenere }) => {
  return (
    <div className="genere-section">
      <h2 className="genere-title">Generes</h2>
      <ul className="genere-list">
        {generes.map((genere) => (
          <li
            key={genere.id}
            className="genere-item"
            onClick={() => onSelectGenere(genere)}
          >
            {genere.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenereButtons;
